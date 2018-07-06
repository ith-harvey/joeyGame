`use strict`;


// $(".characterOne").on("click", function() {

//   console.log("This is working");
  
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

dragula([$('drag-elements'), $('drop-target')], {
  revertOnSpill: true
}).on('drop', function(el) {
  if ($('drop-target').children.length > 0) {
    $('display').innerHTML = $('drop-target').innerHTML;
  } else {
    $('display').innerHTML = "Display";
  }

});