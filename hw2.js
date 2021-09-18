const range=document.getElementById('js-range');
const range_num=document.getElementById('value1');
range_num.innerHTML=range.value;
const display = document.getElementById("js-result");

function g_result(){
    const diplaySpan = display.querySelector("span");
    const guess_num=document.getElementById("guess").value;
    const machine_num=Math.floor(Math.random()*range_num.innerHTML);
    var answer;
    if (guess_num==machine_num){
        answer="You win!";
    }
    else{
        answer="You lost!";
    }
    diplaySpan.innerHTML = `You choose: ${guess_num}, the machine choose: ${machine_num}<br><b>${answer}</b>`;
   
}
