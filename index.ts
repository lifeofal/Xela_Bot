import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
//const ytdl = require('ytdl-core');

require('dotenv').config();
let prefix: string = process.env.PREFIX!
dotenv.config()

const queue = new Map(); // holds all play commands and deques once a new command is input

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("the bot is ready")
    console.log(`Prefix type: ${prefix}` )
})

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}
//Array of bone heads

let arr = ['Jim', 'Hunter', 'Alex', 'Parker', 'Wilson']

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix, 0)) return;
    if (message.author.bot) return;
    /*

Prefix command for smelly people reply

*/
    if (message.content === `${prefix}Gross person`) {
        let temp = getRandomInt(5)
        switch (temp) {
            case 0:
                message.reply({
                    content: 'Probably Jim'
                });
                break;
            case 1:
                message.reply({
                    content: 'Smelly hunter'
                });
                break;
            case 2:
                message.reply({
                    content: 'I would say Alex but he is my creator'
                });
                break;
            case 3:
                message.reply({
                    content: 'Parker no doubt'
                });
                break;
            case 4:
                message.reply({
                    content: 'Hunter \'The Ladies Man\' Wilson'
                });
                break;
        }

    }

    /*

    Prefix for playing music hopefully

    */

    const serverQueue = queue.get(message.guild.id);

    if (message.content.startsWith(`${prefix}play`)) {
        execute(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${prefix}skip`)) {
        skip(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
        stop(message, serverQueue);
        return;
    } else {
        message.channel.send("You need to enter a valid command!");
    }



})

client.login(process.env.TOKEN)