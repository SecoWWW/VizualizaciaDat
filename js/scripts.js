function createVerticies() {
    var theta = (1 + Math.sqrt(5)) / 2;
    var reverse = 1 / theta;
    var vertices = [
        1, 1, 1,
        1, 1, -1,
        1, -1, 1,
        1, -1, -1, 
        -1, 1, 1, 
        -1, 1, -1, 
        -1, -1, 1, 
        -1, -1, -1,

        0, theta, reverse,
        0, theta, -reverse,
        0, -theta, reverse,
        0, -theta, -reverse,

        reverse, 0, theta,
        reverse, 0, -theta, 
        -reverse, 0, theta, 
        -reverse, 0, -theta,

        theta, reverse, 0,
        theta, -reverse, 0, 
        -theta, reverse, 0, 
        -theta, -reverse, 0
    ]
    for (var i = 0; i < vertices.length; i += 3) {
        console.log(i / 3 + " : " + vertices[i] + " " + vertices[i + 1] + " " + vertices[i + 2]);
    }
    return vertices;
}

function newVertices(geometry){
    geometry.vertices.push(
        //1
        new THREE.Vector3(  (geometry.vertices[0].x+geometry.vertices[2].x+geometry.vertices[12].x+geometry.vertices[16].x+geometry.vertices[17].x)/5,
                            (geometry.vertices[0].y+geometry.vertices[2].y+geometry.vertices[12].y+geometry.vertices[16].y+geometry.vertices[17].y)/5,
                            (geometry.vertices[0].z+geometry.vertices[2].z+geometry.vertices[12].z+geometry.vertices[16].z+geometry.vertices[17].z)/5),
        //2
        new THREE.Vector3(  (geometry.vertices[0].x+geometry.vertices[8].x+geometry.vertices[9].x+geometry.vertices[1].x+geometry.vertices[16].x)/5,
                            (geometry.vertices[0].y+geometry.vertices[8].y+geometry.vertices[9].y+geometry.vertices[1].y+geometry.vertices[16].y)/5,
                            (geometry.vertices[0].z+geometry.vertices[8].z+geometry.vertices[9].z+geometry.vertices[1].z+geometry.vertices[16].z)/5),
        //3
        new THREE.Vector3(  (geometry.vertices[0].x+geometry.vertices[8].x+geometry.vertices[4].x+geometry.vertices[12].x+geometry.vertices[14].x)/5,
                            (geometry.vertices[0].y+geometry.vertices[8].y+geometry.vertices[4].y+geometry.vertices[12].y+geometry.vertices[14].y)/5,
                            (geometry.vertices[0].z+geometry.vertices[8].z+geometry.vertices[4].z+geometry.vertices[12].z+geometry.vertices[14].z)/5),
        //4
        new THREE.Vector3(  (geometry.vertices[4].x+geometry.vertices[6].x+geometry.vertices[19].x+geometry.vertices[14].x+geometry.vertices[18].x)/5,
                            (geometry.vertices[4].y+geometry.vertices[6].y+geometry.vertices[19].y+geometry.vertices[14].y+geometry.vertices[18].y)/5,
                            (geometry.vertices[4].z+geometry.vertices[6].z+geometry.vertices[19].z+geometry.vertices[14].z+geometry.vertices[18].z)/5),                            
        //5
        new THREE.Vector3(  (geometry.vertices[5].x+geometry.vertices[18].x+geometry.vertices[4].x+geometry.vertices[8].x+geometry.vertices[9].x)/5,
                            (geometry.vertices[5].y+geometry.vertices[18].y+geometry.vertices[4].y+geometry.vertices[8].y+geometry.vertices[9].y)/5,
                            (geometry.vertices[5].z+geometry.vertices[18].z+geometry.vertices[4].z+geometry.vertices[8].z+geometry.vertices[9].z)/5),
        //6
        new THREE.Vector3(  (geometry.vertices[6].x+geometry.vertices[19].x+geometry.vertices[7].x+geometry.vertices[11].x+geometry.vertices[10].x)/5,
                            (geometry.vertices[6].y+geometry.vertices[19].y+geometry.vertices[7].y+geometry.vertices[11].y+geometry.vertices[10].y)/5,
                            (geometry.vertices[6].z+geometry.vertices[19].z+geometry.vertices[7].z+geometry.vertices[11].z+geometry.vertices[10].z)/5),
        //7
        new THREE.Vector3(  (geometry.vertices[5].x+geometry.vertices[7].x+geometry.vertices[15].x+geometry.vertices[18].x+geometry.vertices[19].x)/5,
                            (geometry.vertices[5].y+geometry.vertices[7].y+geometry.vertices[15].y+geometry.vertices[18].y+geometry.vertices[19].y)/5,
                            (geometry.vertices[5].z+geometry.vertices[7].z+geometry.vertices[15].z+geometry.vertices[18].z+geometry.vertices[19].z)/5),
        //8
        new THREE.Vector3(  (geometry.vertices[3].x+geometry.vertices[7].x+geometry.vertices[11].x+geometry.vertices[13].x+geometry.vertices[15].x)/5,
                            (geometry.vertices[3].y+geometry.vertices[7].y+geometry.vertices[11].y+geometry.vertices[13].y+geometry.vertices[15].y)/5,
                            (geometry.vertices[3].z+geometry.vertices[7].z+geometry.vertices[11].z+geometry.vertices[13].z+geometry.vertices[15].z)/5),
        //9
        new THREE.Vector3(  (geometry.vertices[2].x+geometry.vertices[3].x+geometry.vertices[10].x+geometry.vertices[11].x+geometry.vertices[17].x)/5,
                            (geometry.vertices[2].y+geometry.vertices[3].y+geometry.vertices[10].y+geometry.vertices[11].y+geometry.vertices[17].y)/5,
                            (geometry.vertices[2].z+geometry.vertices[3].z+geometry.vertices[10].z+geometry.vertices[11].z+geometry.vertices[17].z)/5),
        //10
        new THREE.Vector3(  (geometry.vertices[2].x+geometry.vertices[6].x+geometry.vertices[10].x+geometry.vertices[12].x+geometry.vertices[14].x)/5,
                            (geometry.vertices[2].y+geometry.vertices[6].y+geometry.vertices[10].y+geometry.vertices[12].y+geometry.vertices[14].y)/5,
                            (geometry.vertices[2].z+geometry.vertices[6].z+geometry.vertices[10].z+geometry.vertices[12].z+geometry.vertices[14].z)/5),
        //11
        new THREE.Vector3(  (geometry.vertices[1].x+geometry.vertices[5].x+geometry.vertices[9].x+geometry.vertices[13].x+geometry.vertices[15].x)/5,
                            (geometry.vertices[1].y+geometry.vertices[5].y+geometry.vertices[9].y+geometry.vertices[13].y+geometry.vertices[15].y)/5,
                            (geometry.vertices[1].z+geometry.vertices[5].z+geometry.vertices[9].z+geometry.vertices[13].z+geometry.vertices[15].z)/5),
        //12
        new THREE.Vector3(  (geometry.vertices[1].x+geometry.vertices[3].x+geometry.vertices[13].x+geometry.vertices[16].x+geometry.vertices[17].x)/5,
                            (geometry.vertices[1].y+geometry.vertices[3].y+geometry.vertices[13].y+geometry.vertices[16].y+geometry.vertices[17].y)/5,
                            (geometry.vertices[1].z+geometry.vertices[3].z+geometry.vertices[13].z+geometry.vertices[16].z+geometry.vertices[17].z)/5),
    );
}

