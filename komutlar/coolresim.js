const Discord = require('discord.js');
const client = new Discord.Client();
var coolImages = require('cool-images')

exports.run = (client, message) => {
 message.channel.send({embed: {
          "image": {
          url: coolImages.one(600, 800)},
          color: 0x36393F,
            }});};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori : "eğlence"
};

exports.help = {
  name: 'coolresim',
  description: 'coolresim gösterir',
  usage: 'coolresim'
};
