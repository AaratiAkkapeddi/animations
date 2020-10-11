var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000);
var camera = new THREE.PerspectiveCamera(50, 500 / 450, 0.1, 1000);
function toRadians(angle) {
	return angle * (Math.PI / 180);
}
function rand(min, max) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
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
loader.offset.set(0,-0.25);
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
loader2.offset.set(0,-0.25);
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
loader3.offset.set(0,-0.25);
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
loader4.offset.set(0,-0.25);
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
loader5.offset.set(0,-0.25);
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
loader6.offset.set(0,-0.25);
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
loader7.offset.set(0,-0.25);
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
loader8.offset.set(0,-0.25);
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
loader9.offset.set(0,-0.25);
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
loader10.offset.set(0,-0.25);
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
loader11.offset.set(0,-0.25);
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
loader12.offset.set(0,-0.25);
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
loader13.offset.set(0,-0.25);
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
loader14.offset.set(0,-0.25);
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
loader15.offset.set(0,-0.25);
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
loader16.offset.set(0,-0.25);
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
loader17.offset.set(0,-0.25);
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
loader18.offset.set(0,-0.25);
loader18.repeat.set( 20, 1 );
loader18.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader18.magFilter = THREE.NearestFilter;
loader18.minFilter = THREE.LinearMipMapLinearFilter;
  const material18 = new THREE.MeshBasicMaterial({
    map: loader18,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader19 = new THREE.TextureLoader().load( "create.png" );
loader19.wrapS = THREE.RepeatWrapping;
loader19.wrapT = THREE.RepeatWrapping;
loader19.offset.set(0,-0.25);
loader19.repeat.set( 20, 1 );
loader19.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader19.magFilter = THREE.NearestFilter;
loader19.minFilter = THREE.LinearMipMapLinearFilter;
  const material19 = new THREE.MeshBasicMaterial({
    map: loader19,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader20 = new THREE.TextureLoader().load( "understand.png" );
loader20.wrapS = THREE.RepeatWrapping;
loader20.wrapT = THREE.RepeatWrapping;
loader20.offset.set(0,-0.25);
loader20.repeat.set( 20, 1 );
loader20.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader20.magFilter = THREE.NearestFilter;
loader20.minFilter = THREE.LinearMipMapLinearFilter;
  const material20 = new THREE.MeshBasicMaterial({
    map: loader20,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader21 = new THREE.TextureLoader().load( "investigate.png" );
loader21.wrapS = THREE.RepeatWrapping;
loader21.wrapT = THREE.RepeatWrapping;
loader21.offset.set(0,-0.25);
loader21.repeat.set( 20, 1 );
loader21.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader21.magFilter = THREE.NearestFilter;
loader21.minFilter = THREE.LinearMipMapLinearFilter;
  const material21 = new THREE.MeshBasicMaterial({
    map: loader21,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader22 = new THREE.TextureLoader().load( "invent.png" );
loader22.wrapS = THREE.RepeatWrapping;
loader22.wrapT = THREE.RepeatWrapping;
loader22.offset.set(0,-0.25);
loader22.repeat.set( 20, 1 );
loader22.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader22.magFilter = THREE.NearestFilter;
loader22.minFilter = THREE.LinearMipMapLinearFilter;
  const material22 = new THREE.MeshBasicMaterial({
    map: loader22,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader23 = new THREE.TextureLoader().load( "grow.png" );
loader23.wrapS = THREE.RepeatWrapping;
loader23.wrapT = THREE.RepeatWrapping;
loader23.offset.set(0,-0.25);
loader23.repeat.set( 20, 1 );
loader23.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader23.magFilter = THREE.NearestFilter;
loader23.minFilter = THREE.LinearMipMapLinearFilter;
  const material23 = new THREE.MeshBasicMaterial({
    map: loader23,
     side: THREE.DoubleSide,
    transparent: true, opacity: 1,alphaTest: 0.001
  });

const loader24 = new THREE.TextureLoader().load( "discover.png" );
loader24.wrapS = THREE.RepeatWrapping;
loader24.wrapT = THREE.RepeatWrapping;
loader24.offset.set(0,-0.25);
loader24.repeat.set( 20, 1 );
loader24.anisotropy = renderer.capabilities.getMaxAnisotropy();
loader24.magFilter = THREE.NearestFilter;
loader24.minFilter = THREE.LinearMipMapLinearFilter;
  const material24 = new THREE.MeshBasicMaterial({
    map: loader24,
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
var cube19 = new THREE.Mesh(geometry, material19);
var cube20 = new THREE.Mesh(geometry, material20);
var cube21 = new THREE.Mesh(geometry, material21);
var cube22 = new THREE.Mesh(geometry, material22);
var cube23 = new THREE.Mesh(geometry, material23);
var cube24 = new THREE.Mesh(geometry, material24);
cube2.rotation.x += 10
cube3.rotation.x += 12
cube4.rotation.x += 13
cube5.rotation.x += 14
cube6.rotation.x += 15
cube7.rotation.x += 16
cube8.rotation.x += 17
cube9.rotation.x += 18
cube10.rotation.x += 19
cube11.rotation.x += 20
cube12.rotation.x += 22
cube13.rotation.x += 23
cube14.rotation.x += 24
cube15.rotation.x += 25
cube16.rotation.x += 26
cube17.rotation.x += 27
cube18.rotation.x += 28
cube19.rotation.x += 29
cube20.rotation.x += 30
cube21.rotation.x += 31
cube22.rotation.x += 32
cube23.rotation.x += 33
cube24.rotation.x += 34
var cubes = [cube,cube2,cube3,cube4,cube5,cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24]
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
scene.add(cube19);
scene.add(cube20);
scene.add(cube21);
scene.add(cube22);
scene.add(cube23);
scene.add(cube24);
var positions =[]
for (var i = cubes.length - 1; i >= 0; i--) {
  positions.push([cubes[i].rotation.x, cubes[i].rotation.y, cubes[i].rotation.z]);
}

/* */
var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};
// $(renderer.domElement).on('mousemove',function(e){
//   cube.rotation.z += 0.01
//   cube2.rotation.z += 0.01
//   cube3.rotation.z += 0.01
//   cube4.rotation.z += 0.01
//   cube5.rotation.z += 0.01
//   cube6.rotation.z += 0.01
//   cube7.rotation.z += 0.01
//   cube8.rotation.z += 0.01
//   cube9.rotation.z += 0.01
//   cube10.rotation.z += 0.01
//   cube11.rotation.z += 0.01
//   cube12.rotation.z += 0.01
//   cube13.rotation.z += 0.01
//   cube14.rotation.z += 0.01
//   cube15.rotation.z += 0.01
//   cube16.rotation.z += 0.01
//   cube17.rotation.z += 0.01
//   cube18.rotation.z += 0.01
//   cube19.rotation.z += 0.01
//   cube20.rotation.z += 0.01
//   cube21.rotation.z += 0.01
//   cube22.rotation.z += 0.01
//   cube23.rotation.z += 0.01
//   cube24.rotation.z += 0.01
// })

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
                toRadians(deltaMove.y * 0.9),
                toRadians(deltaMove.x * 0.9),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion2 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.9),
                toRadians(deltaMove.x * 0.9),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion3 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.9),
                toRadians(deltaMove.x * 0.9),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion4 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.25 + 150),
                toRadians(deltaMove.x * 0.25 - 30 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion5 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.05 + 140),
                toRadians(deltaMove.x * 0.05 - 40 ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion6 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.15 + 130),
                toRadians(deltaMove.x * 0.15 - 50  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion7 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.0005 + 120),
                toRadians(deltaMove.x * 0.0005 - 60  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion8 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 110),
                toRadians(deltaMove.x * 0.5 - 70  ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion9 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 100),
                toRadians(deltaMove.x * 0.5 - 80 ),
                0,
                'XYZ'
            ));
         var deltaRotationQuaternion10 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 90),
                toRadians(deltaMove.x * 0.5 - 90  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion11 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 80),
                toRadians(deltaMove.x * 0.5 - 100  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion12 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 70),
                toRadians(deltaMove.x * 0.5 - 110  ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion13 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 60),
                toRadians(deltaMove.x * 0.5 - 120 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion14 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 50),
                toRadians(deltaMove.x * 0.5 - 130 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion15 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 40),
                toRadians(deltaMove.x * 0.5 - 140 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion16 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 30),
                toRadians(deltaMove.x * 0.5 - 150 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion17 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 + 20),
                toRadians(deltaMove.x * 0.5 - 160 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion18 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 +10),
                toRadians(deltaMove.x * 0.5 - 170 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion19 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -10),
                toRadians(deltaMove.x * 0.5 - 180 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion20 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -20),
                toRadians(deltaMove.x * 0.5 - 190 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion21 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -30),
                toRadians(deltaMove.x * 0.5 - 200 ),
                0,
                'XYZ'
            ));
        var deltaRotationQuaternion22 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -40),
                toRadians(deltaMove.x * 0.5 - 210 ),
                0,
                'XYZ'
            ));

        var deltaRotationQuaternion23 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -50),
                toRadians(deltaMove.x * 0.5 - 220 ),
                0,
                'XYZ'
            ));

        var deltaRotationQuaternion24 = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 0.5 -60),
                toRadians(deltaMove.x * 0.5 - 230 ),
                0,
                'XYZ'
            ));
      cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
      cube2.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
      cube3.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
      cube4.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube5.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube6.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube7.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube8.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube9.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube10.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube11.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube12.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube13.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube14.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube15.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube16.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube17.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube18.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube19.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube20.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube21.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
  		cube22.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  		cube23.quaternion.multiplyQuaternions(deltaRotationQuaternion2, cube.quaternion);
  		cube24.quaternion.multiplyQuaternions(deltaRotationQuaternion3, cube.quaternion);
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});
/* */

