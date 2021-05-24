/* --------------------------------*
* ----- STATUS CHECKERS ------------*
* ---------------------------------*/

var Board = function() {
  this.xArray = [];
  this.yArray = [];
};

// Board.prototype.checkBoard = function() {
//   var allButtons = document.getElementsByClassName('tictactoe');
//   for (var i = 0; i < allButtons.length; i++) {
//     if (allButtons[i].value === "X") {
//       console.log('X added to xArray')
//       this.xArray.push(allButtons[i]);
//     }
//   }
//   console.log(this.xArray);
// }

Board.prototype.addX = function(instance) {
  this.xArray.push(instance);
  // console.log(this.xArray)
}

Board.prototype.checkRows = function(array) {
  var row1 = []
  var row2 = []
  var row3 = []
  array.forEach(button => {
    if (button.classList.contains('toprow')) {row1.push(button)}
    if (button.classList.contains('middlerow')) {row2.push(button)}
    if (button.classList.contains('bottomrow')) {row3.push(button)}
  })
  if (row1.length ===3) {alert("victory for x!")}
  if (row2.length ===3) {alert("victory for x!")}
  if (row3.length ===3) {alert("victory for x!")}
}

Board.prototype.checkCols = function(array) {
  var col1 = []
  var col2 = []
  var col3 = []
  array.forEach(button => {
    if (button.classList.contains('leftcol')) {col1.push(button)}
    if (button.classList.contains('middlecol')) {col2.push(button)}
    if (button.classList.contains('rightcol')) {col3.push(button)}
  })
  if (col1.length ===3) {alert("victory for x!")}
  if (col2.length ===3) {alert("victory for x!")}
  if (col3.length ===3) {alert("victory for x!")}
}

Board.prototype.checkDiags = function(array) {
  var posDiag = []
  var negDiag = []

  array.forEach(button => {
    // console.log('button: ',button)
    if (button.classList.contains('posDiag')) {posDiag.push(button)}
    if (button.classList.contains('negDiag')) {negDiag.push(button)}

    // if (button.classList.contains('toprow' && 'leftcorner')) {posDiag.push(button)}
    // if (button.classList.contains('bottomrow' && 'rightcorner')) {posDiag.push(button)}
    // if (button.classList.contains('middle')) {posDiag.push(button); posDiag.push(button)}

    // if (button.classList.contains('middle')) {posDiag.push(button); negDiag.push(button)}
    // if (button.classList.contains('bottomrow' && 'leftcorner')) {negDiag.push(button)}
    // if (button.classList.contains('toprow' && 'rightcorner')) {negDiag.push(button)}

  })
  if (posDiag.length ===3) {alert("victory for x: posDiag!")}
  if (negDiag.length ===3) {alert("victory for x: negDiag!")}
  // console.log('posDiag: ', posDiag);
  // console.log('negDiag: ', negDiag)
}

var currentBoard = new Board();

/* --------------------------------*
* ----- EVENT HANDLERS ------------*
* ---------------------------------*/

const button = document.querySelector('tictactoe');

function changeX(event) {
  if (event.target.innerHTML !== "X") {
    console.log(event.target.innerHTML + " selected for X!");
    event.target.innerHTML = "X";
    event.target.value = "X";
    currentBoard.addX(event.target);
    currentBoard.checkRows(currentBoard.xArray);
    currentBoard.checkCols(currentBoard.xArray);
    currentBoard.checkDiags(currentBoard.xArray);
  }
 }

document.body.addEventListener('click', changeX);