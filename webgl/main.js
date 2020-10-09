var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);
function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 700);
renderer.sortObjects = false;
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader().load( "motivate.png" );
loader.wrapS = THREE.RepeatWrapping;
loader.wrapT = THREE.RepeatWrapping;
loader.offset.set(0,-0.2);
loader.repeat.set( 12, 1 );

  const material = new THREE.MeshBasicMaterial({
    map: loader,
    transparent: true, opacity: 1,alphaTest: 0.5
  });
const loader2 = new THREE.TextureLoader().load( "inspire.png" );
loader2.wrapS = THREE.RepeatWrapping;
loader2.wrapT = THREE.RepeatWrapping;
loader2.offset.set(0,-0.2);
loader2.repeat.set( 12, 1 );

  const material2 = new THREE.MeshBasicMaterial({
    map: loader2,
    transparent: true, opacity: 1,alphaTest: 0.5
  });
const loader3 = new THREE.TextureLoader().load( "compose.png" );
loader3.wrapS = THREE.RepeatWrapping;
loader3.wrapT = THREE.RepeatWrapping;
loader3.offset.set(0,-0.2);
loader3.repeat.set( 12, 1 );

  const material3 = new THREE.MeshBasicMaterial({
    map: loader3,
    transparent: true, opacity: 1,alphaTest: 0.5
  });
var geometry = new THREE.SphereGeometry(3, 70, 60, 0, Math.PI * 2, 0, Math.PI * 2);
var geometry2 = new THREE.SphereGeometry(3, 70, 60, 0, Math.PI * 2, 0, Math.PI * 2);
var geometry3 = new THREE.SphereGeometry(3, 70, 60, 0, Math.PI * 2, 0, Math.PI * 2);
// var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.rotation.y = 0.9;
var cube3 = new THREE.Mesh(geometry3, material3);
cube3.rotation.x = 0.9;
scene.add(cube);
scene.add(cube2);
scene.add(cube3);

/* */
var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};
$(renderer.domElement).on('mousedown', function(e) {
    isDragging = true;
})
.on('mousemove', function(e) {
    //console.log(e);
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };


            
        var deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion2 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1+100),
                toRadians(deltaMove.x * 1+100),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion3 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1+200),
                toRadians(deltaMove.x * 1+200),
                0,
                'XYZ'
            ));
        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
        cube2.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
        cube3.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});
/* */

$(document).on('mouseup', function(e) {
    isDragging = false;
});

camera.position.z = 10;
var render = function () {
    requestAnimationFrame(render);

    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();