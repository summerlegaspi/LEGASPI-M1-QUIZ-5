const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

const geometries = [];

const box = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshPhongMaterial({ color: 0xff6b6b })
);
box.position.set(-9, 7, 0);
scene.add(box);
geometries.push(box);

const cone = new THREE.Mesh(
    new THREE.ConeGeometry(1.5, 3, 8),
    new THREE.MeshPhongMaterial({ color: 0x4ecdc4 })
);
cone.position.set(-9, -7, 0);
scene.add(cone);
geometries.push(cone);

const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 3, 16),
    new THREE.MeshPhongMaterial({ color: 0x45b7d1 })
);
cylinder.position.set(0, 0, 0);
scene.add(cylinder);
geometries.push(cylinder);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    new THREE.MeshPhongMaterial({ color: 0x96ceb4 })
);
sphere.position.set(3, 7, 0);
scene.add(sphere);
geometries.push(sphere);


const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.5, 16, 100),
    new THREE.MeshPhongMaterial({ color: 0xffbe76 })
);
torus.position.set(6, -7, 0);
scene.add(torus);
geometries.push(torus);

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);

    box.position.y = 7 + Math.sin(Date.now() * 0.002) * 2;
    box.rotation.x += 0.01;

    cone.rotation.x += 0.02;
    cone.rotation.y += 0.01;

    const scale = 1 + Math.sin(Date.now() * 0.003) * 0.3;
    cylinder.scale.set(scale, scale, scale);

    sphere.position.x = 3 + Math.cos(Date.now() * 0.001) * 2;
    sphere.position.z = Math.sin(Date.now() * 0.001) * 2;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.008;
    torus.rotation.z += 0.005;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();