function createGeometry() {
    var theta = (1 + Math.sqrt(5)) / 2;
    var reverse = 1 / theta;

    var geometry = new THREE.Geometry();    

    geometry.vertices.push(
        new THREE.Vector3(1,1,1),//0
        new THREE.Vector3(1,1,-1),//1
        new THREE.Vector3(1,-1,1),//2
        new THREE.Vector3(1,-1,-1),//3
        new THREE.Vector3(-1,1,1),//4
        new THREE.Vector3(-1,1,-1),//5
        new THREE.Vector3(-1,-1,1),//6
        new THREE.Vector3(-1,-1,-1),//7
        new THREE.Vector3(0, theta, reverse),//8
        new THREE.Vector3(0, theta, -reverse),//9
        new THREE.Vector3(0, -theta, reverse),//10
        new THREE.Vector3(0, -theta, -reverse),//11
        new THREE.Vector3(reverse, 0, theta),//12
        new THREE.Vector3(reverse, 0, -theta),//13
        new THREE.Vector3(-reverse, 0, theta),//14
        new THREE.Vector3(-reverse, 0, -theta),//15
        new THREE.Vector3(theta, reverse, 0),//16
        new THREE.Vector3(theta, -reverse, 0),//17
        new THREE.Vector3(-theta, reverse, 0),//18
        new THREE.Vector3(-theta, -reverse, 0)//19
    );

    newVertices(geometry);
    for(var i = 0; i < geometry.vertices.length; i++){
        console.log(geometry.vertices[i].x+" "+geometry.vertices[i].y+" "+geometry.vertices[i].z);
    }


    geometry.faces.push(
        //first face
        // new THREE.Face3(16, 0, 12),
        // new THREE.Face3(12, 2, 17),
        // new THREE.Face3(12, 17, 16),
        new THREE.Face3(0, 12, 20),
        new THREE.Face3(12, 2, 20),
        new THREE.Face3(2, 17, 20),
        new THREE.Face3(17, 16, 20),
        new THREE.Face3(16, 0, 20),
        //second face
        // new THREE.Face3(0, 16, 1),
        // new THREE.Face3(8, 0, 9),
        // new THREE.Face3(9, 0, 1),
        new THREE.Face3(8, 0, 21),
        new THREE.Face3(9, 8, 21),
        new THREE.Face3(1, 9, 21),
        new THREE.Face3(16, 1, 21),
        new THREE.Face3(0, 16, 21),
        //third face
        new THREE.Face3(0, 8, 4),
        new THREE.Face3(14, 12, 0),
        new THREE.Face3(0, 4, 14),
        //fourth face
        new THREE.Face3(4, 6, 14),
        new THREE.Face3(4, 18, 19),
        new THREE.Face3(6, 4, 19),
        //fifth face
        new THREE.Face3(5, 18, 4),
        new THREE.Face3(4, 8, 9),
        new THREE.Face3(5, 4, 9),
        //sixth face
        new THREE.Face3(6, 19, 7),
        new THREE.Face3(7, 11, 10),
        new THREE.Face3(7, 10, 6),
        //seventh face
        new THREE.Face3(19, 18, 7),
        new THREE.Face3(18, 5, 15),
        new THREE.Face3(18, 15, 7),
        //eigth face
        new THREE.Face3(3, 11, 7),
        new THREE.Face3(7, 15, 13),
        new THREE.Face3( 7, 13, 3),
        //nineth face
        new THREE.Face3(11, 2, 10),
        new THREE.Face3(11, 3, 17),
        new THREE.Face3(11, 17, 2),
        //tenth face
        new THREE.Face3(10, 14, 6),
        new THREE.Face3(10, 2, 12),
        new THREE.Face3(10, 12, 14),
        //eleventh face
        new THREE.Face3(9, 15, 5),
        new THREE.Face3(13, 15, 1),
        new THREE.Face3(1, 15, 9),
        //12th face
        new THREE.Face3(13, 17, 3),
        new THREE.Face3(13, 1, 16),
        new THREE.Face3(13, 16, 17),        
    )

    for(var i = 0; i < geometry.vertices.length; i++){
        console.log(geometry.faces[i].a+" "+geometry.faces[i].b+" "+geometry.faces[i].c);
    }
    // console.log(geometry.faces[0]);
    geometry.scale(0.5,0.5,0.5);
    return geometry;
}

