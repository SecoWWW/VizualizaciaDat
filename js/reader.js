function loadFile() {
    d3.csv("dataset/complete.csv").then(function(data) {
        console.log(data[0]); // [{"Hello": "world"}, …]        
    });
}

function resetCamera(camera) {
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;
}