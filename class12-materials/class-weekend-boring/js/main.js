document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day.substring(0,3).toLowerCase() === "mon" || day.substring(0,3).toLowerCase()==="wed" || day.toLowerCase()==="fri" ){
    document.querySelector('#placeToSee').innerText = "Boring Day";
  } else if ( day.substring(0,3).toLowerCase()=== "tue" || day.substring(0,3).toLowerCase()==="thu"){
    document.querySelector('#placeToSee').innerText = "Class Day";
  } else if (day.substring(0,3).toLowerCase ==="sat" || day.substring(0,3).toLowerCase()==="sun"){
    document.querySelector('#placeToSee').innerText = "Weekend!";
  } else {
    document.querySelector('#placeToSee').innerText = "Not sure what you are talking";
  }

}
 