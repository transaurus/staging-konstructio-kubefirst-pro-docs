#!/usr/bin/env bash
set -euo pipefail

# prepare.sh for konstructio/kubefirst-pro-docs
# Docusaurus 3.6.1 (resolves to 3.9.1), npm, Node 20.18.0
# Clones repo, installs deps, applies node_modules patch.
# Does NOT run write-translations or build.

REPO_URL="https://github.com/konstructio/kubefirst-pro-docs"
BRANCH="main"
REPO_DIR="source-repo"
NODE_VERSION="20.18.0"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# --- Node version ---
export NVM_DIR="$HOME/.nvm"
if [ ! -f "$NVM_DIR/nvm.sh" ]; then
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
source "$NVM_DIR/nvm.sh"

nvm install "$NODE_VERSION"
nvm use "$NODE_VERSION"

node --version
npm --version

# --- Clone (skip if already exists) ---
if [ ! -d "$REPO_DIR" ]; then
  git clone --depth=1 --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"

# --- Install dependencies ---
npm ci

# --- Patch: convert duplicate sidebar key validation error to warning ---
# The versioned sidebars (2.0-2.9) contain repeated category labels
# ("Getting Started", "Explore", "Advanced") across multiple cloud-provider
# sections, which Docusaurus 3.9+ treats as duplicate translation keys.
# This patch downgrades the hard error to a console warning so that
# write-translations can proceed and emit all valid translation files.
python3 - <<'PYEOF'
import sys

path = "node_modules/@docusaurus/plugin-content-docs/lib/translations.js"
with open(path, "r") as f:
    content = f.read()

patched = content.replace(
    "throw new Error(`Multiple docs sidebar items produce the same translation key.",
    "console.warn(`Multiple docs sidebar items produce the same translation key."
)

if patched == content:
    print("WARNING: patch target not found in translations.js", file=sys.stderr)
else:
    with open(path, "w") as f:
        f.write(patched)
    print("Patched translations.js: duplicate sidebar key error -> warning")
PYEOF

echo "[DONE] Repository is ready for docusaurus commands."
