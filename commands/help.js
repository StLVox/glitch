const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")

module.exports = {
  name: "help",
  description: "Get all commands",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("HELP SECTION")
.setColor("RANDOM")
.setDescription(`These are the command ${client.user.username} Bot, INVITE ME - LINK`)
let command = readdirSync("./commands")    

let i;
    for(i = 0; i < command.length; i++) {
      console.log(command[i])
      
      const cmd = client.commands.get(command[i].replace(".js", ""))
      embed.addField(`**${cmd.name}**`, cmd.description, true)
      
    }
    
    message.channel.send(embed)
    
    

    
    
    
  }
}