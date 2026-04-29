# ![icon](https://github.com/calexil/BansheeBot/blob/master/public/images/icon.png) BansheeBot
[![Node.js CI](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml/badge.svg)](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml) [![CodeFactor](https://www.codefactor.io/repository/github/calexil/bansheebot/badge)](https://www.codefactor.io/repository/github/calexil/bansheebot) ![Railway Status](https://img.shields.io/endpoint?url=https://bansheebot.up.railway.app/health&style=for-the-badge&logo=railway) [![GitHub issues](https://img.shields.io/github/issues/calexil/BansheeBot.svg)](https://github.com/calexil/BansheeBot/issues)


## Intro
A simple discord bot that reads the song info from the currently playing track in Banshee media player or Rhythmbox media player and displays it in a Discord channel. Also includes some silly commands you can edit.

## Installation

* 1: Clone the repo: `git clone https://github.com/calexil/BansheeBot.git` or fork it.
* 2: Make a new app with the [discord developer dashboard](https://discordapp.com/developers/applications/me) and note your client secret.
* 3: Link your free Railway.app account to github and deploy your fork or clone, be sure to set your config vars with an item KEY of BOT_TOKEN and a value of the aforementioned client secret from your discord bot app.
* 4: Edit the file [bot.js at line 60](https://github.com/calexil/BansheeBot/blob/master/bot.js#L60) to match your music channels Id.
* 4-a: Invite the bot from the discord developer dash by creating an invite link and making sure to give the 'bot' scope, and the 'Send Messages' Permission.
* 5: Start Banshee or Rhythmbox, Play music and then run the [bansheecheck.sh script](https://github.com/calexil/BansheeBot/blob/master/bansheecheck.sh) or the [rhythmboxcheck.sh script](https://github.com/calexil/BansheeBot/blob/master/rhythmboxcheck.sh), be sure to edit it to match your username and Railway.app app page endpoint
* 6: Check out the [Command list here](https://github.com/calexil/BansheeBot/blob/master/Commands.md)
* 7: Watch it go. 

## Bug Reporting
### [Submit Issues here](https://github.com/calexil/BansheeBot/issues/new)

## Credits

* [Calexil](https://github.com/calexil)
* [TimboKZ](https://github.com/TimboKZ)

