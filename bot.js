const Discord = require('discord.js');
const client = new Discord.Client();





var prefix = "-";

client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + 'bc')) {
        message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            member.send(`Server : ${message.guild.name}
                         Message : ${args}`);
        });
    }

});


  client.login(process.env.BOT_TOKEN);
