let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice")
const msg=document.getElementById("msg")
const userScoreEle=document.querySelector(".user-score")
const compScoreEle=document.querySelector(".comp-score")

const genCompChoice=()=>{
    // rock,paper and scissors
    const options=["rock","paper","scissors"]
    const randIn=Math.floor(Math.random()*3)
    return options[randIn]
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++
        userScoreEle.innerHTML=userScore
        msg.innerHTML="You Won!"
        console.log(msg.innerHTML)
        msg.style.backgroundColor="green"
     }
     else{
        compScore++
        compScoreEle.innerHTML=compScore
        msg.innerHTML="You lost!"
        msg.style.backgroundColor="red"
    }
    
}

const drawGame=()=>{
    msg.innerHTML="Game was Draw, Play Again!"
}

const playGame=(userChoice)=>{
    // generating computer choice
    const compChoice=genCompChoice()
    if(userChoice===compChoice){
        drawGame()
          msg.innerHTML="Play your Move"
    }else{
        let userWin=true
        if(userChoice==="rock"){
            // scissors,paper
            userWin=compChoice==="paper"?false:true
        }else if(userChoice==="paper"){
            // rock,scissors
            userWin=compChoice==="scissors"?false:true
        }else{
            // rock,paper
             userWin=compChoice==="rock"?false:true
        }
        showWinner(userWin)
        msg.innerHTML="Play your Move"
    }

}

choices.forEach((choice)=>{
    choice.addEventListener('click',(event)=>{
        // generating user choice
        event.preventDefault()
        const userChoice=choice.getAttribute('id')
        playGame(userChoice)
    })
})