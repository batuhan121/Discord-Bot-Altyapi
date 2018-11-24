const Discord = require("discord.js");
const db = require('quick.db')
exports.run = async (bot, message, args) => {

 
          if (!message.member.hasPermission("MANAGE_GUILD"))
              return message.channel.send(`${process.env.basarisiz} Bu komutu kullanmak için yetkin bulunmuyor.`)

          if (!message.mentions.channels.first() && args.join(" ").toLowerCase() === `none`)
              return message.channel.send("Geçerli bir kanal etiketlemelisin.\n Doğru kullanım: log [#kanal]")
          let newChannel;
          if (args.join(" ").toLowerCase() === `none`) newChannel = '';
          else newChannel = message.mentions.channels.first().id;
          db.set(`logkanal_${message.guild.id}`, newChannel).then(i => {
              const ayarlar2 = new Discord.RichEmbed().setFooter(`${process.env.basarili} Log kanalı ${message.mentions.channels.first()} olarak seçilmiştir.`)
              return message.channel.send(`${process.env.basarili} Log kanalı ${message.mentions.channels.first()} olarak seçilmiştir.`)
          })
      
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-ayarla', 'log', 'logsettings', 'log-settings'],
    permLevel: 0,
  kategori: "eğlence"
  };
  
  exports.help = {
    name: 'log',
    description: 'Sunucunuza Log Kanalı Ayarlar',
    usage: 'log #kanal'
  };