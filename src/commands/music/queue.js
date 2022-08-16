module.exports = {
  name: "queue",
  aliases: ["q", "fila", "f"],
  run: async (client, message) => {
    const queue = client.DisTube.getQueue(message);
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} ••• Não tem nada tocando`,
      );
    message.react("👍");

    const q = queue.songs
      .map(
        (song, i) =>
          `${i === 0 ? "Tocando agora :" : `${i}.`} ${song.name} - \`${
            song.formattedDuration
          }\``,
      )
      .join("\n");
    message.channel
      .send(`${client.emotes.queue} | **Fila de Musicas**\n${q}`)
      .then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 100000);
      });
  },
};
