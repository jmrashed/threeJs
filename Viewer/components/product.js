import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Texture
} from "three";

async function loadProduct(texture) {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 4, 2);

  // create a default (white) Basic material
  //const material = new MeshStandardMaterial({ color: "purple" });

  var face_textures = [];

  for (let i = 1; i < 7; i++) {
    face_textures.push(texture);
  }

  //const material = [new MeshBasicMaterial({ map: face_textures[0] }), new MeshBasicMaterial({ map: face_textures[1] }), new MeshBasicMaterial({ map: face_textures[2] }), new MeshBasicMaterial({ map: face_textures[3] }), new MeshBasicMaterial({ map: face_textures[4] }), new MeshBasicMaterial({ map: face_textures[5] })];
  const material = new MeshBasicMaterial({ map: face_textures[0] });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  //cube.rotation.set(1, -0.5, 0);

  return cube;
}

export { loadProduct };
