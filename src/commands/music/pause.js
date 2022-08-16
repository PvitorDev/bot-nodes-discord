module.exports = {
  name: "pause",
  aliases: ["pause", "resume"],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.DisTube.getQueue(message);
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} ••• Opa algo de errado não esta certo !!!`,
      );
    message.react("👍");

    if (queue.paused) {
      queue.resume();
      return message.channel.send("••• Voltando •••");
    }
    queue.pause();
    message.channel.send("••• Pausando •••");
  },
};
