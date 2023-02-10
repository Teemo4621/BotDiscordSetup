const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) {
                interaction.reply({ content: "🔴 ไม้มึคำสั่ง" });
            }
            command.execute(interaction, client);
        }
    },
};