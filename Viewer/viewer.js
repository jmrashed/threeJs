import { loadProduct } from "./components/product.js";
import { loadTexture } from "./components/texture.js";
import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/resizer.js";
import { Loop } from "./systems/loop.js";

let camera;
let controls;
let renderer;
let scene;
let loop;
let texture;

class Viewer {
	constructor(container) {
		camera = createCamera();
		renderer = createRenderer();
		scene = createScene();
		texture = loadTexture();

		loop = new Loop(camera, scene, renderer, texture);

		container.append(renderer.domElement);

		controls = createControls(camera, renderer.domElement);

		loop.updatables.push(controls);
		//loop.updatables.push(texture);

		camera.add(createLights());
		scene.add(camera);

		const resizer = new Resizer(container, camera, renderer);
	}

	async init() {
		const cube = await loadProduct(texture);

		controls.target.copy(cube.position);

		scene.add(cube);
	}

	render() {
		renderer.render(scene, camera);
	}

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}
}

export { Viewer };
