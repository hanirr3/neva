const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
    عندنا اقوى نظام انفايت 
    5 = 15k credit pro bot
  بنسوي فعاليه على 100 الف كريدت

                                 [ https://discord.gg/bf59j2] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
     عندنا اقوى نظام انفايت 
    5 = 15k credit pro bot
  بنسوي فعاليه على 100 الف كريدت

                                 [ https://discord.gg/bf59j2] **`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);