const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });



// Add/enhance these event listeners:
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} at ${new Date().toISOString()}`);
  client.user.setPresence({ 
    status: 'online', 
    activities: [{ name: 'Banshee Bot', type: 'LISTENING' }] 
  });
  console.log('Presence set to online');
});

client.on('disconnect', (closeEvent) => {
  console.error('Discord DISCONNECTED:', closeEvent);  // This will log the close code/reason
});

client.on('reconnecting', () => {
  console.log('Discord RECONNECTING...');
});

client.on('error', (err) => {
  console.error('Discord CLIENT ERROR:', err);
});

client.on('warn', (info) => {
  console.warn('Discord WARN:', info);  // Often catches rate limit hints
});

// Extra: Listen to raw WebSocket close for more detail
client.ws.on('close', (code, reason) => {
  console.error(`WebSocket closed - Code: ${code}, Reason: ${reason || 'No reason provided'}`);
});


// Message Array.
const responseObject = {
    "test": "It worked!",
    "good bot": "Thanks, =uWu=",
    "bad bot": "I sowwy, =uwu=",
    "69": "Nice.",
    "!help": "Hello there, I'm a dumb bot written by [@calexil#9270](https://github.com/calexil) and [@Timberius#8180](https://github.com/TimboKZ) , you can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md",
    "!commands": "You can see my commands here: https://github.com/calexil/BansheeBot/blob/master/Commands.md"
};

// Reply to regex regarding best girl.
let rg = /best g(ir|ri|ur)l+\??/ig;
let rh = /best b(oot)y+\??/ig;
 
client.on("messageCreate", (message) => {
  if (responseObject[message.content]) message.channel.send(responseObject[message.content]); /* Reply to keywords in responseObject */
    
  let m = message.content.replace( rg, "Big Band." );
  let n = message.content.replace( rh, "Squigly, duh." );
  
  if( m != message.content ) message.channel.send(m);
  if( n != message.content ) message.channel.send(n);
});

// ====================== DISCORD LOGIN ======================
console.log('Attempting to login to Discord...');
console.log('Token length:', process.env.BOT_TOKEN ? process.env.BOT_TOKEN.length : 'MISSING');

const loginPromise = client.login(process.env.BOT_TOKEN);

loginPromise
  .then(() => {
    console.log('✅ Login promise resolved successfully');
  })
  .catch(err => {
    console.error('❌ Login promise rejected:', err.message);
  });


// ====================== EXPRESS SERVER ======================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require("http");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const musicChannelId = "318919013101076481";
let musicChannel = null;                    // ← Fixed: declare it here

// Second ready listener (music channel setup)
client.on('ready', () => {
    musicChannel = client.channels.cache.get(musicChannelId);
    if (!musicChannel) {
        console.error('Could not find music channel!');
    } else {
        console.log('Music channel found successfully');
    }
    console.log('I am ready!');
});

// Post endpoint for your local script
app.post('/endpoint', (req, res) => {
    let trackName = req.body.trackName || 'Unknown track';
    console.log(`Received: ${trackName}`);
    
    if (musicChannel) {
        musicChannel.send(trackName).catch(err => console.error('Failed to send message:', err));
    } else {
        console.log('Warning: musicChannel not ready yet');
    }
    
    res.send('Track received!');
});

// Health check route for status badge
app.get('/health', (req, res) => {
    try {
        const isHealthy = client.isReady() && musicChannel !== null;

        if (isHealthy) {
            res.json({
                schemaVersion: 1,
                label: "Railway",
                message: "live",
                color: "brightgreen"
            });
        } else {
            res.json({
                schemaVersion: 1,
                label: "Railway",
                message: "down",
                color: "red"
            });
        }
    } catch (err) {
        res.json({
            schemaVersion: 1,
            label: "Railway",
            message: "down",
            color: "red"
        });
    }
});


// Start the HTTP server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});



