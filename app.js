 const button = document.querySelector('tictactoe');
//  const button = document.getElementsByClassName('tictactoe');
// //  const button = document.getElementById('button');


function changeX(event) {
  if (event.target.innerHTML !== "X") {
    console.log(event.target.innerHTML + " selected for X!");
    event.target.innerHTML = "X";
    event.target.value = "X";
  }
 }

// //  button.onClick('click', changeX);
// // button.onclick = changeX;

document.body.addEventListener('click', changeX);

// document.querySelectorAll('.tictactoe').forEach(item => {
//   item.addEventListener('click', changeX)
// })

