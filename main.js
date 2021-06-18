const GeekButton = document.querySelector('.getJoke');
const KanyeButton = document.querySelector('.quoteKanye');
const DadButton = document.querySelector('.dadJoke');
const MemeButton = document.querySelector('.getMeme')
const Guess = document.querySelector('.guessButton');

let altText;
    
async function geekFetch() {
    let response = await fetch ('https://geek-jokes.sameerkumar.website/api');
    let data = await response.json();
    document.querySelector('.geek').innerHTML = data;
};
async function quoteFetch() {
    let response = await fetch ('https://api.kanye.rest');
    let data = await response.json();
    document.querySelector('.quote').innerHTML = data.quote;
};
async function dadFetch() {
    let response = await fetch( 'https://icanhazdadjoke.com/', 
    {headers: {accept : "application/json"}});
    let data = await response.json();
    document.querySelector('.dad').innerHTML = data.joke;
};
async function memeFetch() {
    let random = Math.floor(Math.random() *100)+1;
    let response = await fetch ('https://api.imgflip.com/get_memes');
    let data = await response.json();
    document.querySelector('.memePic').src = data.data.memes[`${random}`].url;
    altText = data.data.memes[`${random}`].name;
    console.log(data.data.memes[`${random}`])
};

function Fun() {
    if (Guess.value !== ""){
    document.querySelector('.answer').innerHTML = altText;
    } else {
        document.querySelector('.answer').innerHTML = "Take a guess";
    }
}

GeekButton.addEventListener('click', geekFetch);
KanyeButton.addEventListener('click', quoteFetch);
DadButton.addEventListener('click', dadFetch);
MemeButton.addEventListener('click', memeFetch)
Guess.addEventListener('click', Fun)