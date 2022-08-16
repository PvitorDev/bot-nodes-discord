module.exports = {
  name: "leave",
  aliases: ["sai", "exit"],
  run: async (client, message) => {
    message.react("👍");

    client.DisTube.voices.leave(message);
  },
};
