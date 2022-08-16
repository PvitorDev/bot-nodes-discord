const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["ajuda", "h"],
  run: async (client, message) => {
    message.react("👍");
    let embed = new EmbedBuilder()
      .setColor("#E5007B")
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarUrl,
      })
      .setDescription(
        `E ai  ${message.author}, precisa de ajuda ? \n Aqui vai a lista de comandos do Bot :`,
      );
    let embed2 = new EmbedBuilder()
      .setColor("#E5007B")
      .setTitle("Comandos")
      .setDescription(
        `**Colocar Musica** : \`!g | !gobis | !play | !p | <adicionar link ou nome da musica>\` \n
        **Pausar Musica** : \`!pause | !resume\` \n
        **Desconectar Bot** : \`!leave | !sai | !exit\` \n
        **Verificar Fila** : \`!queue | !q | !fila | !f\` \n
        **Pular Musica** : \`!skip | !s | !next | !n | !pular\` \n
        **Parar Bot** : \`!stop | !parar\` \n
        **Tocando Agora** : \`!agora | !a | !now | !np\` \n
        **Ouvir um Lofizinho** : \`!lofi | !l |!estudar\``,
      );
    message.reply({ embeds: [embed] });
    setTimeout(() => {
      message.reply({ embeds: [embed2] });
    }, 2000);
  },
};
