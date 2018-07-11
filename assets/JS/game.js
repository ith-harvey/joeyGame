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


//on start
function welcomeAlert() {
  swal({
    title: "Get Ready To Battle",
    icon: "error",
    text: "Choose Your Champion!",
    button: "Continue", 
  });  
}

setTimeout(welcomeAlert, 1);


dragula([$('drag-elements'), $('drop-target2'), $('drop-target3')], {
  revertOnSpill: true
}).on('drop', function(el) {

  // console.log("Drop is working");

  // Drop Zone 3 // this if must come first so that picked champ is not true when it hits it
  if ($('drop-target3').hasChildNodes = true && pickedChampion == true) {

    console.log("Picked Opponent");
    setTimeout(pickedOpponentFn, 1);

    // after opponent dies make sure that we remove inactive class 
    //so that a new opponent
    document.getElementById("drop-target3").classList.add("inactiveLink");

    //Also make enemies inactive until first opponent is dead..
    document.getElementById("drag-elements").classList.add("inactiveLink");
  }  

  // ** 
  if (pickedChampion == false) {

    console.log("Picked Champion");
    setTimeout(pickedChampionFn, 1);
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

    // This makes
    document.getElementById("drop-target2").classList.add("inactiveLink");
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

//************************************************** */
//Objects//
//************************************************** */

//put this inside object... tie it all together
var ObiWanHealth = document.getElementById("ObiWanHealth");

console.log(ObiWanHealth);

var ObiWan = {
  Name: "ObiWan",
  Physical: ObiWanHealth,
  Health: 100,
  AttackPower: 75,
  CounterAttackPower: 20,

  Attack: function(/*other chracter*/) {
    
    //Code to attack other character
    //Decrease OtherCharacter.Health by this.AttackPower
    //Decrease this.Heath by OtherCharacter.CounterAttackPower
    //Decrease this.Heath by OtherCharacter.AttackPower
    //Decrese OtherCharacter.Health by this.CounterAttackPower

    //link to HTML from inside the object?
    
  }
};

console.log(ObiWan);

var LukeSkywalker = {
  Name: "LukeSkywalker",
  Health: 100,
  AttackPower: 80,
  CounterAttackPower: 25,

  Attack: function(/*other chracter*/) {
    
    //Code to attack other character
    //Decrease OtherCharacter.Health by this.AttackPower
    //Decrease this.Heath by OtherCharacter.CounterAttackPower
    //Decrease this.Heath by OtherCharacter.AttackPower
    //Decrese OtherCharacter.Health by this.CounterAttackPower

    //link to HTML from inside the object?
    
  }
};

var DarthVadar = {
  Name: "DarthVadar",
  Health: 100,
  AttackPower: 60,
  CounterAttackPower: 15,

  Attack: function(/*other chracter*/) {
    
    //Code to attack other character
    //Decrease OtherCharacter.Health by this.AttackPower
    //Decrease this.Heath by OtherCharacter.CounterAttackPower
    //Decrease this.Heath by OtherCharacter.AttackPower
    //Decrese OtherCharacter.Health by this.CounterAttackPower

    //link to HTML from inside the object?
    
  }
};

var DarthMal = {
  Name: "DarthMal",
  Health: 100,
  AttackPower: 70,
  CounterAttackPower: 12,

  Attack: function(/*other chracter*/) {
    
    //Code to attack other character
    //Decrease OtherCharacter.Health by this.AttackPower
    //Decrease this.Heath by OtherCharacter.CounterAttackPower
    //Decrease this.Heath by OtherCharacter.AttackPower
    //Decrese OtherCharacter.Health by this.CounterAttackPower

    //link to HTML from inside the object?
    
  }
};

// Check if Other character.health is greater than 0 if not, dead.
// Next opponenet..

//Call the function inside
//ObiWan.Attack(other character);
//console.log(ObiWan.Name);