let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissor = document.getElementById("scissor")
    let player = document.getElementById("player")
    let computer = document.getElementById("computer");
    let result = document.getElementById("result")
    
    let arr = ["Rock" , "Paper" , "Scissor"];
    let comp = (arr[(Math.floor(Math.random() * arr.length))]);
    console.log(comp)

    rock.addEventListener("click" , ()=>{
        computer.innerHTML = comp;
        player.innerHTML = "Rock";
        if(comp == "Rock"){
            result.innerHTML = "Tie";
            result.style.color = "Red";
        }
        else if(comp == "Paper"){
            result.innerHTML = "You Lose";
            result.style.color = "Red";
        }
        else{
            result.innerHTML = "You Win";
            result.style.color = "Red";
        }
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    })
    paper.addEventListener("click" , ()=>{
        computer.innerHTML = comp;
        player.innerHTML = "Paper";
        if(comp == "Paper"){
            result.innerHTML = "Tie";
            result.style.color = "Red";
        }
        else if(comp == "Scissor"){
            result.innerHTML = "You Lose";
            result.style.color = "Red";
        }
        else{
            result.innerHTML = "You Win";
            result.style.color = "Red";
        }
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    })
    scissor.addEventListener("click" , ()=>{
        computer.innerHTML = comp;
        player.innerHTML = "Scissor";
        if(comp == "Scissor"){
            result.innerHTML = "Tie";
            result.style.color = "Red";
        }
        else if(comp == "Rock"){
            result.innerHTML = "You Lose";
            result.style.color = "Red";
        }
        else{
            result.innerHTML = "You Win";
            result.style.color = "Red";
        }
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    })