const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('it worked...');
  	}
});

client.on('message', message => {
    if (message.content === 'best girl?') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === 'best girl') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === 'best grill?') {
    	message.reply('Big Band...');
  	}
});

client.on('message', message => {
    if (message.content === 'best grill') {
    	message.reply('Big Band...');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
