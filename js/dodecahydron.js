function createGeometry(player) {
    console.log(player);
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
    var parameterIndex = 0;
    geometry.faces.forEach((element, index, arr) => {
        if (index % 5 == 1) {
            var parameter = parameterValue(player ,parameterIndex++);
            scaleCenterVerticies(geometry, element.c, element.a, element.b, element.c, parameter);
        }
    });    
    for (var i = 0; i < 32; i++) {
        geometry.vertices[i].x *= 0.5;
        geometry.vertices[i].y *= 0.5;
        geometry.vertices[i].z *= 0.5;
    }

    for (var i = 0; i < geometry.vertices.length; i++){
        geometry.vertices[i].x += next_position.x;
        geometry.vertices[i].y += next_position.y;
        geometry.vertices[i].z += next_position.z;
    }

    return geometry;
}

function centerOfFaces(geometry) {
    geometry.vertices.push(        
        getMiddle(0, geometry),
        getMiddle(1, geometry),
        getMiddle(2, geometry),
        getMiddle(3, geometry),
        getMiddle(4, geometry),
        getMiddle(5, geometry),        
        getMiddle(6, geometry),
        getMiddle(7, geometry),
        getMiddle(8, geometry),
        getMiddle(9, geometry),
        getMiddle(10, geometry),
        getMiddle(11, geometry)
    );
}

function scaleCenterVerticies(geometry, center, vertice1, vertice2, vertice3, parameter) {    
    var normal = normalVector(geometry.vertices[vertice1],geometry.vertices[vertice2],geometry.vertices[vertice3]);    
    geometry.vertices[center].addScaledVector(normal, parameter*5);
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

function parameterValue(player, index){
    var returnValue;
    switch(index){
        case 0:
            if (document.getElementById('potentialId').checked){
                returnValue = player.potential/100;
            } else {returnValue = 0;}
            break;
        case 1:
            if (document.getElementById('paceId').checked){
                returnValue = player.pace/100;
            } else {returnValue = 0;}
            break;
        case 2:
            if (document.getElementById('shootingId').checked){
                returnValue = player.shooting/100;
            } else {returnValue = 0;}
            break;
        case 3:
            if (document.getElementById('passingId').checked){                
                returnValue = player.passing/100;
            } else {returnValue = 0;}
            break;
        case 4:
            if (document.getElementById('driblingId').checked){
                returnValue = player.dribling/100;
            } else {returnValue = 0;}
            break;
        case 5:
            if (document.getElementById('defendingId').checked){
                returnValue = player.defending/100;
            } else {returnValue = 0;}            
            break;
        case 6:
            if (document.getElementById('physicalId').checked){
                returnValue = player.physical/100;
            } else {returnValue = 0;}
            break;
        case 7:        
            if (document.getElementById('agilityId').checked){
                returnValue =  player.agility/100;
            } else {returnValue = 0;}
            break;
        case 8:     
            if (document.getElementById('reactionsId').checked){       
                returnValue = player.reactions/100;
            } else {returnValue = 0;}
            break;
        case 9:
            if (document.getElementById('staminaId').checked){
                returnValue = player.stamina/100;
            } else {returnValue = 0;}
            break;
        case 10:
            if (document.getElementById('strengthId').checked){
                returnValue = player.strength/100;
            } else {returnValue = 0;}
            break;
        case 11:
            if (document.getElementById('markingId').checked){
                returnValue = player.marking/100;
            } else {returnValue = 0;}
            break;
    }
    return returnValue;
}