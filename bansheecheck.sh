#!/bin/bash 

currentTrack="Calexil is listening to $title by $artist on $album"

while :
do
    title=$(banshee --query-title | sed 's/title: //')
    artist=$(banshee --query-artist | sed 's/artist: //')
    album=$(banshee --query-album | sed 's/album: //')
    track="Calexil is listening to $title by $artist on $album"
    echo "Calexil is listening to $title by $artist on $album"
    if $currentTrack != $track
        $currentTrack = $track
        curl --data "trackName=$currentTrack" https://bansheebot.herokuapp.com/endpoint
    sleep 15
then
    sleep 5
fi
done
