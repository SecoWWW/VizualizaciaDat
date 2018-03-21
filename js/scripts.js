function createVerticies() {
    var theta = (1 + Math.sqrt(5)) / 2;
    var reverse = 1 / theta;
    var vertices = [
        1, 1, 1,
        1, 1, -1,
        1, -1, 1,
        1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, -1,

        0, theta, reverse,
        0, theta, -reverse,
        0, -theta, reverse,
        0, -theta, -reverse,

        reverse, 0, theta,
        reverse, 0, -theta, -reverse, 0, theta, -reverse, 0, -theta,

        theta, reverse, 0,
        theta, -reverse, 0, -theta, reverse, 0, -theta, -reverse, 0
    ]
    for (var i = 0; i < vertices.length; i += 3) {
        console.log(i / 3 + " : " + vertices[i] + " " + vertices[i + 1] + " " + vertices[i + 2]);
    }
    return vertices;
}

function createIndicies() {
    var indices = [
        16, 0, 12,
        12, 2, 17,
        12, 17, 16,
        // 17, 12, 16, - wrong direction


        0, 16, 1,
        8, 0, 9,
        9, 0, 1,

        0, 8, 4,
        14, 12, 0,
        0, 4, 14
    ];
    return indices;
}

function addCenterOfVerticies() {
    sx = sy = sz = 0
    for i in 1..n:
        sx = sx + px[i]
    sy = sy + py[i]
    sz = sz + pz[i]
    cx = sx / n
    cy = sy / n
    cz = sz / n
}