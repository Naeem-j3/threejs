// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import './style.css';
// import * as dat from 'dat.gui';
//  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
//   import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
//   import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//   import Parachutist from './Parachutist'
// import Vector from './vector';

// //variable
// const clock = new THREE.Clock();
// // تحديد المعلومات الأساسية
// let weight = 70; // الوزن بالكيلوغرام
// let diameter = 2; // قطر الشخص بالأمتار
// let airResistance = 0.5; // مقاومة الهواء
// let gravitationalPull = 9.81; // ثابت الجاذبية
// let density = 1.225; // كثافة الهواء
// let Cd = 0.5; // معامل السحب
// var height=1000
// var deltaTime =0
// let lastTime = Date.now();
// var surfaceArea = 1 ;
// let Fd 

//  // تحديد الشروط الابتدائية
// let initialHeight = 1000; // الارتفاع الابتدائي بالأمتار
// let initialVelocity =new Vector(0,0,0); // السرعة الابتدائية بالأمتار في الثانية
// let pos = new Vector(0,0,initialHeight);
// // إنشاء كائن مظلي
// let parachutist = new Parachutist(weight, diameter, airResistance, gravitationalPull, density, Cd);
 
// function updateMotion(deltaTime) {
//   // حساب معدل الانخفاض
//   const rateOfDescent = parachutist.calculateDescentRate();

//   // حساب القوى المؤثرة
//   let cosAlpha = Math.cos(0); // زاوية الحركة الأفقية
//   let cosBeta = Math.cos(0); // زاوية الحركة الرأسية
//   let sinAlpha = Math.sin(0); // زاوية الحركة الأفقية
//   let sinBeta = Math.sin(0); // زاوية الحركة الرأسية
//   let thrustForceX = parachutist.calculateThrustForceX(0, Cd, cosAlpha);
//   let thrustForceY = parachutist.calculateThrustForceY(initialVelocity, Cd, cosBeta);
//   let thrustForceZ = parachutist.calculateThrustForceZ(0, 0, Cd, sinAlpha, sinBeta);

//   // حساب التسارع
//   let Fg = new Vector(0,0,-weight * gravitationalPull); // القوة الجاذبية
//   // let Fd = Math.sqrt(Math.pow(thrustForceX, 2) + Math.pow(thrustForceY, 2) + Math.pow(thrustForceZ, 2)); 
//   // console.log (Fd)
// //   let Fd = Math.abs(thrustForceY);
// // console.log(Fd);

//       Fd =new Vector(0,0,-0.5 * parachutist.airResistance* initialVelocity.z * initialVelocity.z * parachutist.Cd * surfaceArea) 
   
//   // قوة المقاومة
   
//   // = parachutist.calculateAcceleration(Fg, Fd);
//  let acceleration =  Fg.subtract(Fd).divide(weight);
 
//   // حساب السرعة والارتفاع
//   let velocity = initialVelocity.add(acceleration).multiply(0.01);
//     console.log ("v=",Fd.z)
//   let height =    initialHeight + velocity.z *0.02
 
//   // تحديث الحركة الحالية
//   initialHeight = height;
//   initialVelocity.z = velocity.z;
//   pos.z=initialHeight
  
// }

// // Texture
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('color.jpg');
// texture.repeat.x = 4000;
// texture.repeat.y = 4000;
// texture.wrapS = THREE.MirroredRepeatWrapping;
// texture.wrapT = THREE.MirroredRepeatWrapping;


// // Scene
// const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0xffffff, 0.1, 40000); 
// scene.background = new THREE.CubeTextureLoader()
// 	.load( [
//         'sky/px.jpg',
//         'sky/nx.jpg',
//         'sky/py.jpg',
//         'sky/ny.jpg',
//         'sky/pz.jpg',
//         'sky/nz.jpg'
// 	] );

// // Add event listener to the document
// document.addEventListener('keydown', function(event) {
//   // Check if the pressed key is the spacebar (keyCode 32)
//   if (event.key === 'a' || event.key === 'A') {
//     surfaceArea=3.14*9
//   }
// });
// // GUI
// //const gui = new dat.GUI();

// // Geometry
// const bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
// const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// bodyMaterial.roughness = 0.4;
// const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
// scene.add(body);
// body.position.y = pos.z;
// //gui.add(body.position,'y',0,4000,0.1);
// //Ground
// const groundGeometry = new THREE.PlaneGeometry(100000, 100000, 10, 10);
// const groundMaterial = new THREE.MeshBasicMaterial({ map: texture });
// const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// scene.add(ground);
// ground.rotation.x = -Math.PI / 2;



