//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', cocktailInfo)
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      cocktailInfo()
    }
});

function cocktailInfo(){
    let cocktail = document.querySelector('input').value.replace(' ', '+')


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        
        
        data.drinks.forEach(drink => {
            let li = document.createElement('li')
            li.innerText = drink.strDrink
            let image =  document.createElement('img')
            image.src = drink.strDrinkThumb
            document.querySelector('ul').append(image, li)
            })
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}