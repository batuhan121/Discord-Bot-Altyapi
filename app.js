
const http = require('http');
const express = require('express');
const db = require('quick.db');
const DBL = require("dblapi.js");
const ytdl = require('ytdl-core');
	const superagent = require("superagent");
const GIFEncoder = require('gifencoder');
let prefix = ".";
var Jimp = require('jimp');
var Jimp = require('jimp');
//const prefix = ('.');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)


const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const chalk = require("chalk"); 
const fs = require("fs"); 
var ayarlar = JSON.parse(fs.readFileSync("./ayarlar.json", "utf8"));

client.ayarlar = {
	"token": "BURAYADA BİR TOKEN", 
	"sahip": "322012514650947585",
	"yardimcilar": [""], 
	//"prefix": ".",
	"version": "0.0.1", 
	"destek_sunucu": "https://discord.gg/kXA6hVF" 
};

client.on("ready", async () => {
	console.log(`${client.user.tag} aktif! ${client.guilds.size} sunucuya ve ${client.users.size} kullanıcıya hizmet veriyor!`)
	
  
  var oyun = [
		"Şarkı Komutları Aktif .şarkı ",
        "Yardım Almak İçin .yardım ",
		 ".küfür-engelle | Küfür Koruması Aktif ",
		 ".link-engelle | Reklam Koruması Aktif",
		  ".girişçıkışayarla | Sunucunuza Gelen Gideni Görün",
		".sayaç | .oto-rol-ayarla | .girişçıkışayarla | .log | AKTİF !!"
	

		 
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/r3yizzers");
        }, 15 * 2500);

});
  // komutlar başladı






const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3MTM2MDUzNTA0OTI3MzM3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQwNzUzNzcwfQ.qg9izNbW5E-Mvs1TR-DfX0xW43hYJvhsu0FQ9vJRVNc', client);

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

// CLİENT.ON TAYFASI BAŞLANGIÇ-------------------------------------------------------------


var Jimp = require('jimp');


client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "trigger") {
        const options = {
            size: 256,
          
            frames: 16
        }

        message.channel.send("İşleniyor.. Lütfen bekleyiniz. ⏲").then(m => m.delete(1000));

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const args = message.content.split(' ').slice(1);
        let member = message.mentions.users.first()
        if (args[0] === undefined) member = message.author;
        let avatarurl = member.avatarURL;
        if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
            avatarurl = args.join(' ').replace(/gif|webp/g, 'png');
        }
        const base = new Jimp(options.size, options.size);
        const avatar = await Jimp.read(avatarurl);
        const text = await Jimp.read('https://cdn.glitch.com/a7d3b6b8-9b7a-4aab-9ee4-1db0c07ef1eb%2Ftriggered.png?1526842782410');
        const tint = await Jimp.read('https://cdn.glitch.com/5fed2789-b430-43c5-bf1b-a8dd32d46b97%2Fred.png?1527082445373');
        avatar.resize(320, 320);
        tint.scaleToFit(base.bitmap.width, base.bitmap.height);
        tint.opacity(0.2);
        text.scaleToFit(280, 60);
        const frames = [];
        const buffers = [];
        const encoder = new GIFEncoder(options.size, options.size);
        const stream = encoder.createReadStream();
        let temp;
         stream.on('data', async buffer => await buffers.push(buffer));
        stream.on('end', async () => {
            return await message.channel.send({
                files: [{
                    name: 'FenonsTriggered.gif',
                    attachment: Buffer.concat(buffers)
                }]
            });
        });
        for (let i = 0; i < options.frames; i++) {
            temp = base.clone();
            if (i === 0) {
                temp.composite(avatar, -16, -16);
            } else {
                temp.composite(avatar, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
            }
            temp.composite(tint, 0, 0);
            if (i === 0) temp.composite(text, -10, 200);
            else temp.composite(text, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));
            frames.push(temp.bitmap.data);
        }
        encoder.start();
        encoder.setRepeat(0);
        encoder.setDelay(20);
        for (const frame of frames) {
            encoder.addFrame(frame);
        }
        encoder.finish();
    }
});



