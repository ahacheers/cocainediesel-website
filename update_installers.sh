#! /bin/sh

wget -O CocaineDieselInstaller.exe https://ci.appveyor.com/api/projects/mikejsavage/cocainediesel-launcher-windows/artifacts/installer/CocaineDieselInstaller.exe

wget https://ci.appveyor.com/api/projects/mikejsavage/cocainediesel-launcher-linux/artifacts/launcher_linux.zip
unzip launcher_linux.zip

chmod 755 cocainediesel
tar czvf cocaine_diesel_launcher_linux.tar.gz cocainediesel

chmod 755 headlessupdater
tar czvf cocaine_diesel_server_linux.tar.gz headlessupdater server_loop.sh

rm -f launcher_linux.zip cocainediesel headlessupdater
