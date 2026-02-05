let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const refreshBtn = document.querySelector("#refresh");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("the game was draw");
    msg.innerText = "Game was draw.. Play again !";
     msg.style.backgroundColor = "blue";
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You won!");
        msg.innerText = `You win!.. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose..");
        msg.innerText = `You lose.. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("User Choice = ",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);
    if (userChoice === compChoice) {
        //draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        console.log("clicked");
        playGame(userChoice);
    })
})



refreshBtn.addEventListener("click",()=>{
 userScore = 0;
 userScorePara.innerText = userScore;
 compScore = 0;
 compScorePara.innerText = compScore;
 msg.innerText = "Play your move";
 msg.style.backgroundColor = "#081b31";
})
