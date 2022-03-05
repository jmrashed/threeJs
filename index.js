import { fabric } from "fabric";
import { Viewer } from "./Viewer/viewer.js";

var canvas;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function main() {
	canvas = new fabric.Canvas("designCanvas", {
		hoverCursor: "pointer",
		selectionBorderColor: "blue",
		controlsAboveOverlay: true,
		uniScaleTransform: true,
		enableRetinaScaling: false,
		preserveObjectStacking: true,
	});

	canvas.setWidth(830).setHeight(901).setBackgroundColor("#ffffff");

	var designText = new fabric.Textbox("Hello world from mars", {
		top: 400,
		left: 200,
	});

	canvas.add(designText).setActiveObject(designText);
	console.log("Before");
	await delay(2000);
	console.log("Waited 2s");

	const container = document.querySelector("#scene-container");

	// create a new world
	const viewer = new Viewer(container);

	// complete async tasks
	await viewer.init();

	// start the animation loop
	viewer.start();
}

main().catch((err) => {
	console.error(err);
});
