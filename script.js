const game = document.querySelectorAll(".item");
const win1 = document.querySelector(".player1Win");
const win2 = document.querySelector(".player2Win");
const draw = document.querySelector(".gameDraw");

let turn = 0;
let red = "redredred";
let blue = "blueblueblue";
let round = 0;

function endWin1() { turn = 3; win1.classList.toggle("hidden") }
function endWin2() { turn = 3; win2.classList.toggle("hidden") }

function checkTie() {
    if ( round == 9 ) {
        if (win1.classList.contains("hidden") == true && win2.classList.contains("hidden") == true) {
            draw.classList.toggle("hidden");
            turn = 4
        }
    } else { return round }
}

game.forEach(function(block) {

    block.addEventListener("click", function(evt) {
        evt.preventDefault();

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
        round = round + 1;
        checkTie()
    })
})