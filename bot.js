const Discord = require('discord.js');
const client = new Discord.Client();

const responseObject = {
  "test": "It worked!",
  "best girl?": "Big Band.",
  "best girl": "Big Band.",
  "best grill": "Big Band.",
  "best grill?": "Big Band.",
  "hi": "hello there, you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "commands": "you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
  "song": "currently playing: https://wagnaria.xyz/now/calexil"
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
