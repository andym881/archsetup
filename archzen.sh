#!/bin/bash
set -euo pipefail
echo "--- Starting Clean Arch Linux-Zen & GameMode Setup ---"

_user_home="/home/$(logname)"
_env_dir="$_user_home/.config/environment.d"

# 1. Sudoers Temp Access & Pacman Setup
if [ ! -f /etc/sudoers.d/10-wheel-nopasswd ]; then
    echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/10-wheel-nopasswd >/dev/null
    sudo chmod 440 /etc/sudoers.d/10-wheel-nopasswd
fi

sudo sed -i -e '/^#\[multilib\]/,+1 s/^#//' -e 's/#Color/Color/' -e '/^Color$/a ILoveCandy' -e 's/^#\?ParallelDownloads.*/ParallelDownloads = 10/' /etc/pacman.conf
echo -e '--save /etc/pacman.d/mirrorlist\n--protocol https --country "United States,Canada" --latest 12 --sort rate --number 20' | sudo tee /etc/reflector.conf >/dev/null

sudo pacman -Syu --needed --noconfirm plasma-desktop plasma-login-manager konsole dolphin kate nano plasma-pa plasma-nm kscreen htop flatpak partitionmanager ark breeze-gtk spectacle kwalletmanager fuse2 reflector fastfetch rsync tuned tuned-ppd kde-gtk-config ananicy-cpp gwenview git amdgpu_top gamemode pacman-contrib zram-generator openssh

# 2. Minimal Sysctl, ZRAM & Ananicy Rules
sudo tee /etc/sysctl.d/99-game-limits.conf >/dev/null <<'EOF'
fs.file-max = 2097152
vm.max_map_count = 1048576
vm.swappiness = 180
vm.watermark_boost_factor = 0
vm.watermark_scale_factor = 125
vm.page-cluster = 0
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
EOF
sudo sysctl --system

sudo tee /etc/systemd/zram-generator.conf >/dev/null <<'EOF'
[zram0]
zram-size = ram / 1
compression-algorithm = zstd
swap-priority = 100
fs-type = swap
EOF

_tmp=$(mktemp -d)
git clone --depth=1 https://github.com/CachyOS/ananicy-rules.git "$_tmp/ananicy-rules"
sudo mkdir -p /etc/ananicy.d
sudo cp -r "$_tmp/ananicy-rules/." /etc/ananicy.d/
[ -f /etc/ananicy.d/ananicy.conf ] && sudo sed -i 's/^#\?ignore_kernel_threads.*/ignore_kernel_threads=true/' /etc/ananicy.d/ananicy.conf
rm -rf "$_tmp"

# 3. System Services, TuneD, GameMode & DNS Configurations
sudo tee /etc/tuned/ppd.conf >/dev/null <<'EOF'
[main]
default=balanced
[profiles]
power-saver=powersave
balanced=desktop
performance=latency-performance
EOF

sudo tee /etc/gamemode.ini >/dev/null <<'EOF'
[general]
renice=0
[custom]
start=tuned-adm profile latency-performance
end=tuned-adm profile desktop
EOF

sudo usermod -aG gamemode "$(logname)"
sudo systemctl enable NetworkManager reflector.timer tuned.service tuned-ppd.service plasmalogin.service ananicy-cpp.service
sudo systemctl start tuned.service tuned-ppd.service || true
sudo tuned-adm profile desktop || true
sudo systemctl daemon-reload

# 4. Flatpak Provisioning & Unified Overrides
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install -y flathub com.valvesoftware.Steam org.libretro.RetroArch com.github.tchx84.Flatseal org.gnome.Calculator org.mozilla.firefox org.freedesktop.Platform.VulkanLayer.MangoHud/x86_64/25.08 org.videolan.VLC

for app in org.libretro.RetroArch com.valvesoftware.Steam org.videolan.VLC; do
    sudo flatpak override --system "$app" --socket=wayland --socket=x11 --device=dri --share=ipc --device=input
done

sudo flatpak override --system org.mozilla.firefox --device=all --share=ipc --socket=wayland --env=MOZ_ENABLE_WAYLAND=1

# 5. User Context & Environment Overrides
mkdir -p "$_user_home/.config" "$_env_dir"
echo -e "[Basic Settings]\nIndexing-Enabled=false" > "$_user_home/.config/baloofilerc"
echo -e "XWAYLAND_GRAB_SERVER=1\nAMD_DEBUG=fullrgb\nMESA_SHADER_CACHE_MAX_SIZE=12G" > "$_env_dir/10-xwayland-colors.conf"

chown -R "$(logname):$(logname)" "$_user_home"

sudo rm -f /etc/sudoers.d/10-wheel-nopasswd
echo "--- Post-Install Setup Complete! ---"
