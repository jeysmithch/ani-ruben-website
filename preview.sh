#!/bin/bash
# Local preview — always use http://localhost, not opening index.html directly
cd "$(dirname "$0")"
PORT=8765
echo "Starting preview at http://127.0.0.1:$PORT/"
echo "Press Ctrl+C to stop."
python3 -m http.server "$PORT"
