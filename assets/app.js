let userSc=0;
let aiSc=0;
let options= ["rock","paper","scissors"];
const optionArr = document.querySelectorAll(".option");

function comChoose(){
    let index = Math.floor(Math.random()*3);
    return options[index];
}
function playGame(x,y){
    if(x===y){
        return "Draw";
    }
    else{
             if((x==="rock" && y==="paper")||
                (x==="scissors" && y==="rock")||
                (x==="paper" && y==="scissors")){
                    return "Lose";
                }
        else if((x==="rock" && y==="scissors")||
                (x==="paper" && y==="rock")||
                (x==="scissors" && y==="paper")){
                    return "Win";
                }
    }
}
function scoreBoard(z){
    if(z==="Win"){
        userSc++;
        document.getElementById("s1").innerText = userSc;
    }
    else if(z==="Lose"){
        aiSc++;
        document.getElementById("s2").innerText = aiSc;
    }
}
optionArr.forEach((arr, index)=>{
    arr.addEventListener("click", ()=>{ 
        let pc = comChoose();

        document.getElementById("r1").innerText = options[index];
        document.getElementById("r2").innerText = pc;

        let result = playGame(options[index], pc);
        
        document.getElementById("status").innerText = result;
        scoreBoard(result);
    })
})