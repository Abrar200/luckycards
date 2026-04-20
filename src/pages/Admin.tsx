import React, { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1775479759781_d8276288.png';

interface Submission {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  platform_type: string;
  message: string;
  status: 'new' | 'reviewed' | 'contacted';
  submitted_at: string;
}

type SortField = 'submitted_at' | 'company_name' | 'contact_name' | 'email' | 'platform_type' | 'status';
type SortDir = 'asc' | 'desc';

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; border: string }> = {
  new: { label: 'New', bg: 'bg-[#D4AF37]/10', text: 'text-[#D4AF37]', border: 'border-[#D4AF37]/25' },
  reviewed: { label: 'Reviewed', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/25' },
  contacted: { label: 'Contacted', bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/25' },
};

const PLATFORM_LABELS: Record<string, string> = {
  casino: 'Casino Operator',
  aggregator: 'Game Aggregator',
  investor: 'Investor',
  other: 'Other',
};

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('submitted_at');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order(sortField, { ascending: sortDir === 'asc' });

      if (fetchError) throw fetchError;
      setSubmissions((data as Submission[]) || []);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError('Failed to load submissions. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [sortField, sortDir]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const { error: updateError } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (updateError) throw updateError;

      setSubmissions(prev =>
        prev.map(s => (s.id === id ? { ...s, status: newStatus as Submission['status'] } : s))
      );
    } catch (err: any) {
      console.error('Update error:', err);
      alert('Failed to update status. Please try again.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const filtered = submissions.filter(s => {
    if (filterStatus !== 'all' && s.status !== filterStatus) return false;
    if (filterPlatform !== 'all' && s.platform_type !== filterPlatform) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        s.company_name.toLowerCase().includes(q) ||
        s.contact_name.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q) ||
        (s.message && s.message.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const counts = {
    all: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    reviewed: submissions.filter(s => s.status === 'reviewed').length,
    contacted: submissions.filter(s => s.status === 'contacted').length,
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ml-1 transition-transform ${
        sortField === field ? 'text-[#D4AF37]' : 'text-white/20'
      } ${sortField === field && sortDir === 'asc' ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="flex items-center gap-3 group">
              <img src={LOGO_URL} alt="Lucky Cards" className="h-8 w-auto" />
            </button>
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <h1 className="hidden sm:block text-sm font-semibold text-white/70">Lead Management</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={loading ? 'animate-spin' : ''}>
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Refresh
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 text-xs font-medium rounded-lg text-black"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { key: 'all', label: 'Total Leads', count: counts.all, color: 'white' },
            { key: 'new', label: 'New', count: counts.new, color: '#D4AF37' },
            { key: 'reviewed', label: 'Reviewed', count: counts.reviewed, color: '#60a5fa' },
            { key: 'contacted', label: 'Contacted', count: counts.contacted, color: '#4ade80' },
          ].map(stat => (
            <button
              key={stat.key}
              onClick={() => setFilterStatus(stat.key)}
              className={`p-5 rounded-xl border transition-all duration-300 text-left ${
                filterStatus === stat.key
                  ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5'
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
              }`}
            >
              <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.count}</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by company, name, email, or message..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
            />
          </div>

          {/* Platform filter */}
          <select
            value={filterPlatform}
            onChange={e => setFilterPlatform(e.target.value)}
            className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors appearance-none cursor-pointer min-w-[160px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            <option value="all" className="bg-[#1a1a1a]">All Platforms</option>
            <option value="casino" className="bg-[#1a1a1a]">Casino Operator</option>
            <option value="aggregator" className="bg-[#1a1a1a]">Game Aggregator</option>
            <option value="investor" className="bg-[#1a1a1a]">Investor</option>
            <option value="other" className="bg-[#1a1a1a]">Other</option>
          </select>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
            <button onClick={fetchSubmissions} className="ml-auto text-red-300 hover:text-red-200 underline text-xs">
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
              <p className="text-white/40 text-sm">Loading submissions...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-white/[0.03] border border-white/5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white/60">
              {submissions.length === 0 ? 'No submissions yet' : 'No matching results'}
            </h3>
            <p className="text-sm text-white/30 mt-1 max-w-sm">
              {submissions.length === 0
                ? 'Contact form submissions will appear here once someone fills out the form on the landing page.'
                : 'Try adjusting your search or filter criteria.'}
            </p>
            {submissions.length > 0 && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterStatus('all');
                  setFilterPlatform('all');
                }}
                className="mt-4 text-[#D4AF37] text-sm hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Table */}
        {!loading && !error && filtered.length > 0 && (
          <div className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.01]">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    {[
                      { field: 'submitted_at' as SortField, label: 'Date' },
                      { field: 'company_name' as SortField, label: 'Company' },
                      { field: 'contact_name' as SortField, label: 'Contact' },
                      { field: 'email' as SortField, label: 'Email' },
                      { field: 'platform_type' as SortField, label: 'Platform' },
                      { field: 'status' as SortField, label: 'Status' },
                    ].map(col => (
                      <th
                        key={col.field}
                        onClick={() => handleSort(col.field)}
                        className="text-left px-5 py-3.5 text-xs font-semibold text-white/40 uppercase tracking-wider cursor-pointer hover:text-white/60 transition-colors select-none"
                      >
                        {col.label}
                        <SortIcon field={col.field} />
                      </th>
                    ))}
                    <th className="px-5 py-3.5 text-xs font-semibold text-white/40 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(sub => {
                    const statusCfg = STATUS_CONFIG[sub.status] || STATUS_CONFIG.new;
                    const isExpanded = expandedRow === sub.id;
                    return (
                      <React.Fragment key={sub.id}>
                        <tr
                          className={`border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-pointer ${
                            isExpanded ? 'bg-white/[0.02]' : ''
                          }`}
                          onClick={() => setExpandedRow(isExpanded ? null : sub.id)}
                        >
                          <td className="px-5 py-4 text-sm text-white/50 whitespace-nowrap">
                            {formatDate(sub.submitted_at)}
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-white">
                            {sub.company_name}
                          </td>
                          <td className="px-5 py-4 text-sm text-white/70">
                            {sub.contact_name}
                          </td>
                          <td className="px-5 py-4 text-sm text-white/50">
                            <a
                              href={`mailto:${sub.email}`}
                              onClick={e => e.stopPropagation()}
                              className="hover:text-[#D4AF37] transition-colors"
                            >
                              {sub.email}
                            </a>
                          </td>
                          <td className="px-5 py-4 text-sm text-white/50">
                            {PLATFORM_LABELS[sub.platform_type] || sub.platform_type}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusCfg.bg} ${statusCfg.text} ${statusCfg.border}`}>
                              {statusCfg.label}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-right" onClick={e => e.stopPropagation()}>
                            <select
                              value={sub.status}
                              onChange={e => updateStatus(sub.id, e.target.value)}
                              disabled={updatingId === sub.id}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]/40 transition-colors appearance-none cursor-pointer disabled:opacity-50"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 8px center',
                                paddingRight: '28px',
                              }}
                            >
                              <option value="new" className="bg-[#1a1a1a]">New</option>
                              <option value="reviewed" className="bg-[#1a1a1a]">Reviewed</option>
                              <option value="contacted" className="bg-[#1a1a1a]">Contacted</option>
                            </select>
                          </td>
                        </tr>
                        {/* Expanded message row */}
                        {isExpanded && (
                          <tr className="border-b border-white/[0.03] bg-white/[0.015]">
                            <td colSpan={7} className="px-5 py-4">
                              <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Message</span>
                                <p className="text-sm text-white/60 leading-relaxed max-w-3xl">
                                  {sub.message || <span className="italic text-white/30">No message provided</span>}
                                </p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-white/[0.03]">
              {filtered.map(sub => {
                const statusCfg = STATUS_CONFIG[sub.status] || STATUS_CONFIG.new;
                const isExpanded = expandedRow === sub.id;
                return (
                  <div key={sub.id} className="p-4">
                    <button
                      onClick={() => setExpandedRow(isExpanded ? null : sub.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{sub.company_name}</div>
                          <div className="text-xs text-white/50 mt-0.5">{sub.contact_name}</div>
                        </div>
                        <span className={`flex-shrink-0 inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusCfg.bg} ${statusCfg.text} ${statusCfg.border}`}>
                          {statusCfg.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
                        <span>{PLATFORM_LABELS[sub.platform_type] || sub.platform_type}</span>
                        <span className="text-white/10">|</span>
                        <span>{formatDate(sub.submitted_at)}</span>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                        <div>
                          <span className="text-xs text-white/30 uppercase tracking-wider">Email</span>
                          <a href={`mailto:${sub.email}`} className="block text-sm text-[#D4AF37] mt-0.5">
                            {sub.email}
                          </a>
                        </div>
                        {sub.message && (
                          <div>
                            <span className="text-xs text-white/30 uppercase tracking-wider">Message</span>
                            <p className="text-sm text-white/60 mt-0.5 leading-relaxed">{sub.message}</p>
                          </div>
                        )}
                        <div>
                          <span className="text-xs text-white/30 uppercase tracking-wider block mb-1.5">Update Status</span>
                          <select
                            value={sub.status}
                            onChange={e => updateStatus(sub.id, e.target.value)}
                            disabled={updatingId === sub.id}
                            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors appearance-none cursor-pointer disabled:opacity-50"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 12px center',
                            }}
                          >
                            <option value="new" className="bg-[#1a1a1a]">New</option>
                            <option value="reviewed" className="bg-[#1a1a1a]">Reviewed</option>
                            <option value="contacted" className="bg-[#1a1a1a]">Contacted</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Results count */}
        {!loading && !error && filtered.length > 0 && (
          <div className="mt-4 text-xs text-white/30 text-center">
            Showing {filtered.length} of {submissions.length} submission{submissions.length !== 1 ? 's' : ''}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
