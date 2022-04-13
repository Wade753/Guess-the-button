var winner;
var N_Buttons;

function start(){
    let nr = Math.floor(Math.random() * N_Buttons) + 1;
    console.log("winner number is " + nr);
    winner = nr;
}

function startNewGame(){
    let selectedNumber = document.getElementById("numberOfButtons").value;
    let numberOfButtons = 0;
    if(selectedNumber === undefined || selectedNumber == undefined || selectedNumber <= 0 || selectedNumber === "" || selectedNumber == ""){
            document.getElementById("messageButtons").innerHTML = '<p class="lost"> Please insert a number of buttons </p>';
            return;
    }
    numberOfButtons = Math.floor(selectedNumber);
    N_Buttons = numberOfButtons;
    start();
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    for(let i = 1; i <= numberOfButtons; ++i){
        buttons.innerHTML += '<button id ="' + i + '" onclick ="choose(' + i + ')">Button ' + i + '</button>';
    }
}

function choose(buttonNumber){
    if(buttonNumber === winner){
        document.getElementById("messageButtons").innerHTML = '<p class = "win"> You won!</p>';
    }else{
        document.getElementById("messageButtons").innerHTML = '<p class = "lost"> You lost!</p>';
    }
    start();
}