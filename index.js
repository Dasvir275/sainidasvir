let computerguess;
let userguess=[];
let usernumberupdate=document.getElementById("textoutput");
let inputupdate=document.getElementById("inputbox");
let maxguess=0;
let audio=new Audio("./gamebeep.mp3");
let r=document.querySelector(".newbtn");

r.addEventListener('click',()=>{

   // document.getElementById("gamearea").style.display="none";
  //  document.getElementById("#welcomescreen").style.display="inline";
  window.location.reload();

})
const found=()=>{

computerguess=Math.floor(Math.random()*100);
document.querySelector("#buttonnewgame").style.display="none";

document.getElementById("gamearea").style.display="none";

}
found();


let startgame=()=>{

    document.getElementById("gamearea").style.display="block";
    document.getElementById("#welcomescreen").style.display="none";

}

let easymode=document.querySelector(".btn1");

easymode.addEventListener('click',()=>{
maxguess=10;
audio.play();
startgame();

})

let hardmode=document.querySelector(".btn2");

hardmode.addEventListener('click',()=>{
    audio.play();
maxguess=5;
startgame();

})

const startnewgame=()=>{


    document.getElementById("buttonnewgame").style.display="inline";
document.getElementById("inputbox").setAttribute("disabled",true);    
}


const compareguess=()=>{

const username=Number(document.getElementById("inputbox").value);

userguess=[...userguess,username];
document.getElementById("guess").innerHTML=userguess;
//handel computer and user guess
if(userguess.length<maxguess){
if(username>computerguess){

    usernumberupdate.innerHTML="your guess is high";
    audio.play();
inputupdate.value="";
}
else if(computerguess>username){

    usernumberupdate.innerHTML="your guess is low";
    audio.play();
    inputupdate.value="";
}
else{

    usernumberupdate.innerHTML="its correct";
    audio.play();
    audio.play();
    inputupdate.value="";
    startnewgame();
}
}

else{




    if(username>computerguess){

        usernumberupdate.innerHTML=`your guess is wrong correct is ${computerguess}`;
        audio.play();
    inputupdate.value="";
    startnewgame();
    }
    else if(computerguess>username){
    
        usernumberupdate.innerHTML=`your guess is wrong correct is ${computerguess}`;
        audio.play();
        inputupdate.value="";
        startnewgame();
    }
    else{
    
        usernumberupdate.innerHTML="its correct";
        audio.play();
        audio.play();
        inputupdate.value="";
        startnewgame();
    }






}


document.getElementById("attempts").innerHTML=userguess.length;
}