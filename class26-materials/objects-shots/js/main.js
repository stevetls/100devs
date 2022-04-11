//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', cocktailList)
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      cocktailList()
    }
});



function cocktailInfo(){

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('#cocktailImage').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    }

function cocktailList(){
    let cocktail = document.querySelector('input').value.replace(' ', '+')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        document.querySelector('ul').innerHTML = ""
        data.drinks.forEach(drink => {
            
            let image =  document.createElement('img')
            image.src = drink.strDrinkThumb
            let li = document.createElement('li')
            let cocktailName =  document.createElement('h4')
            cocktailName.innerText = drink.strDrink

            let instruction =  document.createElement('p')
            instruction.innerText = drink.strInstructions

            li.append(cocktailName, image, instruction)
            li.id = drink.idDrink
            document.querySelector('ul').append(li)

            document.getElementById(drink.idDrink).onclick = cocktailInfo
            })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}