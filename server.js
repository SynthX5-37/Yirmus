let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "YYhelp"} })
  
})

client.login("ODM4NTkyMTQ4NjAwNjUxNzc2.GeQE9g.5OZpnj_e4mECDWxH9UtL396gIn7XwbW7h72QKg")

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


