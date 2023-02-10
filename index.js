const { Client, Partials, GatewayIntentBits, Collection } = require('discord.js');
const { loadCommands } = require('./Handlers/commandHandlers');
const { loadEvent } = require('./Handlers/eventHandlers');
require('dotenv').config()
require('colors')

const { User, Message, GuildMember, ThreadMember, Channel, Reaction } = Partials;
const { Guilds, GuildMembers, GuildVoiceStates, GuildMessages, GuildMessageReactions, DirectMessages, MessageContent } = GatewayIntentBits

const client = new Client({
    intents: [Guilds, GuildMembers, GuildVoiceStates, GuildMessages, GuildMessageReactions, DirectMessages, MessageContent],
    partials: [User, Message, GuildMember, ThreadMember, Channel, Reaction],
})

module.exports = client

client.commands = new Collection();

client.login(process.env.TOKEN).then(() => {
    loadCommands(client)
    loadEvent(client)

    console.log(`${client.user.username} online.`.yellow);
})