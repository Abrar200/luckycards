import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://kcpfepowlbabhttdxczc.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVjYzg0NjAwLWRiNzEtNDQ5Zi04OGJlLTFjN2QyMGJiMzJhYiJ9.eyJwcm9qZWN0SWQiOiJrY3BmZXBvd2xiYWJodHRkeGN6YyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc1NDc5ODE1LCJleHAiOjIwOTA4Mzk4MTUsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.cy1aYUT_P4kb-kCKIyME2B5hij4syGW8X5zDMX0YI8o';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };