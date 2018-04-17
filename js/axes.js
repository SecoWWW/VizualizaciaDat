function createAxes(scene) {
    var theta = (1 + Math.sqrt(5)) / 2;
    var reverse = 1 / theta;

    var axes = new THREE.Geometry();
    var verticies = [];

    axes.vertices.push(
        new THREE.Vector3(1, 1, 1), //0
        new THREE.Vector3(1, 1, -1), //1
        new THREE.Vector3(1, -1, 1), //2
        new THREE.Vector3(1, -1, -1), //3
        new THREE.Vector3(-1, 1, 1), //4
        new THREE.Vector3(-1, 1, -1), //5
        new THREE.Vector3(-1, -1, 1), //6
        new THREE.Vector3(-1, -1, -1), //7
        new THREE.Vector3(0, theta, reverse), //8
        new THREE.Vector3(0, theta, -reverse), //9
        new THREE.Vector3(0, -theta, reverse), //10
        new THREE.Vector3(0, -theta, -reverse), //11
        new THREE.Vector3(reverse, 0, theta), //12
        new THREE.Vector3(reverse, 0, -theta), //13
        new THREE.Vector3(-reverse, 0, theta), //14
        new THREE.Vector3(-reverse, 0, -theta), //15
        new THREE.Vector3(theta, reverse, 0), //16
        new THREE.Vector3(theta, -reverse, 0), //17
        new THREE.Vector3(-theta, reverse, 0), //18
        new THREE.Vector3(-theta, -reverse, 0), //19        
    );

    centerOfFaces(axes);
    axes.vertices.push(
        new THREE.Vector3(0, 0, 0)
    );



    axes.faces.push(
        //first face        
        new THREE.Face3(0, 12, 20),
        new THREE.Face3(12, 2, 20),
        new THREE.Face3(2, 17, 20),
        new THREE.Face3(17, 16, 20),
        new THREE.Face3(16, 0, 20),
        //second face        
        new THREE.Face3(8, 0, 21),
        new THREE.Face3(9, 8, 21),
        new THREE.Face3(1, 9, 21),
        new THREE.Face3(16, 1, 21),
        new THREE.Face3(0, 16, 21),
        // //third face        
        new THREE.Face3(0, 8, 22),
        new THREE.Face3(8, 4, 22),
        new THREE.Face3(4, 14, 22),
        new THREE.Face3(14, 12, 22),
        new THREE.Face3(12, 0, 22),
        // //fourth face        
        new THREE.Face3(14, 4, 23),
        new THREE.Face3(6, 14, 23),
        new THREE.Face3(19, 6, 23),
        new THREE.Face3(18, 19, 23),
        new THREE.Face3(4, 18, 23),
        // //fifth face        
        new THREE.Face3(18, 4, 24),
        new THREE.Face3(5, 18, 24),
        new THREE.Face3(9, 5, 24),
        new THREE.Face3(8, 9, 24),
        new THREE.Face3(4, 8, 24),
        // //sixth face        
        new THREE.Face3(6, 19, 25),
        new THREE.Face3(19, 7, 25),
        new THREE.Face3(7, 11, 25),
        new THREE.Face3(11, 10, 25),
        new THREE.Face3(10, 6, 25),
        // //seventh face        
        new THREE.Face3(19, 18, 26),
        new THREE.Face3(18, 5, 26),
        new THREE.Face3(5, 15, 26),
        new THREE.Face3(15, 7, 26),
        new THREE.Face3(7, 19, 26),
        // //eigth face        
        new THREE.Face3(7, 15, 27),
        new THREE.Face3(15, 13, 27),
        new THREE.Face3(13, 3, 27),
        new THREE.Face3(3, 11, 27),
        new THREE.Face3(11, 7, 27),
        // //nineth face        
        new THREE.Face3(11, 3, 28),
        new THREE.Face3(3, 17, 28),
        new THREE.Face3(17, 2, 28),
        new THREE.Face3(2, 10, 28),
        new THREE.Face3(10, 11, 28),
        // //tenth face        
        new THREE.Face3(6, 10, 29),
        new THREE.Face3(10, 2, 29),
        new THREE.Face3(2, 12, 29),
        new THREE.Face3(12, 14, 29),
        new THREE.Face3(14, 6, 29),
        // //eleventh face        
        new THREE.Face3(15, 5, 30),
        new THREE.Face3(13, 15, 30),
        new THREE.Face3(1, 13, 30),
        new THREE.Face3(9, 1, 30),
        new THREE.Face3(5, 9, 30),
        // //12th face        
        new THREE.Face3(3, 13, 31),
        new THREE.Face3(13, 1, 31),
        new THREE.Face3(1, 16, 31),
        new THREE.Face3(16, 17, 31),
        new THREE.Face3(17, 3, 31),
    )

    axes.faces.forEach((element, index, arr) => {
        if (index % 5 == 1) {
            scaleAxes(axes, element.c, element.a, element.b, element.c);
        }
    });

    addAxes(scene, axes);
    addText(scene, axes);
    addScaleDots(scene, axes);
}

function addAxes(scene, axes) {
    var material = new THREE.LineBasicMaterial({ color: 0xffffff });
    for (var i = 20; i < 32; i++) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(axes.vertices[32]);
        geometry.vertices.push(axes.vertices[i]);
        var line = new THREE.Line(geometry, material);
        scene.add(line);
    }
}

function addText(scene, axes) {    
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var loader = new THREE.FontLoader();
    loader.load('node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        for (var i = 20; i < 32; i++) {
            var geometry = new THREE.TextGeometry('Text', {
                font: font,
                size: 0.15,
                height: 0.05,                              
            });            
            var text = new THREE.Mesh(geometry, material);
            text.position.x = axes.vertices[i].x;
            text.position.y = axes.vertices[i].y;
            text.position.z = axes.vertices[i].z;
            scene.add(text);            
        }
    });
    
}

function addScaleDots(scene, axes){
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (var i = 20; i < 32; i++){
        var geometry = new THREE.SphereGeometry( 0.025, 32, 32 );        
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = axes.vertices[i].x;
        sphere.position.y = axes.vertices[i].y;
        sphere.position.z = axes.vertices[i].z;      
        scene.add(sphere);
    }
}

function scaleAxes(axes, center, vertice1, vertice2, vertice3) {
    var normal = normalVector(axes.vertices[vertice1],axes.vertices[vertice2],axes.vertices[vertice3]);
    axes.vertices[center].addScaledVector(normal, 2);
};