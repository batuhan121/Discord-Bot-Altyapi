const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {
                        const evet = (client.emojis.find("name", "evet").toString())
                        const hayir = (client.emojis.find("name", "hayir").toString())

db.fetch(`premium_${message.guild.id}`).then(i => {
if (i == 'Aktif') {
  
  if (!args[0]) return message.channel.send(`${hayir} aç yada kapat yazmalısın! Örnek: küfür-engel aç`)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'Açık').then(i => {
      message.channel.send(`${evet} Küfur Engel başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanların küfürü engellenmicektir.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı').then(i => {
      message.channel.send(`${evet} Küfür Engel başarıyla kapatıldı! Artık herkes küfür yazabilir.`)
    })
  }



  
 // aktit se gösterilcek embed
// ama message.channel.send'i unutma
} else if (!i || i == 'Aktif Değil')  {
  const yes = (client.emojis.find("name", "yes").toString())
  const no = (client.emojis.find("name", "no").toString())


if (!args[0]) return message.channel.send(`${no} open or closed type`)
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`MANAGER SERVER` you must have!')

if (args[0] == 'close') {
db.set(`kufur_${message.guild.id}`, 'opened').then(i => {
message.channel.send(`${evet} obstacle successfully opened! The blasphemy of those who have the authority to ban members will not be prevented.`)
})
}
if (args[0] == 'close') {
db.set(`kufur_${message.guild.id}`, 'close').then(i => {
message.channel.send(`${evet} obstacle successfully closed! Now anyone can write profanity.`)
})
}
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['swearing', 'küfür','swearing-obstacle' 'swearingobstacle'],
  permLevel: 2,
  kategori: "premium"
};

exports.help = {
  name: 'küfür-engel',
  description: 'Küfür Engelini açıp kapatır.',
  usage: 'küfür-engel'
};