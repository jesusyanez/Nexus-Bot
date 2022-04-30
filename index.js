require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const scraper = require("./scraper-worker/scraper");

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`[Nexus]: online`);
});


bot.on("message", async (msg) => {
  if (msg.content.startsWith("!n")) {
    let name = msg.content;
    name = name.slice(3);
    console.log(name);
    const data = await scraper.getStats(name);
    //console.log("bot index " + data);
    console.log(data);
    msg.channel.send("Rank: " + JSON.stringify(data.Rank));
    msg.channel.send("KDA Ratio: " + JSON.stringify(data.KDARatio));
  }
});
