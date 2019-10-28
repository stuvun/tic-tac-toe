const play1Turn = document.querySelector(".player1");
const play2Turn = document.querySelector(".player2");

const game = document.querySelectorAll(".item");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

const win1 = document.querySelector(".player1Win");
const win2 = document.querySelector(".player2Win");
const draw = document.querySelector(".gameDraw");
const rematch = document.querySelector(".rematch");

let turn = 0;
let round = 0;
let player1 = 0;
let player2 = 0;
let red = "redredred";
let blue = "blueblueblue";

function endWin1() {
    turn = 3;
    win1.classList.toggle("hidden");
    play1Turn.classList.add("hidden");
    play2Turn.classList.add("hidden");
    player1 = player1 + 1;
    score1.innerHTML = "Player 1: " + player1;
    rematch.classList.toggle("hidden")
}
function endWin2() {
    turn = 3; win2.classList.toggle("hidden");
    play1Turn.classList.add("hidden");
    play2Turn.classList.add("hidden");
    player2 = player2 + 1;
    score2.innerHTML = "Player 2: " + player2;
    rematch.classList.toggle("hidden")
}

function checkTie() {
    if ( round == 9 ) {
        if (win1.classList.contains("hidden") == true && win2.classList.contains("hidden") == true) {
            draw.classList.toggle("hidden");
            turn = 4;
            rematch.classList.toggle("hidden")
        }
    } else { return round }
}

rematch.addEventListener("click", function(evt) {
    evt.preventDefault();
    game.forEach(function(clear) {
        clear.style.background = "";
        win1.classList.add("hidden");
        win2.classList.add("hidden");
        turn = 0;
        round = 0;
        play1Turn.classList.remove("hidden");
        rematch.classList.toggle("hidden")
    })
})

game.forEach(function(block) {

    block.addEventListener("click", function(evt) {
        evt.preventDefault();
        let player1 = play1Turn.classList.toggle("hidden");
        let player2 = play2Turn.classList.toggle("hidden");

        if (turn == 0 && block.style.background == "") {
            block.style.background = "red";
            turn = 1;
            player1;
            player2;

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
            player2;
            player1;

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