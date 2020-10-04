'use strict'
var canvas = document.getElementById("game");
var pincel = canvas.getContext("2d");
document.addEventListener("keydown",teclaPulsada);
//Variables
var SquareSize = 20;
var posX = 0, posY = 0;
var movX = 0, movY = 0;
var saltos = 20;
//Game
setInterval(game,1000/15);

function game(){
	if ((movX+movY)!= 0){
		posX += movX;
		posY += movY;
		movX = 0;
		movY = 0;
	}
	
	if (posX < 0){
		posX = 0;
	}
	if (posX > canvas.width/SquareSize-1){
		posX = canvas.width/SquareSize-1;
	}
	if (posY < 0){
		posY = 0;
	}
	if (posY > canvas.height/SquareSize-1){
		posY = canvas.height/SquareSize-1;
	}

	//Fondo
	pincel.fillStyle = "black";
	pincel.fillRect(0,0,canvas.width,canvas.height);
	//Jugador
	pincel.fillStyle = "blue";
	pincel.fillRect(posX*saltos,posY*saltos,SquareSize,SquareSize);
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