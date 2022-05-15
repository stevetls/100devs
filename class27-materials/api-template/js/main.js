//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function fetchNasaPicture(){
  const api = 8ccLIAP1ucyxccbGlDl94loIwOWgDuip4e1TTpiI
  const url = 'https://api.nasa.gov/planetary/apod?api_key='+api

  fetch(url)
  

}