function createIndicies() {
    var indices = [
        // 1st face
        16, 0, 12,
        12, 2, 17,
        12, 17, 16,
        // 2nd face
        0, 16, 1,
        8, 0, 9,
        9, 0, 1,
        //3rd face
        0, 8, 4,
        14, 12, 0,
        0, 4, 14,
        //4th face
        4, 6, 14,
        4, 18, 19,
        6, 4, 19,
        //5th face
        5, 18, 4,
        4, 8, 9,
        5, 4, 9,
        //6th face
        6, 19, 7,
        7, 11, 10,
        7, 10, 6,
        //7th face
        19, 18, 7,
        18, 5, 15,
        18, 15, 7,
        //8th face
        3, 11, 7,
        7, 15, 13,
        7, 13, 3,
        //9th face
        11, 2, 10,
        11, 3, 17,
        11, 17, 2,
        //10th face
        10, 14, 6,
        10, 2, 12,
        10, 12, 14,
        //11th face
        9, 15, 5,
        13, 15, 1,
        1, 15, 9,
        //12th face
        13, 17, 3,
        13, 1, 16,
        13, 16, 17
    ];
    return indices;
}

// function addCenterOfVerticies() {
//     sx = sy = sz = 0
//     for i in 1..n:
//         sx = sx + px[i]
//     sy = sy + py[i]
//     sz = sz + pz[i]
//     cx = sx / n
//     cy = sy / n
//     cz = sz / n
// }