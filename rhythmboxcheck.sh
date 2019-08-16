#!/bin/bash 

currentTrack="Calexil is listening to $title by $artist on $album"

while :
do
    title=$(rhythmbox-client --no-start --print-playing-format %tt | sed 's/title: //')
    artist=$(rhythmbox-client --no-start --print-playing-format %aa | sed 's/artist: //')
    album=$(rhythmbox-client --no-start --print-playing-format %at | sed 's/album: //')
    track="Calexil is listening to $title by $artist on $album"
    echo $track
    if [[ $currentTrack = "$track" ]]
    then
        sleep 30
    else
        currentTrack=$track
        curl --data "trackName=$currentTrack" https://bansheebot.herokuapp.com/endpoint
    fi
done
