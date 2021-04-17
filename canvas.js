'use strict'
var canvas = document.getElementById("game");
var pincel = canvas.getContext("2d");
document.addEventListener("keydown",teclaPulsada);
//Variables
const maxSize = 10;
var SquareSize = 20;
var posX = [0, 0, 0], posY = [0, 0, 0];
var movX = 0, movY = 0;
var saltos = 20;
var length = 5;
//Game
setInterval(game,1000/15);

function game(){
	for (let i = length-2; i >= 0; i--) {
		posY[i+1] = posY[i];
		posX[i+1] = posX[i];
	}
	if ( 0 != (movX+movY) ){
		posX[0] += movX;
		posY[0] += movY;
	}
	if (posX[0] < 0){
		posX[0] = 0;
	}
	if (posX[0] > canvas.width/SquareSize-1){
		posX[0] = canvas.width/SquareSize-1;
	}
	if (posY[0] < 0){
		posY[0] = 0;
	}
	if (posY[0] > canvas.height/SquareSize-1){
		posY[0] = canvas.height/SquareSize-1;
	}
	//Fondo
	pincel.fillStyle = "black";
	pincel.fillRect(0,0,canvas.width,canvas.height);
	//Jugador
	for (let i = 0; i < posY.length; i++) {
		pincel.fillStyle = "blue";
		pincel.fillRect(posX[i]*saltos,posY[i]*saltos,SquareSize-2,SquareSize-2);
	}
	// posX.unshift(posX.pop());
	// posY.unshift(posY.pop());
	//
}

function teclaPulsada(evento){
	switch(evento.keyCode){
		case 37: // <=
			movX = -1;
			movY = 0;
			break;
		case 38: // up
			movX = 0;
			movY = -1;
			break;
		case 39: // =>
			movX = 1;
			movY = 0;
			break;
		case 40: // down
			movX = 0;
			movY = 1;
			break;

	}
}