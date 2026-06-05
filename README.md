# ![icon](https://github.com/calexil/BansheeBot/blob/master/public/images/icon.png) BansheeBot
[![Node.js CI](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml/badge.svg)](https://github.com/calexil/BansheeBot/actions/workflows/node.js.yml) [![CodeFactor](https://www.codefactor.io/repository/github/calexil/bansheebot/badge)](https://www.codefactor.io/repository/github/calexil/bansheebot) ![Railway](https://img.shields.io/endpoint?url=https://bansheebot.up.railway.app/health&style=flat&logo=railway) [![GitHub issues](https://img.shields.io/github/issues/calexil/BansheeBot.svg)](https://github.com/calexil/BansheeBot/issues)

**A simple Discord bot** that reads the currently playing track from **Banshee** or **Rhythmbox** on Linux and posts it to a Discord channel. Also includes fun/silly commands.

## Features

- Automatically posts song info (`Artist - Track`) when music is playing
- Supports **Banshee** and **Rhythmbox**
- Simple keyword/silly commands (easy to customize)
- Lightweight Express server for receiving updates
- Easy deployment on Railway (or any Node.js host)

## How It Works

1. A local shell script (`bansheecheck.sh` or `rhythmboxcheck.sh`) periodically checks your music player.
2. The script sends the current track to the bot's web endpoint.
3. The bot posts the song information to your designated Discord music channel.

---

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Discord bot token
- Linux machine with **Banshee** or **Rhythmbox** installed

### 1. Clone & Install

git clone https://github.com/calexil/BansheeBot.git
cd BansheeBot
npm install

### 2. Discord Bot Setup

1. Go to the Discord Developer Portal
2. Create a new Application → Bot → Copy the Token
3. Invite the bot to your server with Send Messages permission

### 3. Configure

* Edit bot.js and update the musicChannelId with your target Discord channel ID.
* Set your bot token:
```export BOT_TOKEN="your_bot_token_here"```

### 4. Deploy the Bot

**Recommended:** Deploy on Railway.app (one-click from GitHub)

## Other Options:

* Render
* Oracle Cloud

### 5. Run the Music Checker (on your Linux machine)

Edit `bansheecheck.sh` (or `rhythmboxcheck.sh`):

* Update the endpoint URL to match where your bot is running
* Update your username if needed

Make executable and run:

`chmod +x bansheecheck.sh`

`./bansheecheck.sh`
￼
Now play music — it should start posting to Discord!

# Commands

See full list in Commands.md

Some examples:

* `test`
* `good bot / bad bot`
* `best girl?`
* `!help`

# Project Structure

     BansheeBot/
     ├── bot.js                 # Main Discord + Express bot
     ├── bansheecheck.sh        # Music checker for Banshee
     ├── rhythmboxcheck.sh      # Music checker for Rhythmbox
     ├── Commands.md
     ├── package.json
     └── public/

# Troubleshooting

* Bot not posting songs? → Check the shell script URL, channel ID, and permissions.

* Login issues? → Make sure BOT_TOKEN environment variable is set correctly.

* Too many posts? → Adjust sleep time in the shell script.

## Bug Reporting
### [Submit Issues here](https://github.com/calexil/BansheeBot/issues/new)
