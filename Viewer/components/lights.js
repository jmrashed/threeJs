import { PointLight } from "three";

function createLights() {
	//const mainLight = new PointLight(0xffffff, 30);
	//mainLight.position.set(0, 4, 1);

	const mainLight = new PointLight(0xffffff, 350);
	mainLight.position.set(0, 0, 49);

	return mainLight;
}

export { createLights };
