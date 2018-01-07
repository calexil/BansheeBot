#!/bin/bash 

currentTrack="Calexil is listening to $title by $artist on $album"

while :
do
    title=$(banshee --query-title | sed 's/title: //')
    artist=$(banshee --query-artist | sed 's/artist: //')
    album=$(banshee --query-album | sed 's/album: //')
    echo "Calexil is listening to $title by $artist on $album"
    sleep 6
done
