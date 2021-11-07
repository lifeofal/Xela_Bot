import DiscordJS, { Intents, Message } from "discord.js";
//import dotenv from "dotenv";
export class MusicExecutions {
	async execute(message, serverQ) {
		const args = message.content.split(" ");

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.channel.send(
				"You need to be in a voice channel to play music, Bozo."
			);
			const permissions = voiceChannel.permissionsFor(message.client.user);
			if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
				return message.channel.send(
					"I dont have the permissions to join and speak in this channel."
				);
			}
		}
	}
}
