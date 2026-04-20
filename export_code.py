import os

# === CONFIG ===
ROOT_DIR = "."  # current directory (run from project root)
OUTPUT_FILE = "all_code.txt"
EXCLUDE_DIRS = {"node_modules", ".git", "__pycache__"}
EXCLUDE_FILES = {"package-lock.json", OUTPUT_FILE}


def should_exclude(path):
    parts = path.split(os.sep)
    for part in parts:
        if part in EXCLUDE_DIRS:
            return True
    if os.path.basename(path) in EXCLUDE_FILES:
        return True
    return False


def is_code_file(filename):
    # Adjust extensions if needed
    code_extensions = (
        ".ts", ".tsx", ".js", ".jsx",
        ".py", ".json", ".html", ".css",
        ".md", ".config", ".sh"
    )
    return filename.endswith(code_extensions)


def main():
    with open(OUTPUT_FILE, "w", encoding="utf-8") as outfile:
        for root, dirs, files in os.walk(ROOT_DIR):
            # Remove excluded directories from traversal
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

            for file in files:
                full_path = os.path.join(root, file)

                if should_exclude(full_path):
                    continue

                if not is_code_file(file):
                    continue

                relative_path = os.path.relpath(full_path, ROOT_DIR)

                try:
                    with open(full_path, "r", encoding="utf-8") as infile:
                        content = infile.read()

                    outfile.write(f"My {relative_path}:\n\n")
                    outfile.write('"\n')
                    outfile.write(content)
                    outfile.write('\n"\n\n\n')

                except Exception as e:
                    print(f"Skipped {relative_path}: {e}")

    print(f"\n✅ Done! Output written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()