#! /bin/sh

wget -O CocaineDieselInstaller.exe https://ci.appveyor.com/api/projects/mikejsavage/forksow-launcher/artifacts/installer/CocaineDieselInstaller.exe

wget https://ci.appveyor.com/api/projects/mikejsavage/forksow-launcher-jbg0q/artifacts/launcher_linux.zip
unzip launcher_linux.zip
chmod 755 cocainediesel
tar czvf cocaine_diesel_launcher_linux.tar.gz cocainediesel
rm -f launcher_linux.zip cocainediesel headlessupdater
