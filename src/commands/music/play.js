module.exports = {
  name: "gobis",
  aliases: ["g", "play", "p"],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const music = args.join(" ");
    if (!music)
      return message.channel.send(
        `${client.emotes.error} ••• Algo de errado não está certo`,
      );

    client.DisTube.play(message.member.voice.channel, music, {
      member: message.member,
      textChannel: message.channel,
      message,
    });
    message.react("👍");
  },
};
