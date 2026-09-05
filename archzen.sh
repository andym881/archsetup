#!/bin/bash
set -euo pipefail
echo "--- Starting Clean Arch Linux-Zen Setup ---"

_user_home="/home/$(logname)"
# Find archzen-config relative to the script's location with pipe safety
_script_dir="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" 2>/dev/null && pwd || pwd)"
_archive_dir="$_script_dir/archzen-config"

# 1. Sudoers Temp Access & Pacman Setup
if [ ! -f /etc/sudoers.d/10-wheel-nopasswd ]; then
    echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/10-wheel-nopasswd >/dev/null
    sudo chmod 440 /etc/sudoers.d/10-wheel-nopasswd
fi

sudo sed -i -e '/^#\[multilib\]/,+1 s/^#//' -e 's/#Color/Color/' -e '/^Color$/a ILoveCandy' -e 's/^#\?ParallelDownloads.*/ParallelDownloads = 10/' /etc/pacman.conf
echo -e '--save /etc/pacman.d/mirrorlist\n--protocol https --country "United States,Canada" --latest 12 --sort rate --number 20' | sudo tee /etc/reflector.conf >/dev/null

# 2. Base Tooling & Package Installation
sudo pacman -Syu --needed --noconfirm git plasma-desktop plasma-login-manager konsole dolphin kate nano plasma-pa plasma-nm kscreen htop flatpak partitionmanager ark breeze-gtk spectacle kwalletmanager fuse2 reflector fastfetch rsync tuned tuned-ppd kde-gtk-config ananicy-cpp gwenview amdgpu_top gamemode pacman-contrib zram-generator openssh

# 3. Deploy System & User Configurations
if [ -d "$_archive_dir/etc" ]; then
    echo "--> Syncing system configuration files to /etc..."
    sudo rsync -av "$_archive_dir/etc/" /etc/
    sudo sysctl --system
    sudo udevadm control --reload-rules && sudo udevadm trigger
    sudo modprobe ntsync || true
fi

if [ -d "$_archive_dir/usr" ]; then
    echo "--> Syncing system shared resources to /usr..."
    sudo rsync -av "$_archive_dir/usr/" /usr/
fi

if [ -d "$_archive_dir/user-config" ]; then
    echo "--> Syncing user configuration files..."
    mkdir -p "$_user_home/.config/environment.d"
    rsync -av "$_archive_dir/user-config/baloofilerc" "$_user_home/.config/baloofilerc"
    rsync -av "$_archive_dir/user-config/environment.d/" "$_user_home/.config/environment.d/"
    chown -R "$(logname):$(logname)" "$_user_home/.config"
fi

# 4. Fetch CachyOS Ananicy Rules
_tmp_ananicy=$(mktemp -d)
git clone --depth=1 https://github.com/CachyOS/ananicy-rules.git "$_tmp_ananicy/ananicy-rules"
sudo mkdir -p /etc/ananicy.d
sudo cp -r "$_tmp_ananicy/ananicy-rules/." /etc/ananicy.d/
[ -f /etc/ananicy.d/ananicy.conf ] && sudo sed -i 's/^#\?ignore_kernel_threads.*/ignore_kernel_threads=true/' /etc/ananicy.d/ananicy.conf
rm -rf "$_tmp_ananicy"

# 5. Service & Group Configuration
sudo groupadd -f audio
sudo groupadd -f gamemode
sudo usermod -aG audio,gamemode "$(logname)"

sudo systemctl enable NetworkManager reflector.timer tuned.service tuned-ppd.service plasmalogin.service ananicy-cpp.service
sudo systemctl start tuned.service tuned-ppd.service || true
sudo tuned-adm profile desktop || true
sudo systemctl daemon-reload

# 6. Flatpak Provisioning & Overrides
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install -y flathub com.valvesoftware.Steam org.libretro.RetroArch com.github.tchx84.Flatseal org.gnome.Calculator org.mozilla.firefox org.freedesktop.Platform.VulkanLayer.MangoHud/x86_64/25.08 org.videolan.VLC

for app in org.libretro.RetroArch com.valvesoftware.Steam org.videolan.VLC; do
    sudo flatpak override --system "$app" --socket=wayland --socket=x11 --device=dri --share=ipc --device=input
done

sudo flatpak override --system org.mozilla.firefox --device=all --share=ipc --socket=wayland --env=MOZ_ENABLE_WAYLAND=1

# Clean up temporary sudoers rule
sudo rm -f /etc/sudoers.d/10-wheel-nopasswd
echo "--- Post-Install Setup Complete! ---"
