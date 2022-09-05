var view = {
     displayMessage: function(msg) {
          var msgArea = document.getElementById("messageArea");
          msgArea.innerHTML = msg
     },
     displayHit: function(location) {
          var cell = document.getElementById(location);
          cell.setAttribute("class", "hit");
     },
     displayMiss: function(location) {
          var cell = document.getElementById(location);
          cell.setAttribute("class", "miss");
     }
};

view.displayMessage("Getting Started");
view.displayHit("44");
view.displayMiss("33")
