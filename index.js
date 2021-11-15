//express
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Yaro Botet Run Shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

//evn-loading
require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
client.config = {
  prefix: process.env.PREFIX
}

//bot status
const discord = require('discord.js');
const client = new Discord.Client();
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
client.on("ready", () => {
  function YousamPower() {
    let hungry = [`${prefix}serverlist` , `${prefix}help` ]
    let Power = Math.floor(Math.random() * hungry.length);
    client.user.setActivity(hungry[Power], {type: "LISTENING"});//can be LISTENING, WATCHING, PLAYING, STREAMING
  }; setInterval(YousamPower, 5000)
});

//Logging in to discord
client.login(process.env.TOKEN)
