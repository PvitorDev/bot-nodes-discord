const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "ping",
  aliases: [""],
  run: async (client, message, args) => {
    let embed = new EmbedBuilder()
      .setColor("#E5007B")
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarUrl,
      })
      .setDescription(
        `E ai  ${message.author}, seu ping está em: **\`${client.ws.ping}ms\`**`,
      );

    message.reply({ embeds: [embed] }).then((msg) => {
      setTimeout(() => {
        msg.delete();
      }, 10000);
    });
    setTimeout(() => {
      message.delete();
    }, 10000);
  },
};
