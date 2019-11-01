const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'






const devs = ['450919463106248704'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith('pl')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**Done Change Account Playing To : :small_blue_diamond:**
	__${argresult}__ :ballot_box_with_check:`)
} else
  if (message.content.startsWith('ad')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**Done Change Account Avatar :ballot_box_with_check: ${argresult}**`);
      } else
if (message.content.startsWith('st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/haydaraliraqistream");
    message.channel.sendMessage(`**Done Change Account Streaming To : :small_blue_diamond:**
	__${argresult}__ :ballot_box_with_check:`)
  } else
  if (message.content.startsWith('wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**Done Change Account Watching To : :small_blue_diamond:**
	  __${argresult}__ :ballot_box_with_check:`)
  } else
  if (message.content.startsWith('ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**Done Change Account Listening To : :small_blue_diamond:**
	   __${argresult}__ :ballot_box_with_check:`)
  }

});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`🇮🇶`,"https://www.twitch.tv/haydaraliraqistream")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.login(process.env.BOT_TOKEN);
