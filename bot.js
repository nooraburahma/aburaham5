const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("560900242204262400")
setInterval(function() {
channel.send(`اللهم صلي على سيدنا محمد اللهم صلي على سيدنا محمد`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
