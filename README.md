# ![icon](https://u.teknik.io/znQBF.png) BansheeBot
[![Node.js CI](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml/badge.svg)](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml) [![CodeFactor](https://www.codefactor.io/repository/github/calexil/bansheebot/badge)](https://www.codefactor.io/repository/github/calexil/bansheebot) [![icon](https://img.shields.io/badge/Heroku-Deployed-8460aa.svg)](https://bansheebot.herokuapp.com/) [![Maintainability](https://api.codeclimate.com/v1/badges/5cea1da12f8d344b472f/maintainability)](https://codeclimate.com/github/calexil/BansheeBot/maintainability) [![GitHub issues](https://img.shields.io/github/issues/calexil/BansheeBot.svg)](https://github.com/calexil/BansheeBot/issues)


## Intro
A simple bot that reads the song info from the currently playing track in Banshee media player or Rhythmbox media player and displays it in a Discord channel. Also includes some silly commands.

## Installation

* 1: Clone the repo: `git clone https://github.com/calexil/BansheeBot.git` or fork it.
* 2: Make a new app with the [discord developer dashboard](https://discordapp.com/developers/applications/me) and note your client secret.
* 3: Link your free heroku account to github and deploy your fork or clone, be sure to set your config vars with an item KEY of BOT_TOKEN and a value of the aformentioned client secret from your discord bot app.
* 4: Edit the file [bot.js at line 43](https://github.com/calexil/BansheeBot/blob/master/bot.js#L43) to match your music channels Id, then [edit the file at line 60](https://github.com/calexil/BansheeBot/blob/master/bot.js#L60) so it matches your heroku app page.
* 5: Start Banshee or Rhythmbox, Play music and then run the [bansheecheck.sh script](https://github.com/calexil/BansheeBot/blob/master/bansheecheck.sh) or the [rhythmboxcheck.sh script](https://github.com/calexil/BansheeBot/blob/master/rhythmboxcheck.sh), be sure to edit it to match your username and heroku app page endpoint
* 6: Check out the [Command list here](https://github.com/calexil/BansheeBot/blob/master/Commands.md)
* 7: Watch it go. 

## Bug Reporting
### [Submit Issues here](https://github.com/calexil/BansheeBot/issues/new)

## Credits

* [Calexil](https://github.com/calexil)
* [TimboKZ](https://github.com/TimboKZ)

