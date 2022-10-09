const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES",] });
const config = require("./config.json");



client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.user.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores`);
    client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);


});


client.on('guildCreate', guild => {
    client.on(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

    
})


client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);

    
});


client.on("message", async message => {

});


client.login(config.token);


