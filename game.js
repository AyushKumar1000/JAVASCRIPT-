let You = prompt ("Choose Stone, Paper or Scissor")
let CompI = Math.floor(Math.random()*3);
let Comp = ["Stone", "Paper", "Scissor"][CompI]

const match = (Comp, You)=> {
    if (Comp === You){
        return "Nobody wins"
    }
    else if (Comp === "Stone" && You ==="Paper"){
        return "You win"
    }
    else if (Comp === "Paper" && You ==="Stone"){
        return "computer wins"
    }
    else if (Comp === "Scissor" && You ==="Stone"){
        return "You win"
    }
    else if (Comp === "Stone" && You ==="Scissor"){
        return "Computer wins"
    }
    else if (Comp === "Paper" && You ==="Scissor"){
        return "You win"
    }
    else if (Comp === "Scissor" && You ==="Paper"){
        return "Computer wins"
    }



}
let result = match(Computer,You)
alert (`Compter:${Comp} and You:${You}\nThe winner is: ${result}`)