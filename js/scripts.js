function createVerticies() {
    var theta = (1 + Math.sqrt(5)/2);
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
    return vertices;
}

function createIndicies() {
    var indices = [
        16, 0, 12,
        12, 2, 17,
        17, 12,16,

        
    ];
    return indices;
}