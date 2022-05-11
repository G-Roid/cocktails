document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let choice = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('h2').textContent = data.drinks[0].strDrink

        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        let instructions = data.drinks[0].strInstructions.split('.')

        instructions.pop()
        
        for (let i = 0; i < instructions.length; i++) {
            let newListItem = document.createElement('li');
            let newContent = document.createTextNode(instructions[i])


            newListItem.appendChild(newContent)
            console.log(newContent)

            document.querySelector('ol').appendChild(newListItem)
        }
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}

