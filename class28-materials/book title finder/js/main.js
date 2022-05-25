//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h3').innerText = localStorage.getItem('books')

function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
  //`https://openlibrary.org/isbn/${isbn}.json`

        
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[`ISBN:${isbn}`].details)
        localStorage.setItem('books', data[`ISBN:${isbn}`].details.title)
        document.querySelector('h3').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

