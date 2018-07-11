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

var ObiWan = {
  name: "ObiWan",
  health: 100,
  attackPower: 75,
  counterAttackPower: 20,

  ConnectObjToHTML: function (){
    var obiwanHealthID = document.getElementById("ObiWanHealthID");
    obiwanHealthID.textContent = "Health: " + this.health;
  },

  // Attack: function(/*other chracter*/) {
    
  //   //Code to attack other character
  //   //Decrease OtherCharacter.Health by this.AttackPower
  //   //Decrease this.Heath by OtherCharacter.CounterAttackPower
  //   //Decrease this.Heath by OtherCharacter.AttackPower
  //   //Decrese OtherCharacter.Health by this.CounterAttackPower

  //   //link to HTML from inside the object?
  // }
};

console.log(ObiWan);

var LukeSkywalker = {
  name: "LukeSkywalker",
  health: 100,
  attackPower: 80,
  counterAttackPower: 25,

  ConnectObjToHTML: function (){
    var LukeHealthID = document.getElementById("LukeHealthID");
    LukeHealthID.textContent = "Health: " + this.health;
  },

  // Attack: function(/*other chracter*/) {
    
  //   //Code to attack other character
  //   //Decrease OtherCharacter.Health by this.AttackPower
  //   //Decrease this.Heath by OtherCharacter.CounterAttackPower
  //   //Decrease this.Heath by OtherCharacter.AttackPower
  //   //Decrese OtherCharacter.Health by this.CounterAttackPower

  //   //link to HTML from inside the object?
    
  // }
};

var DarthVadar = {
  name: "DarthVadar",
  health: 100,
  attackPower: 60,
  counterAttackPower: 15,

  ConnectObjToHTML: function (){
    var VadarHealthID = document.getElementById("VadarHealthID");
    VadarHealthID.textContent = "Health: " + this.health;
  },

  // Attack: function(/*other chracter*/) {
    
  //   //Code to attack other character
  //   //Decrease OtherCharacter.Health by this.AttackPower
  //   //Decrease this.Heath by OtherCharacter.CounterAttackPower
  //   //Decrease this.Heath by OtherCharacter.AttackPower
  //   //Decrese OtherCharacter.Health by this.CounterAttackPower

  //   //link to HTML from inside the object?
    
  // }
};

var DarthMal = {
  name: "DarthMal",
  health: 100,
  attackPower: 70,
  counterAttackPower: 12,

  ConnectObjToHTML: function (){
    var MalHealthID = document.getElementById("MalHealthID");
    MalHealthID.textContent = "Health: " + this.health;
  },

  // Attack: function(/*other chracter*/) {
    
  //   //Code to attack other character
  //   //Decrease OtherCharacter.Health by this.AttackPower
  //   //Decrease this.Heath by OtherCharacter.CounterAttackPower
  //   //Decrease this.Heath by OtherCharacter.AttackPower
  //   //Decrese OtherCharacter.Health by this.CounterAttackPower

  //   //link to HTML from inside the object?
    
  // }
};

//Connect objects to HTML Health Divs
ObiWan.ConnectObjToHTML();
LukeSkywalker.ConnectObjToHTML();
DarthVadar.ConnectObjToHTML();
DarthMal.ConnectObjToHTML();

//Figure out Attacking:
// find what character object is in Drop Zone 2 == champion
// find what character is in Drop Zone 3 == Opponent
// then on click attack

//trying onChange event
//document.getElementById("ObiWanHealthID").addEventListener("change", Attack);

// .parent is not working..
// var target = document.getElementById("obiwan");
// var targetParent = target.parent();
// console.log(targetParent);

function Attack(){

  //****************************************/
  //I am trying to find which character was dropped in Drop Zone 2 by finding if they are a 
  // child to the new Drop Zone 2 parent div.. Then I can find which character was dropped in Zone3
  // then I can have them fight. But I cant have them fight until I know who is fighting who.

  // If the drop zone 2 div contains the obiwan health div
  // then you have chosen ObiWan .. repeat for other characters..
  var dropZone2 = document.getElementById("drop-target2");
  var ObiWanHealthID = document.getElementById("ObiWanHealthID");
  console.log("dropzone2: : " + dropZone2);
  console.log("ObiWan Health ID: " + ObiWanHealthID);


  // var target = document.getElementById("obiwan");
  // var targetParent = target.parent();

  // if($("obiwan").parent("")){

  // }

  if(dropZone2.contains(ObiWanHealthID)){
    console.log("Your Champion is ObiWan");
  }


}

Attack();


// Check if Other character.health is greater than 0 if not, dead.
// Next opponenet..

//Call the function inside
//ObiWan.Attack(other character);
//console.log(ObiWan.Name);