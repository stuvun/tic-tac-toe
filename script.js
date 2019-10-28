// Game starts

// Display turn phase (game starts with Player 1)
// Player 1 selects a box
// The box that Player 1 picks turns red
// The box becomes unclickable
// CHECK IF THERE'S A WINNER

// Display turn phase Player 2
// Player 2 selects a box
// The box that Player 2 picks turns blue
// The box becomes unclickable
// CHECK IF THERE'S A WINNER

// | If there are three reds in a line, Player 1 wins       |
// | Add a point to Player 1's score                        |   CHECK
// | If there are three blues in a line, Player 2 wins      |   IF
// | Add a point to Player 2's score                        |   THERE'S
// | If all boxes are unclickable && there is no winner,    |   A
// | The game ends in a tie.                                |   WINNER
// | Show reset button                                      |

// If reset button is clicked, turn box colors back to white
// Make boxes clickable again
// Game starts

const game = document.querySelectorAll(".item");

let player1 = [];
let player2 = [];
let turn = 0;
const win = [ ["1", "2", "3"],
              ["4", "5", "6"],
              ["7", "8", "9"],
              ["1", "4", "7"],
              ["2", "5", "8"],
              ["3", "6", "9"],
              ["1", "5", "9"],
              ["3", "5", "7"] ];

const winRev = win.slice(0).reverse().map(i => { return i });
console.log(win);
console.log(winRev);

game.forEach(function(block) {
    block.addEventListener("click", function(evt) {
        evt.preventDefault();

        if (turn == 0 && block.style.background == "") {
            block.style.background = "red";
            console.log(block.style.background == "red");
            if ((game[0].style.background == "red" && game[1].style.background == "red") && game[2].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[3].style.background == "red" && game[4].style.background == "red") && game[5].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[6].style.background == "red" && game[7].style.background == "red") && game[8].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[0].style.background == "red" && game[3].style.background == "red") && game[6].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[1].style.background == "red" && game[4].style.background == "red") && game[7].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[2].style.background == "red" && game[5].style.background == "red") && game[8].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[0].style.background == "red" && game[4].style.background == "red") && game[8].style.background == "red")
            { console.log("Player 1 Wins!") }
            else if ((game[2].style.background == "red" && game[4].style.background == "red") && game[6].style.background == "red")
            { console.log("Player 1 Wins!") }
            else {
                turn = 1;
                console.log("Player 2's turn")
            }
        }
        else if (turn == 1 && block.style.background == "") {
            block.style.background = "blue";
            console.log(block.style.background == "blue")
            if ((game[0].style.background == "blue" && game[1].style.background == "blue") && game[2].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[3].style.background == "blue" && game[4].style.background == "blue") && game[5].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[6].style.background == "blue" && game[7].style.background == "blue") && game[8].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[0].style.background == "blue" && game[3].style.background == "blue") && game[6].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[1].style.background == "blue" && game[4].style.background == "blue") && game[7].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[2].style.background == "blue" && game[5].style.background == "blue") && game[8].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[0].style.background == "blue" && game[4].style.background == "blue") && game[8].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else if ((game[2].style.background == "blue" && game[4].style.background == "blue") && game[6].style.background == "blue")
            { console.log("Player 2 Wins!") }
            else {
                turn = 0;
                console.log("Player 1's turn")
            }
        }
    })
})

