const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'







	

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Scar's");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})





	
	
	
	client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'chat');
  if (!channel) return;
  channel.send(`**Welcome To Scar Support Server ** ${member} `);
});



client.login(process.env.BOT_TOKEN);
