// function Upload() {

//     var fileUpload = document.getElementById("csvFile");

//     var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;

//     if (regex.test(fileUpload.value.toLowerCase())) {

//         if (typeof(FileReader) != "undefined") {

//             var reader = new FileReader();

//             reader.onload = function(e) {
//                 var table = document.createElement("table");
//                 var rows = e.target.result.split("\n");
//                 for (var i = 0; i < rows.length; i++) {
//                     var row = table.insertRow(-1);
//                     var cells = rows[i].split(",");
//                     for (var j = 0; j < cells.length; j++) {
//                         var cell = row.insertCell(-1);
//                         cell.innerHTML = cells[j];
//                     }
//                 }
//             }
//             reader.readAsText(fileUpload.files[0]);
//         } else {
//             alert("This browser does not support HTML5.");
//         }

//     } else {
//         alert("Please upload a valid CSV file.");
//     }
// }

function loadFile() {
    console.log('lopata');
    d3.csv("dataset/complete.csv").then(function(data) {
        console.log(data[0]); // [{"Hello": "world"}, …]
    });
}