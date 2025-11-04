// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
let scene, camera, renderer, cube, tetra;

//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
function init() {
    scene = new THREE.Scene();

    const lightl = new THREE.DirectionalLight(0xffffff, 10);
    lightl.position.set(-4, 1, 15);
    scene.add(lightl);
    // const helperl = new THREE.DirectionalLightHelper(lightl, 5);
    // scene.add(helperl);


    const lightr = new THREE.DirectionalLight(0xffffff, 10);
    lightr.position.set(4, 1, 15);
    scene.add(lightr);

    // const helper = new THREE.DirectionalLightHelper(lightr, 5);
    // scene.add(helper);


    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry2 = new THREE.TetrahedronGeometry();
    const material2 = new THREE.MeshStandardMaterial({ color: 0x0000ff });

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });



    const texture = new THREE.TextureLoader().load('textures/lavatile.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });

    tetra = new THREE.Mesh(geometry2, material2);
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube, tetra);



    tetra.position.x = 3;
    camera.position.z = 5;
}


function animate() {
    requestAnimationFrame(animate);


    tetra.rotation.x += .01;
    tetra.rotation.y += .01;
    cube.rotation.x += .01;
    cube.rotation.y += .01;

    renderer.render(scene, camera);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models



loader.load('./assets/low-poly_trash_can.glb', function (glb) {
    const trash = glb.scene;
    scene.add(trash);
    trash.position.y = -2.5;
    trash.scale.set(.5, .5, .5);
})


loader.load('./assets/pipespwease.glb', function (glb) {
    const pipe = glb.scene;
    scene.add(pipe);
    pipe.position.y = -2.5;
    pipe.scale.set(.15, .15, .15);
})



// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


