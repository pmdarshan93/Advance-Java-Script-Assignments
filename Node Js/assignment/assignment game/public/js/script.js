const clientSocket = io();
let joinRoomId = $('#joinRoomId');
let roomId;
let mode;
let menu = $('#menu');
let gameContent = $('#gameContent');

// ── Create Room 
$('#createRoom').on('submit', (e) => {
    e.preventDefault();
    clientSocket.emit('createRoom');
});

clientSocket.on('roomId', (id) => {
    roomId = id.toString();
    $('#ownRoomId').html('Room ID: <strong>' + roomId );

});

$('#btnEnterRoom').on('click', () => {
    mode = 2;
    menu.addClass('hide');
    gameContent.removeClass('hide');
    $('#showResult').text('Waiting for opponent to join…');
    setButtonsEnabled(false);
});

clientSocket.on('opponentJoined', () => {
    $('#showResult').text('Opponent joined! Make your choice.');
    setButtonsEnabled(true);
});

// ── Join Room 
$('#joinRoom').on('submit', (e) => {
    e.preventDefault();
    let val = joinRoomId.val().trim();
    if (!val) return;
    clientSocket.emit('joinRoom', val);
});

clientSocket.on('joinedRoom', (id) => {
    roomId = id.toString();
    mode = 2;
    menu.addClass('hide');
    gameContent.removeClass('hide');
    $('#showResult').text('Room joined! Make your choice.');
    setButtonsEnabled(true);
});

clientSocket.on('roomFull', () => {
    alert('Room is full! Try another Room ID.');
});

clientSocket.on('roomNotFound', () => {
    alert('Room not found! Check the Room ID and try again.');
});

clientSocket.on('opponentLeft', () => {
    $('#showResult').text('Opponent disconnected.');
    setButtonsEnabled(false);
});

// ── VS com
$('#vsComputer').on('click', () => {
    mode = 1;
    menu.addClass('hide');
    gameContent.removeClass('hide');
    $('#showResult').text('Pick your choice!');
    setButtonsEnabled(true);
});

// ── Game variables
const opt = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
let player = 0, computer = 0;
let myPendingChoice = null;

const winsAgainst = { 0:[2,3], 1:[0,4], 2:[1,3], 3:[1,4], 4:[0,2] };

let result        = $('#showResult');
let playerChoice  = $('#playerChoice');
let computerChoice= $('#computerChoice');
let playerScore   = $('#playerScore');
let computerScore = $('#computerScore');

// ── Click handler
$('#rock, #scissor, #paper, #spock, #lizard').on('click', (e) => {
    let myIdx = opt.indexOf(e.target.id);
    if (mode === 1) {
        resolveRound(myIdx, Math.floor(Math.random() * 5));
    } else {
        myPendingChoice = myIdx;
        setButtonsEnabled(false);
        result.text('Waiting for opponent…');
        clientSocket.emit('myChoice', [roomId, myIdx]);
    }
});

clientSocket.on('opponentOption', (oppIdx) => {
    if (myPendingChoice !== null) {
        resolveRound(myPendingChoice, oppIdx);
        myPendingChoice = null;
        setButtonsEnabled(true);
    }
});


function resolveRound(myIdx, oppIdx) {
    let txt;
    if (myIdx === oppIdx) {
        txt = 'DRAW';
    } else if (winsAgainst[myIdx].includes(oppIdx)) {
        player++;
        txt = 'YOU WIN';
    } else {
        computer++;
        txt = 'YOU LOSE';
    }
    result.text(txt);
    playerChoice.attr('class',   `${opt[myIdx]}1 option`);
    computerChoice.attr('class', `${opt[oppIdx]}1 option`);
    playerScore.text('Player Score : ' + player);
    computerScore.text('Opponent Score : ' + computer);
}

function setButtonsEnabled(on) {
    $('#parent .option').css({ opacity: on ? '1' : '0.4', pointerEvents: on ? 'auto' : 'none' });
}
