const { Integration } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        
        const Channel = client.channels.cache.get(message.channelId)

        if (message.content === 'เกมกาก') {
            Channel.send({content: 'เอ๋อจัด'})
        }
        
    }
}