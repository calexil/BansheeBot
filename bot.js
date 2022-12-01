const Discord = require('discord.js');
const client = new Discord.Client();

// Express site serving
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require("http"); /* <=== Consider moving to https */

// Message Array
const responseObject = {
    "test": "It worked!",
    "good bot": "Thanks.",
    "bad bot": "I sowwy, =uwu=",
    "69": "Nice.",
    "!help": "Hello there, I'm a dumb bot written by [@calexil#9270](https://github.com/calexil) and [@Timberius#8180](https://github.com/TimboKZ) , you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
    "!commands": "You can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md"
};

const inBotConfigs = {
    musicChannelId: "318919013101076481", /* voiceChannelId; obtain by rightclicking the channel and copy id */
    renderApp: "http://bansheebot.onrender.com", /* Server URL */
    pingInterval: "1500000", /* Ping server every 15 minutes to prevent web dyno from sleeping */
};

// Reply to regex regarding best girl
let rg = /best g(ir|ri|ur)l+\??/ig;
let rh = /best b(oot)y+\??/ig;
 
client.on("message", (message) => {
  if (responseObject[message.content]) message.channel.send(responseObject[message.content]); /* Reply to keywords in responseObject */
    
  let m = message.content.replace( rg, "Big Band." );
  let n = message.content.replace( rh, "Squigly, duh." );
  
  if( m != message.content ) message.channel.send(m);
  if( n != message.content ) message.channel.send(n);
});


// Call the web page with express
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Listen for the users local script to post the current track and log it to console
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
app.post('/endpoint', (req, res) => {
    let trackName = req.body.trackName;
    res.send('Track received!');
    console.log(`Received ${trackName}`);

    if (musicChannel) musicChannel.send(trackName); /* Post the current track in discord */
});

// Make sure the bot is in the correct channel and show that the bot has launched successfully in console
client.on('ready', () => {
    musicChannel = client.channels.find(channel => channel.id === inBotConfigs.musicChannelId);
    if (!musicChannel) console.error('Could not find music channel!');

    console.log('I am ready!');
});

setInterval(function() {
    http.get(inBotConfigs.renderApp);
}, inBotConfigs.pingInterval);

// Do not change
client.login(process.env.BOT_TOKEN);
