const fs = require("fs");

if (fs.existsSync("./config/config.json")) {
	console.log(" -- Botstion Config Migration Utility -- ")
	console.log("	Making a backup of the config...")
	fs.renameSync("./config/config.json","./config/configBackup.json")
	console.log("		Done!")
	console.log("	Migrating config...")
	const config = require("./config/configBackup.json")
	fs.writeFileSync("./config/config.js",`module.exports = ${JSON.stringify(config,null,4)}`)
	console.log("		Done!")
	console.log(" -- Config updater done, starting bot --")
}