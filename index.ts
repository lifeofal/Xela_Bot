import DiscordJS, { Intents, Message } from "discord.js";
import dotenv from "dotenv";
import { MusicExecutions } from "./musicConfig";
const ytdl = require("ytdl-core");
let musicEX = new MusicExecutions();

require("dotenv").config();
let prefix: string = process.env.PREFIX!;
dotenv.config();

const queue = new Map(); // holds all play commands and deques once a new command is input
 
const client = new DiscordJS.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
	console.log("the bot is ready");
	console.log(`Prefix type: ${prefix}`);
});
client.once("reconnecting", () => {
	console.log("Reconnecting!");
});
client.once("disconnect", () => {
	console.log("Disconnect!");
});

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
//Array of bone heads

let arr = ["Jim", "Hunter", "Alex", "Parker", "Wilson"];

client.on("messageCreate", async (message) => {
	if (!message.content.startsWith(prefix, 0)) return;
	if (message.author.bot) return;
	const serverQueue = queue.get(message.guildId);
	console.log(`Command triggered by: ${message.author.tag}`)
	/*
	

Prefix command for smelly people reply

*/
	if (message.content === `${prefix}Gross person`) {
		let temp = getRandomInt(5);
		switch (temp) {
			case 0:
				message.reply({
					content: "Probably Jim",
				});
				break;
			case 1:
				message.reply({
					content: "Smelly hunter",
				});
				break;
			case 2:
				message.reply({
					content: "I would say Alex but he is my creator",
				});
				break;
			case 3:
				message.reply({
					content: "Parker no doubt",
				});
				break;
			case 4:
				message.reply({
					content: "Hunter 'The Ladies Man' Wilson",
				});
				break;
		}
	}

	/*

    Prefix for playing music hopefully

    */

	else if (message.content.startsWith(`${prefix}play`)) {
		musicEX.execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		//musicEX.skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		//musicEX.stop(message, serverQueue);
		return;
	} 
	/*
	Prefix for Other

	*/
	else{
		switch(message.content){
			case `${prefix}Catgirl`:
				message.reply({
					content: "MEOW MEOW MEOW",

				});
				break;
			default:
				message.channel.send("You need to enter a valid command!");
				break;
		}
	}


	
	
});

client.login(process.env.TOKEN);
