#! /bin/sh

# An example script for running a server that updates and restarts itself

while true; do
	if [ "`curl https://update.cocainediesel.fun/version.txt`" != "`cat version.txt`" ]; then
		echo quit
	fi
	sleep 5m
done | while true; do
	./headlessupdater
	./server
	sleep 5
done
