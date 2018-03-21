function createVerticies() {
    var theta = (1 + Math.sqrt(5))/2;
    var reverse = 1/theta;
    var vertices = [
        1,1,1,
        1,1,-1,
        1,-1,1,
        1,-1,-1,
        -1,1,1,
        -1,1,-1,
        -1,-1,1,
        -1,-1,-1,        

        0,reverse,theta,
        0,reverse,-theta,
        0,-reverse,theta,
        0,-reverse,-theta,

        reverse,0,theta,
        reverse,0,-theta,
        -reverse,0,theta,
        -reverse,0,-theta,

        theta,reverse,0,
        theta,-reverse,0,
        -theta,reverse,0,
        -theta,-reverse,0
    ]
    for(var i = 0; i < vertices.length; i+=3){
        console.log(i/3 + " : " + vertices[i] + " " + vertices[i+1] + " " + vertices[i+2]);
    }        
    return vertices;
}

function createIndicies() {
    var indices = [
        // 16, 0, 12,
        // 12, 2, 17,
        // 12, 17, 16
        // 17, 12, 16, - wrong direction
        

        0, 16, 1,
        // 0, 8, 9,
        9, 0, 1,

        // 0, 8, 4,
        // 0, 12, 14,
        // 0, 14, 4
    ];
    return indices;
}