$(document).on('mouseup', function(e) {
  var myrand = rand(0,5)
  var myrand2 = rand(0,5)

    for (var i = cubes.length - 1; i >= 0; i--) {
      cubes[i].rotation.x = positions[i][0]+ myrand
      cubes[i].rotation.y = positions[i][1]
      cubes[i].rotation.z = positions[i][2]+ myrand2
    }
});

camera.position.z = 10;
var render = function () {
    requestAnimationFrame(render);


    cube.rotation.y += 0.001;
    cube2.rotation.y += 0.002;
    cube3.rotation.y += 0.003;
    cube4.rotation.y += 0.004;
    cube5.rotation.y += 0.005;
    cube6.rotation.y += 0.006;
    cube7.rotation.y += 0.007;
    cube8.rotation.y += 0.008;
    cube9.rotation.y += 0.009;
    cube10.rotation.y += 0.0012;
    cube11.rotation.y += 0.0013;
    cube12.rotation.y += 0.0014;
    cube13.rotation.y += 0.0015;
    cube14.rotation.y += 0.0016;
    cube15.rotation.y += 0.0017;
    cube16.rotation.y += 0.0018;
    cube18.rotation.y += 0.0019;
    cube19.rotation.y += 0.002;
    cube20.rotation.y += 0.011;
    cube21.rotation.y += 0.012;
    cube22.rotation.y += 0.013;
    cube23.rotation.y += 0.014;
    cube24.rotation.y += 0.015;

    renderer.render(scene, camera);
};

render();