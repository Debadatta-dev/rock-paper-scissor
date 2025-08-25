let choices=document.querySelectorAll(".choice");
let scores=document.querySelectorAll(".score-board");
let resultMsg=document.querySelector(".result-text");
let userScorePara=document.querySelector(".my-score-para");
let computerScorePara=document.querySelector(".computer-score-para");
let resetBtn=document.querySelector("#reset-btn");

let userScore=0;
let computerScore=0;




//computerChoice

 const getComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const cChoice=Math.floor(Math.random()*3);
    return options[cChoice];
 }

 //userchoice

 choices.forEach((choice)=> {
     choice.addEventListener("click", ()=> {

    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
    
  });
 });



 //Tie Game/ Draw

 let tieGame=()=>{
    resultMsg.innerText ="Tie, play again";
    resultMsg.style.backgroundColor = "#0077ff";
 }



//Gameplay

 const playGame=(userChoice)=>{
   let computerChoice = getComputerChoice();

   if(userChoice === computerChoice){
    tieGame();
   }
   else if(userChoice==="rock"){
     if(computerChoice==="paper"){
        computerScore++;
        resultMsg.innerText = "You loose,"+ " " +computerChoice+" " +"beats"+ " " + userChoice ;
        resultMsg.style.backgroundColor = "#d10505";
        computerScorePara.innerText = computerScore;

    } else{
        userScore++;
        resultMsg.innerText = "You Win," + " " + userChoice + " " + "beats "+ " " +computerChoice;
        resultMsg.style.backgroundColor= "#18c002";    
        userScorePara.innerText = userScore;
    }
  }

    else if(userChoice==="paper"){
    if(computerChoice==="scissors"){
        computerScore++;
        resultMsg.innerText = "You loose,"+ " " +computerChoice+" " +"beats"+ " " + userChoice ;
        resultMsg.style.backgroundColor = "#d10505";
        computerScorePara.innerText = computerScore;
    }
    
   else{  
    userScore++;
    resultMsg.innerText = "You Win," + " " + userChoice + " " + "beats "+ " " +computerChoice;
    resultMsg.style.backgroundColor= "#18c002";    
    userScorePara.innerText = userScore;
    }

  }

   else if(userChoice==="scissors"){
    if(computerChoice==="rock"){
        computerScore++;
        resultMsg.innerText = "You loose,"+ " " +computerChoice+" " +"beats"+ " " + userChoice ;
        resultMsg.style.backgroundColor = "#d10505";
        computerScorePara.innerText = computerScore;
    }
    
   else{   
    userScore++;
    resultMsg.innerText = "You Win," + " " + userChoice + " " + "beats "+ " " +computerChoice;
    resultMsg.style.backgroundColor= "#18c002";    
    userScorePara.innerText = userScore;
  }
}

//    else if(userChoice==="rock"){
//     if(computerChoice==="scissors"){
//         return userWin=true;
//     }
//    }
//    else if(userChoice==="scissors"){
//     if(computerChoice==="paper"){
//         return userWin=true;
//     }
//    }
//    else if(userChoice==="paper"){
//     if(computerChoice==="rock"){
//         return userWin=true;
//     }
//    }
   
//    showWinner(userWin, userChoice, computerChoice);
  };




 //Winner Function

//  const showWinner=(userWin, userChoice, computerChoice)=>{
//     if(userWin){
//         userScore++;
//         userScorePara.innerText = userScore;
//         resultMsg.innerText = "You Win," + " "+ userChoice +" "+ "beats "+ " "+computerChoice;
//         resultMsg.style.backgroundColor= "#18c002";
//     }
//     else{
//         computerScore++;
//         computerScorePara.innerText = computerScore;
//         resultMsg.innerText = "You loose,"+" " +computerChoice+" " +"beats"+ " "+ userChoice ;
//         resultMsg.style.backgroundColor = "#d10505";
//     }
//  }






//RESET BUTTON

const resetButton=()=>{
    resetBtn.addEventListener("click", ()=>{
     window.location.reload();
    });
};

resetButton();