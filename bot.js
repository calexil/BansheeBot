const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!test') {
    	message.reply('it worked...');
  	}
});

client.on('message', message => {
    if (message.content === '!best girl?') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === '!best girl') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === '!best grill?') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === '!best grill') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === '!hi') {
    	message.reply('hello there, you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md');
  	}
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.reply('you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
