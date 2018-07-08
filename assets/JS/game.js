`use strict`;

function $(id) {
  return document.getElementById(id);
}

function welcomeAlert() {
  swal({
    title: "Get Ready To Battle",
    icon: "error",
    text: "Choose Your Champion!",
    button: "Continue", 
  });  
}

setTimeout(welcomeAlert, 1);


var pickedChampion = false;
var pickedOpponent = false;

//this is to feed them objects.
var champion;
var opponent;

//turn off drop zone 3
var dropZone3 = $("drop-target3");
dropZone3.style.display = "none";

dragula([$('drag-elements'), $('drop-target2'), $('drop-target3')], {
  revertOnSpill: true
}).on('drop', function(el) {

  // console.log("Drop is working");

  if ($('drag-elements').hasChildNodes = true && pickedChampion == false) {

    //Link choice to JS Object
    if($('character').innerHTML == "ObiWan") {
      console.log("champion is ObiWan");

      //Need to figure out how to link choice to object
      champion = ObiWan;
    }

    console.log("Picked Champion");
    setTimeout(pickedChampionFn, 100);
    pickedChampion = true;

    $(".changeText").text("Enemies");
    //turn on drop zone 3
    dropZone3.style.display = "block";
    //turn background red
  }
  
 // Drop Zone 3 
  if ($('drop-target3').hasChildNodes = true && pickedChampion == true) {

    console.log("Picked Opponent");
    setTimeout(pickedOpponentFn, 1);
  }  
});


function pickedChampionFn() {
  pickedChampion = true;
  swal({
        title: "You Picked Your Champion",
        icon: "info",
        text: "Now pick your first opponent!",
        button: "Continue", 
      });  
}

function pickedOpponentFn() {
  pickedOpponent = true;
  swal({
        title: "You Picked Your First Opponent",
        icon: "success",
        text: "Now you need to fight him!",
        button: "Continue", 
      });  
}

