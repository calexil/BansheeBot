/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2017
 * @license GPL-3.0
 */

const Discord = require("discord.js");
const LastFmNode = require('lastfm').LastFmNode;

class BansheeBot {

    /**
     * @param {{discordToken: string, lastFmApiKey: string, lastFmSecret: string, lastFmUserAgent: string, lastFmUsername: string}} config
     */
    constructor(config) {
        this.config = config;
        this.client = new Discord.Client();
        this.lastfm = new LastFmNode({
            api_key: this.config.lastFmApiKey,
            secret: this.config.lastFmSecret,
            useragent: this.config.lastFmUserAgent,
        });
    }

    start() {
        return Promise.resolve()

            .then(() => console.log('Connecting to Discord...'))
            .then(() => this.client.login(this.config.discordToken))
            .then(() => console.log('Connected!'))

            .then(() => console.log('Searching for the music channel...'))
            .then(() => this.client.channels.find(channel => channel.name && channel.name.match(/^music/i)))
            .then(channel => {
                if (!channel) throw new Error('Could not find the music channel!');
                this.musicChannel = channel;
            })

            .then(() => console.log('Connecting to Last.fm stream...'))
            .then(() => lastfm.stream(this.config.lastFmUsername))
            .then(lastFmStream => {
                lastFmStream.on('nowPlaying', (track) => {
                    this.musicChannel.send('Now playing: ' + track.name);
                });
            })

            .catch(error => console.error(error));
    }

}

module.exports = BansheeBot;
