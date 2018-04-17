function createGeometry() {
    var theta = (1 + Math.sqrt(5)) / 2;
    var reverse = 1 / theta;

    var geometry = new THREE.Geometry();

    geometry.vertices.push(
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
        new THREE.Vector3(-theta, -reverse, 0) //19
    );

    

    centerOfFaces(geometry);

    geometry.faces.push(
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

    geometry.faces.forEach((element, index, arr) => {
        if (index % 5 == 1) {
            scaleCenterVerticies(geometry, element.c, element.a, element.b, element.c);
        }
    });    
    for (var i = 0; i < 20; i++) {
        geometry.vertices[i].x *= 0.5;
        geometry.vertices[i].y *= 0.5;
        geometry.vertices[i].z *= 0.5;
    }

    return geometry;
}

function centerOfFaces(geometry) {
    geometry.vertices.push(
        //1
        new THREE.Vector3((geometry.vertices[0].x + geometry.vertices[2].x + geometry.vertices[12].x + geometry.vertices[16].x + geometry.vertices[17].x) / 5,
            (geometry.vertices[0].y + geometry.vertices[2].y + geometry.vertices[12].y + geometry.vertices[16].y + geometry.vertices[17].y) / 5,
            (geometry.vertices[0].z + geometry.vertices[2].z + geometry.vertices[12].z + geometry.vertices[16].z + geometry.vertices[17].z) / 5),
        //2
        new THREE.Vector3((geometry.vertices[0].x + geometry.vertices[8].x + geometry.vertices[9].x + geometry.vertices[1].x + geometry.vertices[16].x) / 5,
            (geometry.vertices[0].y + geometry.vertices[8].y + geometry.vertices[9].y + geometry.vertices[1].y + geometry.vertices[16].y) / 5,
            (geometry.vertices[0].z + geometry.vertices[8].z + geometry.vertices[9].z + geometry.vertices[1].z + geometry.vertices[16].z) / 5),
        //3
        new THREE.Vector3((geometry.vertices[0].x + geometry.vertices[8].x + geometry.vertices[4].x + geometry.vertices[12].x + geometry.vertices[14].x) / 5,
            (geometry.vertices[0].y + geometry.vertices[8].y + geometry.vertices[4].y + geometry.vertices[12].y + geometry.vertices[14].y) / 5,
            (geometry.vertices[0].z + geometry.vertices[8].z + geometry.vertices[4].z + geometry.vertices[12].z + geometry.vertices[14].z) / 5),
        //4
        new THREE.Vector3((geometry.vertices[4].x + geometry.vertices[6].x + geometry.vertices[19].x + geometry.vertices[14].x + geometry.vertices[18].x) / 5,
            (geometry.vertices[4].y + geometry.vertices[6].y + geometry.vertices[19].y + geometry.vertices[14].y + geometry.vertices[18].y) / 5,
            (geometry.vertices[4].z + geometry.vertices[6].z + geometry.vertices[19].z + geometry.vertices[14].z + geometry.vertices[18].z) / 5),
        //5
        new THREE.Vector3((geometry.vertices[5].x + geometry.vertices[18].x + geometry.vertices[4].x + geometry.vertices[8].x + geometry.vertices[9].x) / 5,
            (geometry.vertices[5].y + geometry.vertices[18].y + geometry.vertices[4].y + geometry.vertices[8].y + geometry.vertices[9].y) / 5,
            (geometry.vertices[5].z + geometry.vertices[18].z + geometry.vertices[4].z + geometry.vertices[8].z + geometry.vertices[9].z) / 5),
        //6
        new THREE.Vector3((geometry.vertices[6].x + geometry.vertices[19].x + geometry.vertices[7].x + geometry.vertices[11].x + geometry.vertices[10].x) / 5,
            (geometry.vertices[6].y + geometry.vertices[19].y + geometry.vertices[7].y + geometry.vertices[11].y + geometry.vertices[10].y) / 5,
            (geometry.vertices[6].z + geometry.vertices[19].z + geometry.vertices[7].z + geometry.vertices[11].z + geometry.vertices[10].z) / 5),
        //7
        new THREE.Vector3((geometry.vertices[5].x + geometry.vertices[7].x + geometry.vertices[15].x + geometry.vertices[18].x + geometry.vertices[19].x) / 5,
            (geometry.vertices[5].y + geometry.vertices[7].y + geometry.vertices[15].y + geometry.vertices[18].y + geometry.vertices[19].y) / 5,
            (geometry.vertices[5].z + geometry.vertices[7].z + geometry.vertices[15].z + geometry.vertices[18].z + geometry.vertices[19].z) / 5),
        //8
        new THREE.Vector3((geometry.vertices[3].x + geometry.vertices[7].x + geometry.vertices[11].x + geometry.vertices[13].x + geometry.vertices[15].x) / 5,
            (geometry.vertices[3].y + geometry.vertices[7].y + geometry.vertices[11].y + geometry.vertices[13].y + geometry.vertices[15].y) / 5,
            (geometry.vertices[3].z + geometry.vertices[7].z + geometry.vertices[11].z + geometry.vertices[13].z + geometry.vertices[15].z) / 5),
        //9
        new THREE.Vector3((geometry.vertices[2].x + geometry.vertices[3].x + geometry.vertices[10].x + geometry.vertices[11].x + geometry.vertices[17].x) / 5,
            (geometry.vertices[2].y + geometry.vertices[3].y + geometry.vertices[10].y + geometry.vertices[11].y + geometry.vertices[17].y) / 5,
            (geometry.vertices[2].z + geometry.vertices[3].z + geometry.vertices[10].z + geometry.vertices[11].z + geometry.vertices[17].z) / 5),
        //10
        new THREE.Vector3((geometry.vertices[2].x + geometry.vertices[6].x + geometry.vertices[10].x + geometry.vertices[12].x + geometry.vertices[14].x) / 5,
            (geometry.vertices[2].y + geometry.vertices[6].y + geometry.vertices[10].y + geometry.vertices[12].y + geometry.vertices[14].y) / 5,
            (geometry.vertices[2].z + geometry.vertices[6].z + geometry.vertices[10].z + geometry.vertices[12].z + geometry.vertices[14].z) / 5),
        //11
        new THREE.Vector3((geometry.vertices[1].x + geometry.vertices[5].x + geometry.vertices[9].x + geometry.vertices[13].x + geometry.vertices[15].x) / 5,
            (geometry.vertices[1].y + geometry.vertices[5].y + geometry.vertices[9].y + geometry.vertices[13].y + geometry.vertices[15].y) / 5,
            (geometry.vertices[1].z + geometry.vertices[5].z + geometry.vertices[9].z + geometry.vertices[13].z + geometry.vertices[15].z) / 5),
        //12
        new THREE.Vector3((geometry.vertices[1].x + geometry.vertices[3].x + geometry.vertices[13].x + geometry.vertices[16].x + geometry.vertices[17].x) / 5,
            (geometry.vertices[1].y + geometry.vertices[3].y + geometry.vertices[13].y + geometry.vertices[16].y + geometry.vertices[17].y) / 5,
            (geometry.vertices[1].z + geometry.vertices[3].z + geometry.vertices[13].z + geometry.vertices[16].z + geometry.vertices[17].z) / 5),
    );
}

function scaleCenterVerticies(geometry, center, vertice1, vertice2, vertice3) {    
    var normal = normalVector(geometry.vertices[vertice1],geometry.vertices[vertice2],geometry.vertices[vertice3]);
    geometry.vertices[center].addScaledVector(normal, Math.random() * 1.75);
}

function normalVector(vertice1, vertice2, vertice3) {
    var u = new THREE.Vector3(
        vertice1.x - vertice2.x,
        vertice1.y - vertice2.y,
        vertice1.z - vertice2.z);
    var v = new THREE.Vector3(
        vertice2.x - vertice3.x,
        vertice2.y - vertice3.y,
        vertice2.z - vertice3.z);
    return new THREE.Vector3(
        (u.y * v.z) - (u.z * v.y), 
        (u.z * v.x) - (u.x * v.z), 
        (u.x * v.y) - (u.y * v.x));
}