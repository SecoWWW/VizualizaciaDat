function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
  }

  function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  }

  function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
  }

  function processData(csv) {
      var allTextLines = csv.split(/\r\n|\n/);
    //   console.log(allTextLines);
    players = [];
         
      for (var i=1; i<11; i++) {
            var data = allTextLines[i].split(',');
            var player = {};
            player.ID = data[0];
            player.name = data[1];
            player.overall = data[19];
            player.potential = data[20];
            player.pace = data[21];
            player.shooting = data[22];
            player.passing = data[23];
            player.dribling = data[24];
            player.defending = data[25];
            player.physical = data[26];
            player.agility = data[45];
            player.reactions = data[46];
            player.stamina = data[50];
            player.strength = data[51];
            player.marking = data[59];

            players.push(player);            
      }      
      console.log(players);
  }

  function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }