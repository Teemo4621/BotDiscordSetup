const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping') //ชื่อของคำสั้ง
        .setDescription('เช็คปิงของบอท เเละ ผู้ใช้') //คำอธิบาย
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages), //คั้งค่า Permissions
    async execute(interaction, client) {
        interaction.reply({
            embeds: [new EmbedBuilder() //สร้าง Embed
                .setTitle('🏓Pong')
                .setDescription(`API Latency is ${Math.round(client.ws.ping)}`)
                .setColor('Yellow')
            ],
            deferred: true
            //content: '🏓Pong',
        })
    }
}