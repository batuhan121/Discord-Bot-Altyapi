const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        console.log('Bir şeyler yanlış gitti...');
        console.dir(err);
        return;
      }
      message.delete()
      const embed = new Discord.RichEmbed()
      .setColor('#36393F')
      .setTitle('Ascii;')
      .setDescription('```fix\n' + data + '\n```')
.setFooter('Crypto', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ascii', 's�yle'],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'ascii',
  description: 'İstediğiniz yazıyı ascii şeklinde yazar',
  usage: 'yaz [yazd�rmak istedi�iniz �ey]'
};