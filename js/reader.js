function loadFile() {
    d3.csv("dataset/complete.csv").then(function(data) {
        console.log(data[0]); // [{"Hello": "world"}, …]        
    });
}