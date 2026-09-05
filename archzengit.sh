#!/bin/bash
set -euo pipefail

# Clone to a clean temporary directory on the system
_tmp_dir=$(mktemp -d)
trap 'rm -rf "$_tmp_dir"' EXIT

echo "--> Fetching latest archsetup configuration..."
git clone --depth=1 https://github.com/andym881/archsetup.git "$_tmp_dir/archsetup"

cd "$_tmp_dir/archsetup"
chmod +x archzen.sh
./archzen.sh
