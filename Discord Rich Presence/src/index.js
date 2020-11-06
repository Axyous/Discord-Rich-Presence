const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: "ipc"
});
const config = require("./config.json")

client.on("ready", () =>{
    client.setActivity({
        details: config.details,
        status: config.status,
        startTimestamp: new Date(),
        largeImageKey: config.largeImageKey,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageKey,
        smallImageText: config.smallImageText
    })
    console.log("Rich presence is now active.")
});

client.login({
    clientId: config.clientId
})