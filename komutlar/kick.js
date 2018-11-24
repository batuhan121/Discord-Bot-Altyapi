const Discord = require('discord.js');
const db =r require('quick.db');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#36393F")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  message.delete();
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Sunucudan atma sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi sunucudan atacağını yazmalısın.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
  .setAuthor("Crypto | Moderatör",)
  .setThumbnail(user.avatarURL)
  .setColor("#36393F")
  .setTimestamp()
  .addField('》 Eylem:', 'Kick')
  .addField('》 Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('》 Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('》 Sebep:', reason);
  let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
  if (!channel.guild.channels.get(membermodChannel)) return console.log('membermodChannel')
  else channel.guild.channels.get(membermodChannel).send(embedds3)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2,
  kategori: "yetkili"
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
