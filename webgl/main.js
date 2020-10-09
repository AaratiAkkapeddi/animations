var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000);
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
loader.repeat.set( 22, 1 );
loader.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader.magFilter = THREE.NearestFilter;
loader.minFilter = THREE.LinearMipMapLinearFilter;


  const material = new THREE.MeshBasicMaterial({
    map: loader,
    side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });
const loader2 = new THREE.TextureLoader().load( "inspire.png" );
loader2.wrapS = THREE.RepeatWrapping;
loader2.wrapT = THREE.RepeatWrapping;
loader2.offset.set(0,-0.2);
loader2.repeat.set( 22, 1 );
loader2.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader2.magFilter = THREE.NearestFilter;
loader2.minFilter = THREE.LinearMipMapLinearFilter;

  const material2 = new THREE.MeshBasicMaterial({
    map: loader2,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });
const loader3 = new THREE.TextureLoader().load( "compose.png" );
loader3.wrapS = THREE.RepeatWrapping;
loader3.wrapT = THREE.RepeatWrapping;
loader3.offset.set(0,-0.2);
loader3.repeat.set( 22, 1 );
loader3.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader3.magFilter = THREE.NearestFilter;
loader3.minFilter = THREE.LinearMipMapLinearFilter;
  const material3 = new THREE.MeshBasicMaterial({
    map: loader3,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });
const loader4 = new THREE.TextureLoader().load( "empathize.png" );
loader4.wrapS = THREE.RepeatWrapping;
loader4.wrapT = THREE.RepeatWrapping;
loader4.offset.set(0,-0.2);
loader4.repeat.set( 20, 1 );
loader4.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader4.magFilter = THREE.NearestFilter;
loader4.minFilter = THREE.LinearMipMapLinearFilter;
  const material4 = new THREE.MeshBasicMaterial({
    map: loader4,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });



