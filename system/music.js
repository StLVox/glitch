//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id)
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return message.textChannel.send("Music Queue is Ended Now 😌")
    }
    
    try {
      var stream = ytdlDiscord(song.url, {
        filter: "audioonly",
        quality: "highestaudio"
      })
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") //back in 5 min
    }
    
    
    
  }
}