const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552268205964525572")
setInterval(function() {
channel.send(`pp`);
}, 10000)
})

client.login("NTI3OTI1MTU5NTQ2NDU0MDI2.D18n5A.lQlufcqCp3Bbs3E2RIH-VMJFBo0");
