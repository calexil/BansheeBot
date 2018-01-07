const Discord = require('discord.js');
const client = new Discord.Client();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
app.post('/endpoint', (req, res) => {
    let trackName = req.body.trackName;
    res.send('Track received!');
    console.log(`Track: ${trackName}`)
});

wget --post-data "trackName=HelloWorld" https://bansheebot.herokuapp.com/endpoint

const responseObject = {
  "test": "It worked!",
  "best girl?": "Big Band.",
  "best girl": "Big Band.",
  "best grill": "Big Band.",
  "best grill?": "Big Band.",
  "hi": "Hello there, I'm a dumb bot written by @calexil#9270, you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "commands": "You can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "song": "Currently playing: https://wagnaria.xyz/now/calexil"
};

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
