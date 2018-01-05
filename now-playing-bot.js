/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2017
 * @license MIT
 */

const BansheeBot = require('./lib/BansheeBot');

let config = {
    discordToken: process.env.BOT_TOKEN,
    lastFmApiKey: process.env.LASTFM_API_KEY,
    lastFmSecret: process.env.LASTFM_SECRET,
    lastFmUserAgent: process.env.LASTFM_USER_AGENT,
    lastFmUsername: process.env.LASTFM_USERNAME
};
let bot = new BansheeBot(config);
bot.start();
