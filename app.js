/* --------------------------------*
* ----- EVENT HANDLERS ------------*
* ---------------------------------*/

 const button = document.querySelector('tictactoe');

function changeX(event) {
  if (event.target.innerHTML !== "X") {
    console.log(event.target.innerHTML + " selected for X!");
    event.target.innerHTML = "X";
    event.target.value = "X";
    checkBoard();
  }
 }

document.body.addEventListener('click', changeX);

/* --------------------------------*
* ----- STATUS CHECKERS ------------*
* ---------------------------------*/

// var board = () => {
//   this.xArray = [];
//   this.yArray = [];
// }


var checkBoard = () => {
  var allButtons = document.getElementsByClassName('tictactoe');
  var xArray = [];
  for (var i = 0; i < allButtons.length; i++) {
    if (allButtons[i].value === "X") {
      console.log('X added to xArray')
      xArray.push(allButtons[i]);
    }
  }
  console.log(xArray);

}