const Discord = require('discord.js');
const client = new Discord.Client();

// Express site serving
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Message Array
const responseObject = {
    "test": "It worked!",
    "best booty": "Squigly, Duh.",
    "best booty?": "Squigly, Duh.",
    "!help": "Hello there, I'm a dumb bot written by [@calexil#9270](https://github.com/calexil) and [@Timberius#8180](https://github.com/TimboKZ) , you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
    "commands": "You can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md"
};

// Reply to keywords in the array
client.on("message", (message) => {
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
});


// Reply to regex regarding best girl

let rg = /best g(ir|ri|ur)l+\??/ig;
 
client.on( "message", (message) => {
  let m = message.content.replace( rg, "Big Band" );
 
  if( m != message.content ) {
    message.channel.send(m);
  }
} );

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


// Post the current track in discord
    if (musicChannel) {
        musicChannel.send(trackName);
    }
});

// Make sure the bot is in the correct channel and show that the bot has launched successfully in console
client.on('ready', () => {
    let musicChannelId = '318919013101076481'; //This number will need too be set you your desired channel id
    musicChannel = client.channels.find(channel => channel.id === musicChannelId);
    if (!musicChannel) console.error('Could not find music channel!');

    console.log('I am ready!');
});

// Ping server every 15 minutes to prevent web dyno from sleeping
var http = require("http");
setInterval(function() {
    http.get('http://bansheebot.herokuapp.com');
}, 1500000);

// Do not change
client.login(process.env.BOT_TOKEN);