// // Helper axes
// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
// camera.position.z = 5;
// camera.position.y = body.position.y + 5; // Adjust the camera's initial position as per your requirement
// camera.near = body.position.y - 5; // Adjust the near clipping plane based on the body's height
// camera.far = body.position.y + 10; // Adjust the far clipping plane based on the body's height
// camera.lookAt(body.position);

// // Renderer
// const canvas = document.querySelector('.webgl');
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Camera Controls
//  let controls;
// controls = new OrbitControls(camera, canvas);
// controls.target.copy(body.position);

// // const heightNumberElement = document.getElementById('heightNumber');
// // const velocityNumberElement = document.getElementById('velocityNumber');
// // const fdNumberElement = document.getElementById('dragForceNumber');
// var forceDrag=0

// let time=Date.now()
// // Animate
// const animate = () => {
//   requestAnimationFrame(animate);
//   deltaTime +=0.01
//   if( pos.z > 1 ){
//   updateMotion(deltaTime);
//   body.position.y=pos.z}

//   else {
//     initialVelocity.z = 0;
//     Fd.z = 0
//     initialHeight =0
//   }
   
// //  forceDrag = 0.5 * p.density* velocity * velocity * 1.2* p.surfaceArea;
  
//      // console.log('fc = ', velocity)
//     // console.log(pos)
//    // Update camera position
//   camera.position.y = body.position.y + 10; // Adjust the camera's position as per your requirement

//   // Look at the body
//   camera.lookAt(body.position);
// controls.target.copy(body.position);




// // heightNumberElement.innerText = `Height: ${initialHeight.toFixed(2)}`; // Update the height number with the current body position
// // velocityNumberElement.innerText = `Velocity: ${initialVelocity.z.toFixed(2)}`;
// //   fdNumberElement.innerText = `Fd: ${Fd.z.toFixed(2)}`;
//   renderer.render(scene, camera);
// };

// animate();

////
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
import * as dat from 'dat.gui';
 import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import Parachutist from './Parachutist'
import Vector from './vector';

//variable
const clock = new THREE.Clock();
// تحديد المعلومات الأساسية
let weight = 70; // الوزن بالكيلوغرام

let airResistance = 0.5; // مقاومة الهواء
let gravitationalPull = 9.81; // ثابت الجاذبية
let dim=3
 var height=1000
var deltaTime =0
let lastTime = Date.now();
var surfaceArea =0.5 ;
let fd 
let acceleration

 // تحديد الشروط الابتدائية
let initialHeight = 1000; // الارتفاع الابتدائي بالأمتار
let initialVelocity = 0; // السرعة الابتدائية بالأمتار في الثانية
let pos = initialHeight;
// إنشاء كائن مظلي
var parachutist


// Function to start the simulation
function startSimulation() {
  // Get the values from the input fields
  weight = parseFloat(document.getElementById('weightInput').value);
  surfaceArea = parseFloat(document.getElementById('surfaceAreaInput').value);
  airResistance = parseFloat(document.getElementById('airResistanceInput').value);
  gravitationalPull = parseFloat(document.getElementById('gravitationalPullInput').value);
 dim=parseFloat(document.getElementById('dimInput').value);
  // Reset the initial height and velocity
  initialHeight = parseFloat(document.getElementById('heightInput').value);
  initialVelocity = 0;
  document.getElementById('controls').style.display = 'none';
   parachutist = new Parachutist(weight, surfaceArea, airResistance, gravitationalPull,dim);
  // Start the animation loop
  animate();
}

// Event listener for the 'W' key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'w' || event.key === 'W' ||  event.key === 'ص') {
    startSimulation();
  }
});


// Texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('color.jpg');
texture.repeat.x = 4000;
texture.repeat.y = 4000;
texture.wrapS = THREE.MirroredRepeatWrapping;
texture.wrapT = THREE.MirroredRepeatWrapping;


// Scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 0.1, 40000); 
scene.background = new THREE.CubeTextureLoader()
	.load( [
        'sky/px.jpg',
        'sky/nx.jpg',
        'sky/py.jpg',
        'sky/ny.jpg',
        'sky/pz.jpg',
        'sky/nz.jpg'
	] );
  const loader = new GLTFLoader();

  loader.load('human/scene.gltf', function (gltf) {
      // This function is called when the GLTF model is loaded
  
      // Traverse through the loaded model's meshes and assign textures
      gltf.scene.traverse(function (node) {
          if (node.isMesh) {
              // Load the texture
              const textureLoader = new THREE.TextureLoader();
              textureLoader.load('human/textures/Zombie_baseColor.jpg', function (texture) {
                  // Create a material with the loaded texture
                  const material = new THREE.MeshStandardMaterial({
                      map: texture // Assign the texture to the 'map' property
                      // You can also set other material properties like 'roughness', 'metalness', etc. here
                  });
  
                  // Assign the material to the mesh
                  node.material = material;
              });
          }
      });
  
      // Add the modified model to the scene
      scene.add(gltf.scene);
  }, undefined, function (error) {
      console.error(error);
  });
  
