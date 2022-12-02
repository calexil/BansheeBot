# ![icon](https://github.com/calexil/BansheeBot/blob/master/public/images/icon.png) BansheeBot
[![Node.js CI](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml/badge.svg)](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml) [![CodeFactor](https://www.codefactor.io/repository/github/calexil/bansheebot/badge)](https://www.codefactor.io/repository/github/calexil/bansheebot) [![Maintainability](https://api.codeclimate.com/v1/badges/5cea1da12f8d344b472f/maintainability)](https://codeclimate.com/github/calexil/BansheeBot/maintainability) [![GitHub issues](https://img.shields.io/github/issues/calexil/BansheeBot.svg)](https://github.com/calexil/BansheeBot/issues)


## Intro
A simple discord bot that reads the song info from the currently playing track in Banshee media player or Rhythmbox media player and displays it in a Discord channel. Also includes some silly commands you can edit.

## Installation

* 1: Clone the repo: `git clone https://github.com/calexil/BansheeBot.git` or fork it.
* 2: Make a new app with the [discord developer dashboard](https://discordapp.com/developers/applications/me) and note your client secret.
* 3: Link your free Render.com account to github and deploy your fork or clone, be sure to set your config vars with an item KEY of BOT_TOKEN and a value of the aformentioned client secret from your discord bot app.
* 4: Edit the file [bot.js at line 60](https://github.com/calexil/BansheeBot/blob/master/bot.js#L60) to match your music channels Id, then [edit the file at line 22](https://github.com/calexil/BansheeBot/blob/master/bot.js#L22) so it matches your Render app page.
* 5: Start Banshee or Rhythmbox, Play music and then run the [bansheecheck.sh script](https://github.com/calexil/BansheeBot/blob/master/bansheecheck.sh) or the [rhythmboxcheck.sh script](https://github.com/calexil/BansheeBot/blob/master/rhythmboxcheck.sh), be sure to edit it to match your username and Render app page endpoint
* 6: Check out the [Command list here](https://github.com/calexil/BansheeBot/blob/master/Commands.md)
* 7: Watch it go. 

## Bug Reporting
### [Submit Issues here](https://github.com/calexil/BansheeBot/issues/new)

## Credits

* [Calexil](https://github.com/calexil)
* [TimboKZ](https://github.com/TimboKZ)

