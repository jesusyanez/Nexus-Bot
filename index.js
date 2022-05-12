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
    console.log(data);
    // msg.channel.send(JSON.stringify(data));
    // msg.channel.send("```"+"```");
    // msg.channel.send("ProfilePic: " + JSON.stringify(data.ProfilePic));
    const { markdownTable } = await import ('markdown-table');
    const goat = markdownTable(data.RecentlyPlayedWith);
    console.log(goat);
    msg.channel.send("```" + "Recently Played With - "  + data.Name+ "\n\n"  +  goat +"```");
  }
});

