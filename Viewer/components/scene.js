import { Color, Scene } from "three";

function createScene() {
	const scene = new Scene();

	scene.background = new Color("#e5e5e5");

	return scene;
}

export { createScene };
