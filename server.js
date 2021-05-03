let Discord = require("discord.js")
let client = new Discord.Client()
client.login("ODM4NTkyMTQ4NjAwNjUxNzc2.YI9VzA.KFAc0XnAeSTdCRQfHVORrOHh5G0")

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
  client.on("message", message=> {
  if(message.content === "YYneko") {
    message.channel.send(<div class="tenor-gif-embed" data-postid="15501230" data-share-method="host" data-width="100%" data-aspect-ratio="0.748995983935743"><a href="https://tenor.com/view/anime-happy-dance-cat-girl-gif-15501230">Anime Happy GIF</a> from <a href="https://tenor.com/search/anime-gifs">Anime GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>)
}
});


client.on("message", message=> {
  if(message.content === "Yirm") {
    message.channel.send("Yirm!")
}
})

