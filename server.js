let Discord = require("discord.js")
let client = new Discord.Client()
client.login(process.env.BOT_TOKEN);

let count = 0;
setInterval (
  
() => 
require("node-fetch")(process.env.URL).then(() =>
console.log('[${++count}] My Ping Is There ${process.env.}')

//ODM4NTkyMTQ4NjAwNjUxNzc2.YI9VzA.KFAc0XnAeSTdCRQfHVORrOHh5G0 <<yirmus token

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

