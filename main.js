const jokeEl = document.getElementById('joke');
const jokeID = document.getElementById('jokeId');

const jokeBtn = document.getElementById('get-joke');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke(){
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const joke = await jokeRes.json()

    console.log(joke)
   

    jokeEl.innerHTML = joke.joke
    jokeID.innerHTML = joke.id
}





