module.exports = {
  name: "stop",
  aliases: ["parar"],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.DisTube.getQueue(message);
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} ••• Opa algo de errado não esta certo !!!`,
      );
    queue.stop();
    message.channel.send(`${client.emotes.success} | Parado!`);
  },
};
