const token =  'seu token';

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log('Estou ligado!')

    var guild = null;
    var commands = [ ];

    if (guild) {
        commands = client.application.commands;
    } else {
        commands = client.application.commands;
    }

    commands.create({
        name: 'ping',
        description: 'responde pong!'
    });

})

client.login(token)