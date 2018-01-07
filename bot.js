const Discord = require('discord.js');
const client = new Discord.Client();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Message Array
const responseObject = {
  "test": "It worked!",
  "best girl?": "Big Band.",
  "best girl": "Big Band.",
  "best grill": "Big Band.",
  "best grill?": "Big Band.",
  "hi": "Hello there, I'm a dumb bot written by @calexil#9270 and @Timberius#8180 , you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "commands": "You can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "song": "Currently playing: https://wagnaria.xyz/now/calexil"
};

//Call the web page with express
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Listen for the users local script to post the current track and log it to console
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
app.post('/endpoint', (req, res) => {
    let trackName = req.body.trackName;
    res.send('Track received!');
    console.log(`${trackName}`)
});

//Show that the bot has launched sucessfully in console
client.once('ready', () => {
    console.log('I am ready!');
});

//Reply to keywords in the array
client.once("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

// Ping server every 15 minutes to prevent web dyno from sleeping
setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

// Do not change
client.login(process.env.BOT_TOKEN);
