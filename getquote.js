const axios = require('axios');
const prompt = require('prompt-sync')();
var name = prompt("text : ");
const getAnimeRandom = async (name) => {
    const AnimeUrl = 'https://animechan.vercel.app/api/';
    await axios.get(`${AnimeUrl}` + name).then(function (response) {
        if (name == 'random') {
            let mes = 'Anime : ' + response.data.anime + '\nCharacter : ' + response.data.character + '\nQuote : ' + response.data.quote
            console.log(mes);
        }
        else {
            let i = (response.data.length == 1) ? 0 : Math.floor(Math.random() * 11);
            let mes = 'Anime : ' + response.data[i].anime + '\nCharacter : ' + response.data[i].character + '\nQuote : ' + response.data[i].quote
            console.log(mes);
        }
    }).catch(function (error) {
        console.log("Error");
    });
};
if (name.includes('name'))
    getAnimeRandom('quotes/character?name=' + name.toLowerCase().substring(4).trim().split(" ").join("+"));
else if (name.includes('title'))
    getAnimeRandom('quotes/anime?title=' + name.toLowerCase().substring(6).trim().split(" ").join("%20"));
else
    getAnimeRandom('random');
