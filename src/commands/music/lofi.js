module.exports = {
  name: "lofi",
  aliases: ["l", "estudar"],
  inVoiceChannel: true,
  run: async (client, message) => {
    const music = "lofi hip hop radio Lofi Girl";
    client.DisTube.play(message.member.voice.channel, music, {
      member: message.member,
      textChannel: message.channel,
      message,
    });
    message.react("❤️");
    message.channel.send("Vamos colocar aquele Lofizin de lei!!!");
  },
};
