/*
Scene, camera and renderer
*/
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 10.0);
camera.position.set(0, 0, 0.1);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*
Handle resize
*/
window.addEventListener('resize', function()
{
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

/*
Camera controls
*/
const orbitControls = new THREE.OrbitControls(camera, renderer.domElement)
orbitControls.maxDistance = 1.05;
orbitControls.minDistance = 0.1; // adjust according to texture quality
orbitControls.enablePan = false;
orbitControls.enableDamping = true;
orbitControls.rotateSpeed = -0.5; // inverted control when in sphere
orbitControls.autoRotate = true;
orbitControls.autoRotateSpeed = 0.5;

/*
Textures
*/
let skyTexture = new THREE.TextureLoader().load('./data/mwpan2_RGB_3600.fits.png') // default texture
const skySphereGeometry = new THREE.SphereBufferGeometry(1, 64, 64);
let skyMaterial = new THREE.MeshBasicMaterial({map: skyTexture, side: THREE.BackSide});
const skyMesh = new THREE.Mesh(skySphereGeometry, skyMaterial);
skyMesh.scale.set(-1, 1, 1) // texture inversion
scene.add(skyMesh);

/*
GUI
*/
const gui = new dat.GUI({autoPlace: true});
// auto rotate checkbox
gui.add(orbitControls, "autoRotate");
// texture selection
const files =
{
    file: "mwpan2_RGB_3600.fits.png",
    options : {
        "Deep Star 2020": "starmap_2020_4k_print.jpg",
        "Mellinger": "mwpan2_RGB_3600.fits.png",
        "Finkbeiner Halpha": "Halpha_map.fits.png"
    }
}
function loadFile()
{
    let skyTexture = new THREE.TextureLoader().load('./Data/'+ files.file) // la texture
    skyMaterial.map = skyTexture
}
gui.add(files, "file", files.options).onChange(loadFile);

/*
Renderer
*/
function update (t)
{
	orbitControls.update()
}

function render(t)
{
	renderer.render(scene, camera);
}

// t : time in milliseconds since first request
function mainloop(t)
{
    update(t);
    render(t);
    requestAnimationFrame(mainloop);
}

mainloop(0);
