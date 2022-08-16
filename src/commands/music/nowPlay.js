module.exports = {
  name: "agora",
  aliases: ["a", "now", "np"],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.DisTube.getQueue(message);
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} ••• Opa algo de errado não esta certo !!!`,
      );
    const song = queue.songs[0];
    message.react("👍");

    message.channel
      .send(
        `${client.emotes.play} ••• Ao vivo agora : **\`${song.name}\`**, adicionado por ${song.user}`,
      )
      .then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
  },
};
