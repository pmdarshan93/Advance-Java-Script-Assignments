const clientSocket = io();
let ownRoomId = $('#ownRoomId');
let joinRoomId = $('#joinRoomId');
let roomId;
let mode;
let menu=$('#menu');
let gameContent=$('#gameContent');

$('#createRoom').on('submit', async (e) => {
    e.preventDefault();
    clientSocket.emit('createRoom');
})

clientSocket.on('roomId', (roomId) => {
    console.log("created ROom" + roomId);
    ownRoomId.text(roomId);
})

$('#joinRoom').on('submit', (e) => {
    e.preventDefault();
    console.log($('#joinRoomId').val());
    clientSocket.emit('joinRoom', joinRoomId.val());
    mode=2;
    roomId=joinRoomId.val();
    gameContent.removeClass('hide');
    menu.addClass('hide');
    console.log('joined room ' + joinRoomId.val())
})

$('#vsComputer').on('click',(e)=>{
  mode=1;
  menu.addClass("hide");
  gameContent.removeClass('hide');
})

let opt = ["rock", "paper", "scissor", "lizard", "spock"]
let player = 0
let computer = 0
let resultText = "";
let rock = $("#rock");
let scissor = $('#scissor');
let paper = $('#paper');
let spock = $('#spock');
let lizard = $('#lizard');
let result = $('#showResult');
let playerChoice = $('#playerChoice');
let computerChoice = $('#computerChoice');
let playerScore = $('#playerScore');
let computerScore = $('#computerScore');
let opponentPlayed = false;
let opponentOption;

$('#rock, #scissor, #paper, #spock, #lizard').on('click', (e) => {
  clientSocket.emit('myChoice',[roomId,opt.indexOf(e.target.id)]);
  loading();
})

function loading(){
  console.log("loading");
}

clientSocket.on('opponentOption', (option) => {
  console.log("0pppppppppppppppppppponent",option)
  opponentPlayed=true;
  opponentOption = option;
})


function win(e) {
  let myChoice = opt.indexOf(e.target.id);
  let opponent = mode==1?computerGenerate():opponentOption;
  if (myChoice == opponent) {
    resultText = "DRAW"
  }
  else if (myChoice == 0) {
    if ((opponent == 2 || opponent == 3)) {
      player++
      resultText = "YOU WIN"
    }
    else {
      computer++
      resultText = "YOU LOSE"
    }
  }
  else if (myChoice == 1) {
    if ((opponent == 0 || opponent == 4)) {
      player++
      resultText = "YOU WIN"
    }
    else {
      computer++
      resultText = "YOU LOSE"
    }
  }
  else if (myChoice == 2) {
    if ((opponent == 1 || opponent == 3)) {
      player++
      resultText = "YOU WIN"
    }
    else {
      computer++
      resultText = "YOU LOSE"
    }
  }
  else if (myChoice == 3) {
    if ((opponent == 1 || opponent == 4)) {
      player++
      resultText = "YOU WIN"
    }
    else {
      computer++
      resultText = "YOU LOSE"
    }
  }
  else if (myChoice == 4) {
    if ((opponent == 0 || opponent == 2)) {
      player++
      resultText = "YOU WIN"
    }
    else {
      computer++
      resultText = "YOU LOSE"
    }
  }

  result.text(resultText);
  playerChoice.attr('class', `${opt[myChoice]}1 option`);
  computerChoice.attr('class', `${opt[opponent]}1 option`);
  console.log(opponent)
  playerScore.text("My Score : " + player);
  computerScore.text("Opponent Score : " + computer);
}

function computerGenerate() {
    return Math.floor(Math.random() * 5);
}

// let rock = document.querySelector("#rock");
// let scissor = document.querySelector("#scissor");
// let paper = document.querySelector("#paper");
// let spock = document.querySelector("#spock");
// let lizard = document.querySelector("#lizard");




// rock.addEventListener("click",function(e){
//    win(e)
// })
// paper.addEventListener("click",function(e){
//    win(e)
// })
// scissor.addEventListener("click",function(e){
//    win(e)
// })
// spock.addEventListener("click",function(e){
//    win(e)
// })
// lizard.addEventListener("click",function(e){
//    win(e)
// })

// function  win(e) {
//     let choose = opt.indexOf(e.target.id)
//     let opponent = Math.floor(Math.random()*5);
//     if(choose ==0){
//     if( (opponent ==2 || opponent==3 ) ){
//           player ++ 
//          result="YOU WIN"
//           }
//           else{
//             computer++
//             result="YOU LOSE"
//           }
//     }
//         if(choose ==1){
//     if( (opponent ==0 || opponent==4 ) ){
//           player ++ 
//          result="YOU WIN"
//           }
//           else{
//             computer++
//             result="YOU LOSE"
//           }
//     }
//         if(choose ==2){
//     if( (opponent ==1 || opponent==3 ) ){
//           player ++ 
//          result="YOU WIN"
//           }
//           else{
//             computer++
//             result="YOU LOSE"
//           }
//     }
//         if(choose ==3){
//     if( (opponent ==1 || opponent==4 ) ){
//           player ++ 
//          result="YOU WIN"
//           }
//           else{
//             computer++
//             result="YOU LOSE"
//           }
//     }
//         if(choose ==4){
//     if( (opponent==0 || opponent==2 ) ){
//           player ++ 
//          result="YOU WIN"
//           }
//           else{
//             computer++
//             result="YOU LOSE"
//           }
//     }
//     if(choose==opponent){
//       computer--
//       result="DRAW"
//     }
//     document.querySelector("#showresult").innerText=result
//     document.querySelector("#playerchoice").className=`${opt[choose]}1 option`
//     document.querySelector("#computerchoice").className=`${opt[opponent]}1 option`
//     document.querySelector("#player").innerText="Player :"+player;
//     document.querySelector("#computer").innerText="Computer :"+computer;
// }

