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
const win1 = document.querySelector(".player1Win");
const win2 = document.querySelector(".player2Win");

let turn = 0;
let red = "redredred";
let blue = "blueblueblue";

function endWin1() {
    turn = 3;
    win1.classList.toggle("hidden")
}

function endWin2() {
    turn = 3;
    win2.classList.toggle("hidden")
}

game.forEach(function(block) {
    block.addEventListener("click", function(evt) {
        evt.preventDefault();
        
        console.log(block);

        if (turn == 0 && block.style.background == "") {
            block.style.background = "red";
            turn = 1;
            if      ( game[0].style.background
                    + game[1].style.background
                    + game[2].style.background
                   == red ) { endWin1() }
            else if ( game[3].style.background
                    + game[4].style.background
                    + game[5].style.background
                   == red ) { endWin1() }
            else if ( game[6].style.background
                    + game[7].style.background
                    + game[8].style.background
                   == red ) { endWin1() }
            else if ( game[0].style.background
                    + game[3].style.background
                    + game[6].style.background
                   == red ) { endWin1() }
            else if ( game[1].style.background
                    + game[4].style.background
                    + game[7].style.background
                   == red ) { endWin1() }
            else if ( game[2].style.background
                    + game[5].style.background
                    + game[8].style.background
                   == red ) { endWin1() }
            else if ( game[0].style.background
                    + game[4].style.background
                    + game[8].style.background
                   == red ) { endWin1() }
            else if ( game[2].style.background
                    + game[4].style.background
                    + game[6].style.background
                   == red ) { endWin1() }
        } else if (turn == 1 && block.style.background == "") {
            block.style.background = "blue";
            turn = 0;
            if      ( game[0].style.background
                    + game[1].style.background
                    + game[2].style.background
                   == blue ) { endWin2() }
            else if ( game[3].style.background
                    + game[4].style.background
                    + game[5].style.background
                   == blue ) { endWin2() }
            else if ( game[6].style.background
                    + game[7].style.background
                    + game[8].style.background
                   == blue ) { endWin2() }
            else if ( game[0].style.background
                    + game[3].style.background
                    + game[6].style.background
                   == blue ) { endWin2() }
            else if ( game[1].style.background
                    + game[4].style.background
                    + game[7].style.background
                   == blue ) { endWin2() }
            else if ( game[2].style.background
                    + game[5].style.background
                    + game[8].style.background
                   == blue ) { endWin2() }
            else if ( game[0].style.background
                    + game[4].style.background
                    + game[8].style.background
                   == blue ) { endWin2() }
            else if ( game[2].style.background
                    + game[4].style.background
                    + game[6].style.background
                   == blue ) { endWin2() }
        }
    })
})
