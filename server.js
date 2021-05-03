let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "with myself"} })
  
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
  .setFooter("You're Welcome")
  message.channel.send(embed)
  }
  if(message.content === "?sendimage") {
    let image = new Discord.MessageAttachment()
  }
});

client.login("ODM4NTkyMTQ4NjAwNjUxNzc2.YI9VzA.KFAc0XnAeSTdCRQfHVORrOHh5G0")

client.on("message", message=> {
  if(message.content === "Yirm") {
    message.channel.send("Yirm!")
}
})