var Jimp = require('jimp');

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "sniper") {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("İşleniyor.. Lütfen bekleyiniz. ⏲").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(310, 325)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2FPNGPIX-COM-Crosshair-PNG-Transparent-Image.png?1529363625811", (err, avatar) => {
                avatar.resize(310, 325)
                image.composite(avatar, 2, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

 

    client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

client.on('message', async message => {
if (message.content.toLowerCase() === ayarlar.prefix + "ördek") {

    let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Vak Vak...")
    .setImage(("https://random-d.uk/api/v1/images/"+ Math.floor(Math.random() * (1 - 20) + 60)+".jpg"))
    message.channel.send(embed)

}});

 client.on('message', msg => {
  if (msg.content.startsWith(ayarlar.prefix + "random-çekiliş")) {
    msg.channel.send(`<a:HyperTada:498218268910157855> Çekilişi Kazanan: ${msg.guild.members.random().displayName} <a:HyperTada:498218268910157855>`);
    }
    });
	


client.on('message', message => {
if (message.content.toLowerCase() === ayarlar.prefix + "yazı-tura") {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('')
      .setDescription('Tura.')
      .setThumbnail('https://i.imgur.com/iUaWmhg.jpg')
      message.channel.send(embed);
    } else if (result == 2) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('')
      .setDescription('Yazı.')
      .setThumbnail('https://i.imgur.com/54JPj7Z.jpg')
      message.channel.send(embed);
    }
}});

  
  
  
	

client.on('message', async message => {
if (message.content.toLowerCase() === ayarlar.prefix + "kedi") {

  let {body} = await superagent
  .get(`aws.random.cat/meow`);

  let kedi = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username} | İşte senin kedin!`)
  .setImage(body.file);

  message.channel.send(kedi)

}});
  
// dans yazı

  
client.on("message", message => {
if (message.content.toLowerCase() === ayarlar.prefix + "sunucuresmi") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Sunucu Resmi`)
.setImage(`${message.guild.iconURL} `)
.setColor('RANDOM'));
   }
});


client.on('message', async message => {
if (message.content.toLowerCase() === ayarlar.prefix + "köpek") {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let kopek = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username} | İşte senin köpeğin!`)
  .setImage(body.url);

  message.channel.send(kopek)

}});



client.on('message', msg => {
  if (msg.content.toLowerCase() === ayarlar.prefix + 'kasaaç') {
    var sans = ["Bok", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade :dagger:", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "Hatıra Faction Bicaği :dagger:"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Sana **${sonuc}** Çikti`)
  }
});






client.on("message", async message => {
    const args = message.content.substring(ayarlar.prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters" || command === "tersyaz") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Komut kullanıldığında '!'  Karakteri ile başla. 
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Lütfen ters yazmak istediğiniz bir yazı giriniz.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});

// CLİENT.ON TAYGASI BİTİŞ----------------------------------------------------------------------









 





 

   

 
  
  
  



  
// dans yazı

  









  


client.on('guildCreate', guild => {
    let channel = client.channels.get("469178981694963721")//botun girdiyi sunucuyu kanala gönderelim
    const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu ", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});
client.on('guildDelete', guild => { 
    let channel = client.channels.get("469178981694963721")//botun çıktıgı sunucuyu kanala gönderelim

    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});
  
  
  

client.on("guildMemberAdd", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
    let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
    skanal31.send(`:loudspeaker: :inbox_tray: **${member.user.tag}** Katıldı **${sayac}** olmamıza son **${sayac - member.guild.members.size}** üye kaldı, şuanda ** ${member.guild.members.size} ** kişiyiz!`)
});

client.on("guildMemberRemove", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
    skanal31.send(` :loudspeaker: :outbox_tray: **${member.user.tag}** Ayrıldı **${sayac}** olmamıza son **${sayac - member.guild.members.size}** üye kaldı, şuanda  ** ${member.guild.members.size} ** kişiyiz!`)
});

  
 







  
  
  


// komutlar bitti



client.on('messageUpdate', async (oldMessage, newMessage) => {
    if (oldMessage.author.bot) {
      return false;
  }
  if (!oldMessage.guild) {
      return false;
  }

  if (oldMessage.content == newMessage.content) {
      return false;
  }

  if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
let embedds4 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Mesaj Güncellendi!`)
      .setThumbnail(oldMessage.author.avatarURL)
      .addField("Gönderen", oldMessage.author.tag, true)
      .addField("Önceki Mesaj", oldMessage.content, true)
      .addField("Şimdiki Mesaj", newMessage.content, true)
      .addField("Kanal", newMessage.channel.name, true)
  let logkanal = await db.fetch(`logkanal_${oldMessage.guild.id}`)
  if (!oldMessage.guild.channels.get(logkanal)) return console.log('logkanal')
  else oldMessage.guild.channels.get(logkanal).send(embedds4)
})

client.on('channelDelete', async channel => {
let embedds3 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Kanal Silindi!`)
      .setThumbnail(channel.guild.iconURL)
      .setDescription(`'${channel.name}' adlı kanal silindi!`, true)
  let logkanal = await db.fetch(`logkanal_${channel.guild.id}`)
  if (!channel.guild.channels.get(logkanal)) return console.log('logkanal')
  else channel.guild.channels.get(logkanal).send(embedds3)
})

