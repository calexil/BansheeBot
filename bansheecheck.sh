#!/bin/bash 

currentTrack="Calexil is listening to $title by $artist on $album"

while :
do
    title=$(banshee --query-title | sed 's/title: //')
    artist=$(banshee --query-artist | sed 's/artist: //')
    album=$(banshee --query-album | sed 's/album: //')
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
