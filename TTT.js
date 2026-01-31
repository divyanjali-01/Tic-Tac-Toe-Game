let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#start-btn");
let status=document.querySelector("#status");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#status");
let turnX=true;
let gameOver=false;

const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnX=true;
    enablebtns();
    gameOver=false;
    msgContainer.classList.add("hide");

};



btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(gameOver){
            return;
        }
        if(btn.innerText!=""){
            return;
        }
        if(turnX){
            btn.innerText="X";
            turnX=false;
        }else{
            btn.innerText="O";
            turnX=true;
        }
        btn.disabled=true;
        checkWinner();
    });
});
const disablebtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
};
const enablebtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! ${winner} has won the game`;
    msgContainer.classList.remove("hide");
    gameOver=true;
    disablebtns();
};
const checkWinner=()=>{
    for(let pattern of winCombos){
        let pos1val=btns[pattern[0]].innerText;
        let pos2val=btns[pattern[1]].innerText;
        let pos3val=btns[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");

                showWinner(pos1val);
            }
        }
    }
};  

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);