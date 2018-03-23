const Discord = require("discord.js");

module.exports = {
	name: "Playing Count",
	author: "theLMGN",
	version: 1,
	description: "A simple ping command that replies pong.",
	commands: [
		{
			name: "playing",
			usage: "Team Fortress 2",
			description: "Shows you a number of how many people are playing the specified game",
			execute: async(c, m, a) => {
				var game = a.join(" ").toLowerCase();
				var count = 0;
				var total = 0;
				var inGame = 0;
				c.users.array().forEach(users => {
					total += 1;
					if (users.presence.game) {
						inGame += 1;
						if (users.presence.game.name.toLowerCase == game) {
							count += 1;
						}
					}
				});
				m.reply(`:video_game: I know ${total} members, ${inGame} (${Math.floor((inGame / total) * 100)}%) are in a game, and ${count} (${Math.floor((count / total) * 100)}% out of total users, ${Math.floor((count / inGame) * 100)}% out of all users in game) are playing **${game}**`);
			},
		},
	],
	events: [],
	timer: [],
};