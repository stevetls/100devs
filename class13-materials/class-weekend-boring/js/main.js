//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', powerCheck)


function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}

function powerCheck(){
  const shortDay = document.querySelector('#day').value.slice(0,3).toLowerCase();

  if (shortDay === "tue" || shortDay === "thu"){
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
  } else if (shortDay === "sat" || shortDay === "sun"){
    document.querySelector('#placeToSee').innerText = "Its The Weekend"
  } else {
    document.querySelector('#placeToSee').innerText = "BORING"
  }
}