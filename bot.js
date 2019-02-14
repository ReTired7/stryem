const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "=";



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Retir'ed`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Retir'ed ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ليش الفرح يجلس فتره ويرحل والحزن يجلس معك للغد `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});
