`use strict`;

function $(id) {
  return document.getElementById(id);
}

var pickedChampion = false;
var pickedOpponent = false;

//this is to feed them objects.
var champion;
var opponent;

//turn off drop zone 3
var dropZone3 = $("drop-target3");
dropZone3.style.display = "none";

//  BUG: Saying that the div is null
// var ArrowTop = $(".centerArrowTop");
// var ArrowBot = $(".centerArrowBot");
// ArrowBot.style.display = "none";
// $(".centerArrowBot").children().attr("disabled","disabled");


dragula([$('drag-elements'), $('drop-target2'), $('drop-target3')], {
  revertOnSpill: true
}).on('drop', function(el) {

  // console.log("Drop is working");

  if ($('drag-elements').hasChildNodes = true && pickedChampion == false) {

    console.log("Picked Champion");
    setTimeout(pickedChampionFn, 300);
    pickedChampion = true;

    //Link choice to JS Object
    if($('character').innerHTML == "ObiWan") {
      console.log("champion is ObiWan");

      //Need to figure out how to link choice to object
      champion = ObiWan;
    }
    $(".changeText").text("Enemies");
    //turn on drop zone 3
    dropZone3.style.display = "block";

    // want to just make the margin top larger.. but can't grab it .. says null
    // document.getElementsById("drop-targetArrowTop").style.margin-top = someNumber;
    // turn background red
    document.getElementById("drag-elements").style.backgroundColor = "#eda1a1";

    //animation
    // myMove();
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
        icon: "info",
        text: "Now you need to fight him!",
        button: "Continue", 
      });  
}

// function myMove() {
//   var elem = document.getElementById("arrowImageTop");   
//   var pos = 0;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       //can't animate because still getting null style
//       elem.style.top = pos + 'px';
//     }
//   }
// }
