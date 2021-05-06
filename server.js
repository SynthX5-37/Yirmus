let Discord = require("discord.js")
let client = new Discord.Client(ODM4NTkyMTQ4NjAwNjUxNzc2.YI9VzA.1xdbBGdC4DRXGud5BbyEzg3u8vc)

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "YYhelp"} })
  
})

client.on("message", message=> {
  if(message.content === "yirm") {
    message.channel.send("Yirm!")
}

  if(message.content === "YYhelp") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Command List")
  .setDescription("Yirm or yirm: replies Yirm!")
  .setColor("Blue")
  .setFooter("")
  message.channel.send(embed)
  }
});


client.on("message", message=> {
  if(message.content === "Yirm") {
    message.channel.send("Yirm!")
}
})

