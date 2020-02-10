#! /bin/sh

# An example script for running a server that updates and restarts itself
#
# You still need to manually shutdown the server to start an update, which can
# be accomplished by typing `quit` in the script window, or with rcon
#
# Usage: ./server_loop.sh +set sv_hostname "Best server ever"

while true; do
	./headlessupdater
	./server "$@"
	sleep 1
done