const loader5 = new THREE.TextureLoader().load( "illuminate.png" );
loader5.wrapS = THREE.RepeatWrapping;
loader5.wrapT = THREE.RepeatWrapping;
loader5.offset.set(0,-0.2);
loader5.repeat.set( 20, 1 );
loader5.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader5.magFilter = THREE.NearestFilter;
loader5.minFilter = THREE.LinearMipMapLinearFilter;
  const material5 = new THREE.MeshBasicMaterial({
    map: loader5,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader6 = new THREE.TextureLoader().load( "decipher.png" );
loader6.wrapS = THREE.RepeatWrapping;
loader6.wrapT = THREE.RepeatWrapping;
loader6.offset.set(0,-0.2);
loader6.repeat.set( 20, 1 );
loader6.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader6.magFilter = THREE.NearestFilter;
loader6.minFilter = THREE.LinearMipMapLinearFilter;
  const material6 = new THREE.MeshBasicMaterial({
    map: loader6,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader7 = new THREE.TextureLoader().load( "wonder.png" );
loader7.wrapS = THREE.RepeatWrapping;
loader7.wrapT = THREE.RepeatWrapping;
loader7.offset.set(0,-0.2);
loader7.repeat.set( 20, 1 );
loader7.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader7.magFilter = THREE.NearestFilter;
loader7.minFilter = THREE.LinearMipMapLinearFilter;
  const material7 = new THREE.MeshBasicMaterial({
    map: loader7,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader8 = new THREE.TextureLoader().load( "observe.png" );
loader8.wrapS = THREE.RepeatWrapping;
loader8.wrapT = THREE.RepeatWrapping;
loader8.offset.set(0,-0.2);
loader8.repeat.set( 20, 1 );
loader8.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader8.magFilter = THREE.NearestFilter;
loader8.minFilter = THREE.LinearMipMapLinearFilter;
  const material8 = new THREE.MeshBasicMaterial({
    map: loader8,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader9 = new THREE.TextureLoader().load( "research.png" );
loader9.wrapS = THREE.RepeatWrapping;
loader9.wrapT = THREE.RepeatWrapping;
loader9.offset.set(0,-0.2);
loader9.repeat.set( 20, 1 );
loader9.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader9.magFilter = THREE.NearestFilter;
loader9.minFilter = THREE.LinearMipMapLinearFilter;
  const material9 = new THREE.MeshBasicMaterial({
    map: loader9,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader10 = new THREE.TextureLoader().load( "discuss.png" );
loader10.wrapS = THREE.RepeatWrapping;
loader10.wrapT = THREE.RepeatWrapping;
loader10.offset.set(0,-0.2);
loader10.repeat.set( 20, 1 );
loader10.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader10.magFilter = THREE.NearestFilter;
loader10.minFilter = THREE.LinearMipMapLinearFilter;
  const material10 = new THREE.MeshBasicMaterial({
    map: loader10,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });


const loader11 = new THREE.TextureLoader().load( "intrigue.png" );
loader11.wrapS = THREE.RepeatWrapping;
loader11.wrapT = THREE.RepeatWrapping;
loader11.offset.set(0,-0.2);
loader11.repeat.set( 20, 1 );
loader11.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader11.magFilter = THREE.NearestFilter;
loader11.minFilter = THREE.LinearMipMapLinearFilter;
  const material11 = new THREE.MeshBasicMaterial({
    map: loader11,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader12 = new THREE.TextureLoader().load( "challenge.png" );
loader12.wrapS = THREE.RepeatWrapping;
loader12.wrapT = THREE.RepeatWrapping;
loader12.offset.set(0,-0.2);
loader12.repeat.set( 20, 1 );
loader12.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader12.magFilter = THREE.NearestFilter;
loader12.minFilter = THREE.LinearMipMapLinearFilter;
  const material12 = new THREE.MeshBasicMaterial({
    map: loader12,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader13 = new THREE.TextureLoader().load( "explore.png" );
loader13.wrapS = THREE.RepeatWrapping;
loader13.wrapT = THREE.RepeatWrapping;
loader13.offset.set(0,-0.2);
loader13.repeat.set( 20, 1 );
loader13.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader13.magFilter = THREE.NearestFilter;
loader13.minFilter = THREE.LinearMipMapLinearFilter;
  const material13 = new THREE.MeshBasicMaterial({
    map: loader13,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader14 = new THREE.TextureLoader().load( "imagine.png" );
loader14.wrapS = THREE.RepeatWrapping;
loader14.wrapT = THREE.RepeatWrapping;
loader14.offset.set(0,-0.2);
loader14.repeat.set( 20, 1 );
loader14.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader14.magFilter = THREE.NearestFilter;
loader14.minFilter = THREE.LinearMipMapLinearFilter;
  const material14 = new THREE.MeshBasicMaterial({
    map: loader14,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader15 = new THREE.TextureLoader().load( "provoke.png" );
loader15.wrapS = THREE.RepeatWrapping;
loader15.wrapT = THREE.RepeatWrapping;
loader15.offset.set(0,-0.2);
loader15.repeat.set( 20, 1 );
loader15.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader15.magFilter = THREE.NearestFilter;
loader15.minFilter = THREE.LinearMipMapLinearFilter;
  const material15 = new THREE.MeshBasicMaterial({
    map: loader15,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader16 = new THREE.TextureLoader().load( "unlearn.png" );
loader16.wrapS = THREE.RepeatWrapping;
loader16.wrapT = THREE.RepeatWrapping;
loader16.offset.set(0,-0.2);
loader16.repeat.set( 20, 1 );
loader16.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader16.magFilter = THREE.NearestFilter;
loader16.minFilter = THREE.LinearMipMapLinearFilter;
  const material16 = new THREE.MeshBasicMaterial({
    map: loader16,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader17 = new THREE.TextureLoader().load( "debate.png" );
loader17.wrapS = THREE.RepeatWrapping;
loader17.wrapT = THREE.RepeatWrapping;
loader17.offset.set(0,-0.2);
loader17.repeat.set( 20, 1 );
loader17.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader17.magFilter = THREE.NearestFilter;
loader17.minFilter = THREE.LinearMipMapLinearFilter;
  const material17 = new THREE.MeshBasicMaterial({
    map: loader17,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });
const loader18 = new THREE.TextureLoader().load( "reflect.png" );
loader18.wrapS = THREE.RepeatWrapping;
loader18.wrapT = THREE.RepeatWrapping;
loader18.offset.set(0,-0.2);
loader18.repeat.set( 20, 1 );
loader18.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader18.magFilter = THREE.NearestFilter;
loader18.minFilter = THREE.LinearMipMapLinearFilter;
  const material18 = new THREE.MeshBasicMaterial({
    map: loader18,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

var geometry = new THREE.SphereGeometry(3, 60, 60, 0, Math.PI * 2, 0, Math.PI * 2);

var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material2);
var cube3 = new THREE.Mesh(geometry, material3);
var cube4 = new THREE.Mesh(geometry, material4);
var cube5 = new THREE.Mesh(geometry, material5);
var cube6 = new THREE.Mesh(geometry, material6);
var cube7 = new THREE.Mesh(geometry, material7);
var cube8 = new THREE.Mesh(geometry, material8);
var cube9 = new THREE.Mesh(geometry, material9);
var cube10 = new THREE.Mesh(geometry, material10);
var cube11 = new THREE.Mesh(geometry, material11);
var cube12 = new THREE.Mesh(geometry, material12);
var cube13 = new THREE.Mesh(geometry, material13);
var cube14 = new THREE.Mesh(geometry, material14);
var cube15 = new THREE.Mesh(geometry, material15);
var cube16 = new THREE.Mesh(geometry, material16);
var cube17 = new THREE.Mesh(geometry, material17);
var cube18 = new THREE.Mesh(geometry, material18);
scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);
scene.add(cube5);
scene.add(cube6);
scene.add(cube7);
scene.add(cube8);
scene.add(cube9);
scene.add(cube10);
scene.add(cube11);
scene.add(cube12);
scene.add(cube13);
scene.add(cube14);
scene.add(cube15);
scene.add(cube16);
scene.add(cube17);
scene.add(cube18);


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
                toRadians(deltaMove.y * 1 + 1),
                toRadians(deltaMove.x *1 - 1),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion2 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 170),
                toRadians(deltaMove.x  * 1 - 10),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion3 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 160),
                toRadians(deltaMove.x * 1 - 20),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion4 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 150),
                toRadians(deltaMove.x * 1 - 30 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion5 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 140),
                toRadians(deltaMove.x * 1 - 40 ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion6 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 130),
                toRadians(deltaMove.x * 1 - 50  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion7 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 120),
                toRadians(deltaMove.x * 1 - 60  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion8 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 110),
                toRadians(deltaMove.x * 1 - 70  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion9 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 100),
                toRadians(deltaMove.x * 1 - 80 ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion10 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 90),
                toRadians(deltaMove.x * 1 - 90  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion11 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 80),
                toRadians(deltaMove.x * 1 - 100  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion12 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 70),
                toRadians(deltaMove.x * 1 - 110  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion13 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 60),
                toRadians(deltaMove.x * 1 - 120 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion14 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 50),
                toRadians(deltaMove.x * 1 - 130 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion15 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 40),
                toRadians(deltaMove.x * 1 - 140 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion16 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 30),
                toRadians(deltaMove.x * 1 - 150 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion17 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 + 20),
                toRadians(deltaMove.x * 1 - 160 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion18 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1 +10),
                toRadians(deltaMove.x * 1 - 170 ),
                0,
                'XYZ'
            ));
        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
        cube2.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
        cube3.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
        cube4.quaternion.multiplyQuaternions(deltaRotationQuaternion4, cube.quaternion);
  		cube5.quaternion.multiplyQuaternions(deltaRotationQuaternion5, cube.quaternion);
  		cube6.quaternion.multiplyQuaternions(deltaRotationQuaternion6, cube.quaternion);
  		cube7.quaternion.multiplyQuaternions(deltaRotationQuaternion7, cube.quaternion);
  		cube8.quaternion.multiplyQuaternions(deltaRotationQuaternion8, cube.quaternion);
  		cube9.quaternion.multiplyQuaternions(deltaRotationQuaternion9, cube.quaternion);
  		cube10.quaternion.multiplyQuaternions(deltaRotationQuaternion10, cube.quaternion);
  		cube11.quaternion.multiplyQuaternions(deltaRotationQuaternion11, cube.quaternion);
  		cube12.quaternion.multiplyQuaternions(deltaRotationQuaternion12, cube.quaternion);
  		cube13.quaternion.multiplyQuaternions(deltaRotationQuaternion13, cube.quaternion);
  		cube14.quaternion.multiplyQuaternions(deltaRotationQuaternion14, cube.quaternion);
  		cube15.quaternion.multiplyQuaternions(deltaRotationQuaternion15, cube.quaternion);
  		cube16.quaternion.multiplyQuaternions(deltaRotationQuaternion16, cube.quaternion);
  		cube17.quaternion.multiplyQuaternions(deltaRotationQuaternion17, cube.quaternion);
  		cube18.quaternion.multiplyQuaternions(deltaRotationQuaternion18, cube.quaternion);
  
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