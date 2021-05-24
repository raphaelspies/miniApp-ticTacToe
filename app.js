// //  const button = document.querySelector('tictactoe');
 const button = document.getElementsByClassName('tictactoe');
// //  const button = document.getElementById('button');


function changeX(event) {
  // if (button.value === "") {
    // button.value = "X";
    // button.innerHTML = "X";
    console.log(button.id + "selected for X!");
  // }
 }

// //  button.onClick('click', changeX);
// // button.onclick = changeX;

document.body.addEventListener('click', changeX);

// document.querySelectorAll('.tictactoe').forEach(item => {
//   item.addEventListener('click', changeX)
// })

