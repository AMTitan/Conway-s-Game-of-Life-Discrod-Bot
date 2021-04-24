require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "game!";

client.on('ready', () => {
	console.log(`${client.user.tag} bot is on`);
	client.user.setActivity(`${PREFIX}help`, { type: 'WATCHING' })
  		.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  		.catch(console.error);
})
/* output 24x77
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
#############################################################################
*/


client.on('message', (message) => {
	if (message.author.bot === true) return;
	if (!message.content.toLowerCase().startsWith(PREFIX.toLowerCase())) return;
	if (message.guild && !message.guild.me.permissionsIn(message.channel.id).any("SEND_MESSAGES")) return;
	console.log(`[${new Date}]: ${message.content}`);
	const [commandName, ...args] = message.content.toLowerCase()
		.trim()
		.substring(PREFIX.length)
		.split(/\s+/);
	if (commandName === `help`) {
		const Embed = {
			color: '#00ff00',
			title: `Help`,
			url: "",
			author: {
				Name: 'Game of life',
				icon_url: "",
				url: '',
			},
			description: ``,
			thumbnail: "",
			fields: [{
				name: `${PREFIX}Play`,
				value: "plays game"
			},],
			image: {
				url: ""
			},
			fimestamp: new Date(),
			footer: {
				test: '',
				icon_url: "",
			},
		}

		message.channel.send({
			embed: Embed
		});

	}
	if (commandName === `play`) {
		const numberOfItems = 1848;
		const numebrOfHorizontal = 77;
		const numebrOfVertical = 24;
		var array = [];
		for(let i = 0; i < numberOfItems; i++){
			if (i === 1) {
				array.push("#");
			}else if (i === 1) {
				array.push("#");
			}else if (i === 77) {
				array.push("#");
			}else if (i === 78) {
				array.push("#");
			}else if (i === 154) {
				array.push("#");
			}else {
				array.push(".");
			}
		}
		var newMsg = "```";
		for(let i = 0; i < numberOfItems; i++){
			if ((i) % numebrOfHorizontal === 0) {
				newMsg = newMsg + "\n"
			}
			newMsg = newMsg + array[i]
		}
		var newMsg = newMsg + "\n```";
		message.channel.send(newMsg);
		for(let i = 0; i < 100; i++) {
			setTimeout(function(){
				var oldArray = array;
				for(let x = 0; x < numberOfItems; x++) {
					var numAlive = 0;
					if(oldArray[x-1] && oldArray[x-1] === "#") {
						numAlive++;
					}
					if(oldArray[x+1] && oldArray[x+1] === "#") {
						numAlive++;
					}
					if(oldArray[x+numebrOfHorizontal] && oldArray[x+numebrOfHorizontal] === "#") {
						numAlive++;
					}
					if(oldArray[x+numebrOfHorizontal+1] && oldArray[x+numebrOfHorizontal+1] === "#") {
						numAlive++;
					}
					if(oldArray[x+numebrOfHorizontal-1] && oldArray[x+numebrOfHorizontal-1] === "#") {
						numAlive++;
					}
					if(oldArray[x-numebrOfHorizontal-1] && oldArray[x-numebrOfHorizontal-1] === "#") {
						numAlive++;
					}
					if(oldArray[x-numebrOfHorizontal] && oldArray[x-numebrOfHorizontal] === "#") {
						numAlive++;
					}
					if(oldArray[x-numebrOfHorizontal+1] && oldArray[x-numebrOfHorizontal+1] === "#") {
						numAlive++;
					}
					 if (numAlive === 3 || numAlive === 4) {
						array[x] = "#";
					}else {
						array[x] = ".";
					}
					console.log(x);
					console.log(array[x]);
					console.log(numAlive);
					console.log(oldArray[x-1] && oldArray[x-1] === "#");
					console.log(oldArray[x+1] && oldArray[x+1] === "#");
					console.log(oldArray[x+numebrOfHorizontal] && oldArray[x+numebrOfHorizontal] === "#");
					console.log(oldArray[x+numebrOfHorizontal+1] && oldArray[x+numebrOfHorizontal+1] === "#");
					console.log(oldArray[x+numebrOfHorizontal-1] && oldArray[x+numebrOfHorizontal-1] === "#");
					console.log(oldArray[x-numebrOfHorizontal-1] && oldArray[x-numebrOfHorizontal-1] === "#");
					console.log(oldArray[x-numebrOfHorizontal] && oldArray[x-numebrOfHorizontal] === "#");
					console.log(oldArray[x-numebrOfHorizontal+1] && oldArray[x-numebrOfHorizontal+1] === "#");
					console.log(array[0]);
					console.log("");
					//return;
				}
				console.log(array[0]);
				var newMsg = "```\n";
				for(let y = 0; y < numberOfItems; y++){
					if ((y) % numebrOfHorizontal === 0) {
						newMsg = newMsg + "\n"
					}
					newMsg = newMsg + array[y];
				}
				var newMsg = newMsg + "\n```";
				message.channel.send(newMsg);
			}, 1500 * i);
		}
	}
})

client.login(process.env.Token);