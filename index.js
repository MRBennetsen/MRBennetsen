const Discord = require('discord.js');
const bot = new Discord.Client();
'use strict';
const token = 'NzEyNzc3NTcyNjU5NzU3MTE2.Xsat4w.SNT5jeKiBAN7ZAO7iGgVW08aqHg';

const PREFIX = '&'

var version = 'Benver 1.0.5 BETA'

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Jamen velkommen, ${member}` + member.displayAvatarURL());
    
});

bot.on('ready', () =>{
    console.log('Jeg er online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'website':
                message.channel.send('Youtube link; https://www.youtube.com/channel/UCnhtIdM9h6hwMaJqWeuTcvg')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Denne bot kører '+version+'!');
            }else if(args[1] === 'ejer'){
                message.channel.send('Min ejer er MRBennetsen#5003!');
            }
            else if(args[1] === 'om'){
                message.channel.send('Jeg er en bot der er blevet konstrureret som et beta-projekt, af Christian/MRBennetsen. Jeg bliver primært brugt som sjov og stads, men planen er at jeg skal være en moderator, der kan gøre meget for din discord server.');
            }
            else if(args[1] === 'changelog'){
                message.channel.send('```Sidste ændringer: \n - Lavet changelog. \n - Kan nu joine en discord kanal, !join/!leave \n - Fikset små bugs hist og her. \n - Tilføjet div. funktioner til !info```');
            }else{
                message.reply(message.author.displayAvatarURL());
                message.channel.send('Ikke korrekt brug. Bruger du mig har du følgende muligheder; !info [version, om, changelog, ejer]');
            }
            break;
        case 'hjælp'|'help':
            message.channel.send('Jeg kan hjælpe med meget, du kan bruge !ping, !website, !vindrue eller !info');
            break;
        case 'vindrue':
            message.channel.send('Mikkel er en vindrue! :grapes:');
            break;
        case 'join':
            if (message.member.voice.channel) {
                const connection = message.member.voice.channel.join();
                message.reply('Jeg er joinet kanalen ' + message.member.voice.channel.name + '!')
                }else{
                message.reply('Hør her din klovn, du skal være i en kanal! Tihi :clown:!');
                }
            break;
        case 'leave':
            message.member.voice.channel.leave();
            message.reply('Jeg har forladt kanalen '+message.member.voice.channel.name)
            console.log('Forlod kanalen ' +message.member.voice.channel.name+ '! Det blev beordret af: ' + message.member.displayName);
            break;
        case 'afspil':
            
            break;
        
        }
    })

bot.login(token);

// Startkoden er "node ."