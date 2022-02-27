const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const messages = ['Nachrichten Hub', 'Nachrichtensender'];
const current = 1;

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity(messages[0] , {type: "LISTENING"})

    setInterval(() => {
        if(messages[current]){
            client.user.setActivity(messages[current] , {type: "LISTENING"})
            current++;
        }else{
            current = 0;
            client.user.setActivity(messages[current] , {type: "LISTENING"})
        }
    }, 5*1000)
});




client.login(porcess.env.TOKEN);