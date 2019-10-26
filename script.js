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

const selector = document.querySelectorAll(".gameSelector");

const game = document.querySelectorAll(".game");

selector.forEach(function(select) {
    select.addEventListener("click", function(evt) {
        evt.preventDefault();

        if (player1 == true) {
            game[list.index(select)].style.backgroundColor = "blue";
            console.log(game[list.index(select)].style.backgroundColor);
            player1 = false;
            console.log(player1);
            player2 = true;
            console.log(player2)
        } else if (player2 == true) {
            game[list.index(select)].style.backgroundColor = "red";
            console.log(game[list.index(select)].style.backgroundColor);
            player2 = false;
            console.log(player2);
            player1 = true
            console.log(player1);
        }
    })

})

class Tictactoe {
    constructor(turn, player1, player2) {
        this.turn = turn
        this.player1 = player1
        this.player2 = player2
    }



}
