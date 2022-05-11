document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let choice = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(`error: ${err}`)
    })
}