// Add event listener to the document
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is the spacebar (keyCode 32)
  if (event.key === 'a' || event.key === 'A') {
    parachutist.surfaceArea=3.14*parachutist.dim*parachutist.dim 
  }
});
// GUI
const gui = new dat.GUI();

// Geometry
const bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
bodyMaterial.roughness = 0.4;
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);
body.position.y = pos;
gui.add(body.position,'y',0,4000,0.1)
//Ground
const groundGeometry = new THREE.PlaneGeometry(100000, 100000, 10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({ map: texture });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(ground);
ground.rotation.x = -Math.PI / 2;



// Helper axes
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.z = 5;
camera.position.y = body.position.y + 5; // Adjust the camera's initial position as per your requirement
camera.near = body.position.y - 5; // Adjust the near clipping plane based on the body's height
camera.far = body.position.y + 10; // Adjust the far clipping plane based on the body's height
camera.lookAt(body.position);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Camera Controls
 let controls;
controls = new OrbitControls(camera, canvas);
controls.target.copy(body.position);

const heightNumberElement = document.getElementById('heightNumber');
const velocityNumberElement = document.getElementById('velocityNumber');
const fdNumberElement = document.getElementById('dragForceNumber');
const accelerationElement = document.getElementById('accelerationNumber');
var forceDrag=0

let time=Date.now()
 
function updateMotion(deltaTime) {
  // حساب معدل الانخفاض
  const rateOfDescent = parachutist.calculateDescentRate();

  // حساب القوى المؤثرة
//   let cosAlpha = Math.cos(0); // زاوية الحركة الأفقية
//   let cosBeta = Math.cos(0); // زاوية الحركة الرأسية
//   let sinAlpha = Math.sin(0); // زاوية الحركة الأفقية
//   let sinBeta = Math.sin(0); // زاوية الحركة الرأسية
//   let thrustForceX = parachutist.calculateThrustForceX(0, Cd, cosAlpha);
//   let thrustForceY = parachutist.calculateThrustForceY(initialVelocity, Cd, cosBeta);
//   let thrustForceZ = parachutist.calculateThrustForceZ(0, 0, Cd, sinAlpha, sinBeta);
// let dd=new Vector(thrustForceX,thrustForceY,thrustForceZ)
  // حساب التسارع
  let Fg = parachutist.fg; // القوة الجاذبية
  // let Fd = Math.sqrt(Math.pow(thrustForceX, 2) + Math.pow(thrustForceY, 2) + Math.pow(thrustForceZ, 2)); 
  // console.log (Fd)
//   let Fd = Math.abs(thrustForceY);
// console.log(Fd);

     let Fd =parachutist.fd(initialVelocity)
    
  // قوة المقاومة
  acceleration = parachutist.calculateAcceleration(Fg, Fd);

  // حساب السرعة والارتفاع
  let velocity = initialVelocity + acceleration * 0.01;
    console.log ("v=",velocity)
  let height =    initialHeight - velocity*0.02
 
  // تحديث الحركة الحالية
  initialHeight = height;
  initialVelocity = velocity;
  pos = initialHeight
  fd = Fd
}
// Animate
const animate = () => {
  requestAnimationFrame(animate);
  deltaTime +=0.01
  if( (pos > 1 )){
  updateMotion(deltaTime);
  body.position.y=pos}

  else {
    initialVelocity = 0;
    fd = 0
    initialHeight =0
    acceleration=0
  }
   
//  forceDrag = 0.5 * p.density* velocity * velocity * 1.2* p.surfaceArea;
  
     // console.log('fc = ', velocity)
    // console.log(pos)
   // Update camera position
  camera.position.y = body.position.y + 10; // Adjust the camera's position as per your requirement

  // Look at the body
  camera.lookAt(body.position);
controls.target.copy(body.position);




heightNumberElement.innerText = `Height: ${initialHeight.toFixed(2)}`; // Update the height number with the current body position
velocityNumberElement.innerText = `Velocity: ${initialVelocity.toFixed(2)}`;
  fdNumberElement.innerText = `Fd: ${fd.toFixed(2)}`;
  accelerationElement.innerText = `accelration: ${acceleration.toFixed(2)}`;
  renderer.render(scene, camera);
};






