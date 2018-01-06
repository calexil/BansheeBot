/**
 * @author calexil <calexil@teknik.io>
 * @see https://github.com/calexil/BansheeBot
 * @copyright 2018
 * @license GPL-3.0
 */

'use strict';

// TODO: Load config from Heroku ENV variables
const Package = require('./package.json');
const Bot = require('./bot.js');

const config = {
    url: process.env.URL,
    port: process.env.PORT || 5000,
    dbUrl: process.env.DATABASE_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_PASSWORD,
    userAgent: `node:bansheebot:v${Package.version} (by /u/calexil)`
};

let bot = new Bot(config);
bot.start();

