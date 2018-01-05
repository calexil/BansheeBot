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

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hello there, you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md');
  	}
});

client.on('message', message => {
    if (message.content === 'commands') {
    	message.reply('you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md');
  	}
});

client.on('message', message => {
    if (message.content === 'song') {
    	message.reply('currently playing: https://wagnaria.xyz/now/calexil');
  	}
});

var LastFmNode = require('lastfm').LastFmNode;

var lastfm = new LastFmNode({
  api_key: '99187e91b94f44ce4f2d71bcfe303147',
  secret: '71656c0d03209d8b56a50ae852e89b68'
});

var trackStream = lastfm.stream('calexil');

trackStream.on('lastPlayed', function(track) {
  console.log('Last played: ' + track.name);
});

trackStream.on('nowPlaying', function(track) {
  console.log('Now playing: ' + track.name);
});

trackStream.on('scrobbled', function(track) {
  console.log('Scrobbled: ' + track.name);
});

trackStream.on('stoppedPlaying', function(track) {
  console.log('Stopped playing: ' + track.name);
});

trackStream.on('error', function(error) {
  console.log('Error: '  + error.message);
});

trackStream.start();

var session = lastfm.session({
   token: token,
   handlers: {
      success: function(session) {
         lastfm.update('nowplaying', session, { track: track } );
         lastfm.update('scrobble', session, { track: track, timestamp: 12345678 });
      }
   }
});

var request = lastfm.request("artist.getInfo", {
    artist: "The Mae Shi",
    handlers: {
        success: function(data) {
            console.log("Success: " + data);
        },
        error: function(error) {
            console.log("Error: " + error.message);
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