client.on('channelCreate', async channel => {
let embedds2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Kanal Oluşturuldu!`)
      .setThumbnail(channel.guild.iconURL)
      .setDescription(`'${channel.name}' adlı kanal oluşturuldu!`, true)
  let logkanal = await db.fetch(`logkanal_${channel.guild.id}`)
  if (!channel.guild.channels.get(logkanal)) return console.log('logkanal')
  else channel.guild.channels.get(logkanal).send(embedds2)
})

client.on('emojiCreate', async emoji => {
let embedds9 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Emoji Oluşturuldu!`)
      .setThumbnail(emoji.guild.iconURL)
      .setDescription(`<:${emoji.name}:${emoji.id}> - ${emoji.name} adlı emoji oluşturuldu!`, true)
  let logkanal = await db.fetch(`logkanal_${emoji.guild.id}`)
  if (!emoji.guild.channels.get(logkanal)) return console.log('logkanal')
  else emoji.guild.channels.get(logkanal).send(embedds9)
})

client.on('emojiDelete', async emoji => {
let embedds0 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Emoji Silindi!`)
      .setThumbnail(emoji.guild.iconURL)
      .setDescription(`':${emoji.name}:' adlı emoji silindi!`, true)
  let logkanal = await db.fetch(`logkanal_${emoji.guild.id}`)
  if (!emoji.guild.channels.get(logkanal)) return console.log('logkanal')
  else emoji.guild.channels.get(logkanal).send(embedds0)
})

client.on('roleCreate', async role => {
let embedds0 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Rol Oluşturuldu!`)
      .setThumbnail(role.guild.iconURL)
      .setDescription(`'${role.name}' adlı rol oluşturuldu.`, true)
  let logkanal = await db.fetch(`logkanal_${role.guild.id}`)
  if (!role.guild.channels.get(logkanal)) return console.log('logkanal')
  else role.guild.channels.get(logkanal).send(embedds0)
})



client.on('roleUpdate', async (oldRole, newRole) => {
        var embed = new Discord.RichEmbed()
        .setColor("#36393E")
        .setTitle(`Rol Güncellendi.`)
        .addField("Önceki Rol", oldRole.name, true)
        .addField("Şimdiki Rol", newRole.name, true)
        .setFooter(`Eski Rol ID: ${oldRole.id} | Yeni Rol ID: ${newRole.id}`)
let logkanal = await db.fetch(`logkanal_${oldRole.guild.id}`)
  if (!oldRole.guild.channels.get(logkanal)) return console.log('logkanal')
  else oldRole.guild.channels.get(logkanal).send({embed})
});


