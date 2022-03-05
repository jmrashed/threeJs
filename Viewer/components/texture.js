import { Texture } from "three";

function loadTexture() {
	var fabricCanvas = document.getElementById("designCanvas");

	var canvas = document.createElement("canvas");
	canvas.width = 200;
	canvas.height = 400;

	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(fabricCanvas, 200, 400, 50, 50, 0, 0, 50, 50);
	console.log("here");
	var texture = new Texture(fabricCanvas);

	return texture;
}

export { loadTexture };
