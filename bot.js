const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'







client.on('ready', () => {
   client.user.setGame("Support Light .");
}); 



	

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Light Members.");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})





	
	
	
	client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'chat');
  if (!channel) return;
  channel.send(`**Welcome To Server Light Support .** ${member} `);
});



client.login(process.env.BOT_TOKEN);