client.on('roleDelete', async role => {
let embedds0 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Rol Silindi!`)
      .setThumbnail(role.guild.iconURL)
      .setDescription(`'${role.name}' adlı rol silindi.`, true)
  let logkanal = await db.fetch(`logkanal_${role.guild.id}`)
  if (!role.guild.channels.get(logkanal)) return console.log('logkanal')
  else role.guild.channels.get(logkanal).send(embedds0)
})






client.on('messageDelete', async message => {
    if (message.author.bot) {
      return false;
  }

  if (!message.guild) {
      return false;
  }

let embedds7 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Mesaj Silindi!`)
      .setThumbnail(message.author.avatarURL)
      .addField("Gönderen", message.author.tag, true)
      .addField("Mesaj", message.content, true)
      .addField("Kanal", message.channel.name, true)
  let logkanal = await db.fetch(`logkanal_${message.guild.id}`)
  if (!message.guild.channels.get(logkanal)) return console.log('logkanal')
  else message.guild.channels.get(logkanal).send(embedds7)
})

client.on('guildBanRemove', async (guild, member) => {
let embedds6 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Yasak Kaldırıldı!`)
      .setThumbnail(member.avatarURL)
      .setDescription(`'${member.tag}' adlı kişinin yasağı kaldırıldı.`, true)
  let logkanal = await db.fetch(`logkanal_${guild.id}`)
  if (!guild.channels.get(logkanal)) return console.log('logkanal')
  else guild.channels.get(logkanal).send(embedds6)
})

client.on('guildBanAdd', async (guild, member) => {
let embedds5 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Üye Yasaklandı!`)
      .setThumbnail(member.avatarURL)
      .setDescription(`'${member.tag}' adlı kişi sunucudan yasaklandı.`, true)
  let logkanal = await db.fetch(`logkanal_${guild.id}`)
  if (!guild.channels.get(logkanal)) return console.log('logkanal')
  else guild.channels.get(logkanal).send(embedds5)
})




client.on("message", async msg => {
    db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == 'Açık') {
            const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
            if (kufur.some(word => msg.content.includes(word))) {
              try {
                 if (!msg.member.hasPermission("BAN_MEMBERS")) {
                      msg.delete();
    
                      return msg.reply('Küfür etmemelisin! ⚠').then(msg => msg.delete(3000));
                 }              
              } catch(err) {
                console.log(err);
              }
            } } else if (i == 'Kapalı') {
     
    }
       
    })
    });

    
    
client.on("message", async msg => {
    db.fetch(`ekufur_${msg.guild.id}`).then(i => {
    if (i == 'opened') {
            const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "fuck", "fuck you", "fucking",];
            if (kufur.some(word => msg.content.includes(word))) {
              try {
                 if (!msg.member.hasPermission("BAN_MEMBERS")) {
                      msg.delete();
    
                      return msg.reply('no swearing on this server ⚠').then(msg => msg.delete(3000));
                 }              
              } catch(err) {
                console.log(err);
              }
            } } else if (i == 'close') {
     
    }
       
    })
    });
    




client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir(`./komutlar/`, (err, files) => {
	let jsfiles = files.filter(f => f.split(".").pop() === "js")

	if(jsfiles.length <= 0) {
		console.log("Olamazz! Hiç komut dosyası bulamadım!")
	} else {
		if (err) {
			console.error("Hata! Bir komutun name veya aliases kısmı yok!")
		}
		console.log(`${jsfiles.length} komut yüklenecek.`)

		jsfiles.forEach(f => {
			let props = require(`./komutlar/${f}`)
			client.commands.set(props.help.name, props)
			props.conf.aliases.forEach(alias => {
				client.aliases.set(alias, props.help.name)
			})
			console.log(`Yüklenen komut: ${props.help.name}`)
		})
	}
});

client.on("message", async message => {
 
 if (!message.guild) return;  
    

  var args = message.content.split(' ').slice(1)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  if (cmd) {
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Mesajları Yönet iznine sahip olmalısın!`)
          .setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri At iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri Yasakla iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Yönetici iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu sadece Bot Sahibi kullanabilir!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    
    if (cmd.conf.permLevel === 7) {
			if (!client.ayarlar.ceyhun.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu sadece **CEYHUN ABİMİZ** kullanabilir!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    
    if (cmd.conf.permLevel === 6) {
			if (!client.ayarlar.sahip2.includes(message.author.id)) {
				
			}
		}
    
    cmd.run(client, message, args);
    
  }
  
});

client.login(client.ayarlar.token); 
