const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("!")
bot.login("NDMyMjI3MjEwOTYzNzE0MDQ4.DaqQnA.Za1Ct3o9aI5ilhnN8zorGe_-h6Q");

bot.on('ready', function() {
    bot.user.setGame("!help");
    console.log("Connectedç");
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "général").send(`Bienvenue à ${member} ! \n Amuse toi bien et n'oublie pas d'aller lire le règlement.`)
})

bot.on('guild.member.add', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
bot.on('message', function (message) {
    if(message.content === "Qui est Rai ?") {
    message.channel.send('Le Fondateur !')
 
}})

bot.on('message', function (message) {
    if(message.content === "Qui est Uchiro ?") {
    message.channel.send('La Co-Fondatrice ou presque :D.')
    
}})
bot.on('message', function (message) {
    if(message.content === "Qui est BNI ?") {
    message.channel.send("L'un des modo pour pas dire LE modo le plus appliqué dans son boulot de Modérateur <3 .")
    
}})

bot.on('message', function (message) {
    if(message.content === "PUTIN") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Putin") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "putin") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Merde") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "merde") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "MERDE") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Con") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "con") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "CON") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "CONNARD") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Connard") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "connard") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Qui est Noah ?") {
    message.channel.send("Heuu .. Bah c'est Noah. Mdrr .")  
}})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n - .help \n - Comming Sooooooooon ");
    }

    if (message.content === prefix + "r"){
        var embed = new Discord.RichEmbed()
            .setTitle("Règlement : ")
            .setDescription("\n Toutes les règles sont à respecter, toutes personnes ne respectent pas les règles se verra sanctionné.")
            .addField("\n Article R.1 :","\n Le respect d'autrui est obligatoire, pas d'insultes. ")
            .addField("\n Article F.S.2 :","\n Le flood et le spam intensif est déconseillée.")
            .addField("\n Article P.S.3 :","\n La pub d'autres serveur est strictement interdite sous peine d'un ban permanent en mp ou sur le serveur.")
            .addField("\n Article P.Y.3 :","\n La pub YouTube est interdite.")
            .addField("\n Article P.A.4 :","\n Veuillez parler/(postez du contenu) dans les salons adéquat.")
            .addField("\n Article P.S.5 :","\n Vous pouvez bien-sûr pub le serveur mais tout en étant respectueux et ne pas forcer, c'est à dire de ne pas spam dans d'autres serveurs ou encore en mp à d'autres usagés.")
            .addField("\n Article Q.6 :","\n Toutes questions sur le règlement ou autres en rapport avec le serveur veuillez contacter un Administrateur ou l'un des fondateurs.")
            .setColor("0xFE2E64")
            .setFooter("Amusez vous bien !")
        message.channel.sendEmbed(embed);
    }

})
 

