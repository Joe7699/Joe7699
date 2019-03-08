const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553443913122185218")
setInterval(function() {
channel.send(`اكس اكس جو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
