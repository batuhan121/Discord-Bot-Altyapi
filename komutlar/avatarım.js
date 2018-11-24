const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor('#36393F'));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
 name: 'avatarım',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
