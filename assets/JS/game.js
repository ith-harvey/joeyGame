`use strict`;


// $(".characterOne").on("click", function() {

//   console.log("This is working");
  
// });

// $("p").click(function(){
//   alert("The paragraph was clicked.");
// });

//$("#result").text(result);


// swal({
//   title: "YOU WIN!",
//   icon: "success",
//   text: "This is subtext!",
//   button: "Good Work", 
// });

function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target'), $('drop-target2'), $('drop-target3')], {
  revertOnSpill: true
}).on('drop', function(el) {
  if ($('drop-target').children.length > 0) {
    $('display').innerHTML = $('drop-target').innerHTML;
  } else {
    $('display').innerHTML = "Display";
  }

});