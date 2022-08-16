const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "skip",
  aliases: ["s", "next", "pular", "n"],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.DisTube.getQueue(message);
    if (!queue.autoplay && queue.songs.length <= 1) {
      queue.stop();
      message.channel.send(
        `${client.emotes.error} ••• Não há mais itens na lista!`,
      );
      return;
    }
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} ••• Opa algo de errado não esta certo !!!`,
      );

    try {
      const song = await queue.skip();
      message.react("👍");

      message.channel
        .send(
          `${client.emotes.success} ••• Pulou!  Proxima Música : \n ${client.emotes.music} | **${song.name}**`,
        )
        .then((msg) => {
          setTimeout(() => {
            msg.delete();
          }, 10000);
        });
    } catch (e) {
      message.channel.send(`${client.emotes.error} | ${e}`);
    }
  },
};
