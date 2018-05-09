function addPlayer(player, displacement){
    var geometry = createGeometry(player);  
    if (displacement % 3 == 0){      
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            opacity: 0.5
        });
        var wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x00ff00
        });
        createAxes();
    } else if (displacement % 3 == 1){
        var material = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            opacity: 0.5
        });
        var wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });
    } else if (displacement % 3 == 2){
        var material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            opacity: 0.5
        });
        var wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0xff0000
        });
        updateNextPosition();
    }
    material.transparent = true;
    var polyhedron = new THREE.Mesh(geometry, material);        
    scene.add(polyhedron);
    var wireframe = new THREE.WireframeGeometry(geometry);    

    var line = new THREE.LineSegments(wireframe, wireframeMaterial);
    scene.add(line);

    
}

function updateNextPosition() {
    next_position.x += 10;
    if (next_position.x >= 30){
        next_position.x = 0;
        next_position.y += 10;
    }
}


function showData() {
    if(players.length == 0){
        console.log('No loaded data');
        return;
    }

    for( var i = 0; i < 4; i++){        
        addPlayer(players[i], i);        
    }
}

function clearScreen() {
    scene.children = [];
    next_position.x = 0;
    next_position.y = 0;
    next_position.z = 0;
}