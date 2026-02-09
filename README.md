# ![icon](https://github.com/calexil/BansheeBot/blob/master/public/images/icon.png) BansheeBot
[![Node.js CI](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml/badge.svg)](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml) [![CodeFactor](https://www.codefactor.io/repository/github/calexil/bansheebot/badge)](https://www.codefactor.io/repository/github/calexil/bansheebot) [![Render](https://img.shields.io/badge/Render-Deployed-616df5?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAATsAAAE7AGKbv1yAAABpUlEQVRYhe1WPUsDQRC91n+hZbpYJZUK3kxaFStBsTL4AWIRTJHKLmC0FkHQwiIGbC4z8YdYx9uJf8FWmU3uQwWTM/FOSB685jF783Z39mYcZ4YZhqBomnNgaB0NX6DQPRpufqO0dzQWTXsNDLUGPLCa34FI44qTBGg6Wyj0isLvPxGEzm28UDWm3agGwuVI48fRkwudDUv8ZwbQ7vxTkjcwdOcKH6PQ3le6QkWbrOflNaHSNbSsmtv1coEGPuFId46xYwfhZ3h5WnDSAmjBxXZe6vL8eN/zllDo2tKn/REW8GW4e8O34yT/VQ2gPrWokE7SN2D4IXYCh+MaWO3RIhiuWQptpm4gMXDCBkC8AgrVlSXh7QwMcLY1AFkbcIWKKNRQgs+7qRtIDJz0FfS8fL9JUbUkvDF9NQBJDYAuMHylLAmvjGtA27LOBko0nSPn3wN1hguGiq6XC1pqoOm/3WriFcK4SQ4kYKgVu7OyNWX7eVgXtYFWj+YGakxsJIPsDXBFAy0HR6aTTKgNWqo2liiu/4fTdx5oQcHpN0JN6HSogRmmDh+7WqXJgzz37QAAAABJRU5ErkJggg==)](https://bansheebot.onrender.com/) [![GitHub issues](https://img.shields.io/github/issues/calexil/BansheeBot.svg)](https://github.com/calexil/BansheeBot/issues)


## Intro
A simple discord bot that reads the song info from the currently playing track in Banshee media player or Rhythmbox media player and displays it in a Discord channel. Also includes some silly commands you can edit.

## Installation

* 1: Clone the repo: `git clone https://github.com/calexil/BansheeBot.git` or fork it.
* 2: Make a new app with the [discord developer dashboard](https://discordapp.com/developers/applications/me) and note your client secret.
* 3: Link your free Render.com account to github and deploy your fork or clone, be sure to set your config vars with an item KEY of BOT_TOKEN and a value of the aformentioned client secret from your discord bot app.
* 4: Edit the file [bot.js at line 60](https://github.com/calexil/BansheeBot/blob/master/bot.js#L60) to match your music channels Id, then [edit the file at line 22](https://github.com/calexil/BansheeBot/blob/master/bot.js#L22) so it matches your Render app page.
* 4-a: Invite the bot from the discord developer dash by creating an invite link and making sure to give the 'bot' scope, and the 'Send Messages' Permission.
* 5: Start Banshee or Rhythmbox, Play music and then run the [bansheecheck.sh script](https://github.com/calexil/BansheeBot/blob/master/bansheecheck.sh) or the [rhythmboxcheck.sh script](https://github.com/calexil/BansheeBot/blob/master/rhythmboxcheck.sh), be sure to edit it to match your username and Render app page endpoint
* 6: Check out the [Command list here](https://github.com/calexil/BansheeBot/blob/master/Commands.md)
* 7: Watch it go. 

## Bug Reporting
### [Submit Issues here](https://github.com/calexil/BansheeBot/issues/new)

## Credits

* [Calexil](https://github.com/calexil)
* [TimboKZ](https://github.com/TimboKZ)

