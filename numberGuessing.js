const button=document.getElementById('button');
const input=document.getElementById('input');
const ins=document.getElementById('instruction');
const reset=document.getElementById('reset');
let count;
let attempt=0;
let num;
let max=50;
let min=1;

num = Math.floor(Math.random() * (max - min + 1)) + min;
count=0;
ins.innerText="";
input.value=0;

reset.onclick=function(){
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    count=0;
    ins.innerText="";
    input.value=0;
}
button.onclick=function(){
    attempt++;
    count=input.value;
    if(count > num){
        ins.innerText="TOO HIGH TRY AGAIN!";
        ins.style.color="red";
    }
    else if(count < num){
        ins.innerText="TOO LOW TRY AGAIN!";
        ins.style.color="red";
    }
    else if(count==num){
        if(attempt <= 5){
            ins.innerText=`${attempt} attempts? not bad nerd🤓`;
        }
        else{
            ins.innerText=`Congratulation you've guessed the number with ${attempt} attempts!`;
        }
        ins.style.color="#BEFF3C";
    }
}