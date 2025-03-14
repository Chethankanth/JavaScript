let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score")


const compGen = () => {
    const option = ["rock", "paper", "scissors"]; // Fixed spelling
    const compchoos = Math.floor(Math.random()*3);
    return option[compchoos];
};

let dRawgame = () => {
    msg.innerText="its a Draaw!.."
    msg.style.backgroundColor="purple";
    console.log("It's a draw!");
};

let showWinner = (userWin) => {
    if (userWin === true) {
        userScore += 1; // Corrected score update
        msg.innerText="you win!.."
        msg.style.backgroundColor="green";
        uScore.innerText = userScore;
        console.log("User won against the computer! Score:", userScore);
    } else {
        computerScore += 1;
        msg.innerText="Computer Won!.."
        msg.style.backgroundColor="red";
        cScore.innerText= computerScore;
        console.log("Computer won against the user! Score:", computerScore);
    }
};

const game = (choiceId) => { // Removed extra parameter 'option'
    console.log("User choice:", choiceId);

    // Generate computer choice
    const cGen = compGen();
    console.log("The computer choice is:", cGen);

    if (choiceId === cGen) {
        dRawgame();
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            userWin = cGen === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = cGen === "scissors" ? false : true;
        } else if (choiceId === "scissors") {
            userWin = cGen === "rock" ? false : true;
        }
        showWinner(userWin); // Only runs if there's a winner
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id");
        game(choiceId);
    });
});