let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message=> {
  if(message.content === "yirm") {
    message.channel.send("Yirm")
}
})

client.login("ODM4NTkyMTQ4NjAwNjUxNzc2.YI9VzA.KFAc0XnAeSTdCRQfHVORrOHh5G0")

