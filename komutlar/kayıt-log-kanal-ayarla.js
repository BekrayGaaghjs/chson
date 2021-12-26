const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
 
let kanald = message.mentions.channels.first();
let kanals = await db.fetch(`kanal_${message.guild.name}`)
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
 if(!kanald) return message.channel.send(` **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin!**\n**__Örnek__**: ${prefix}kayıt-log \`#kayıtLogKanal\``)
 
  message.channel.send(`  **Kayıt Log Kanalı** \`${kanald}\` olarak ayarlandı! `)

 
    db.set(`kanal_${message.guild.id}`, kanals.name) 
};
exports.config = {
  name: 'kayıt-log', 
  aliases: []
};
