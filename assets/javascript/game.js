$(document).ready(function() {


var fighters = [
  {
    name: "Terra",
    hp: 153,
    attack: 14,
    counterAttack: 12,
    victories: 0,
    losses: 0
  },
  {
    name: "Yuffie",
    hp: 219,
    attack: 22,
    counterAttack: 19,
    victories: 0,
    losses: 0
  },
  {
    name: "Cloud",
    hp: 313,
    attack: 27,
    counterAttack: 23,
    victories: 0,
    losses: 0
  },
  {
  	name: "Tidus",
    hp: 290,
    attack: 28,
    counterAttack: 25,
    victories: 0,
    losses: 0
  }
];


var currentCharacter = "";


//.hover Events That Display Character Statistics
$("#terraImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[0].name + "<br> HP: " + fighters[0].hp + "<br> Attack: " + fighters[0].attack);
}, function() {
	if (currentCharacter !== "") {
		$("#stats").html("<br><br><br>");
	}
})

$("#yuffieImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[1].name + "<br> HP: " + fighters[1].hp + "<br> Attack: " + fighters[1].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})

$("#cloudImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[2].name + "<br> HP: " + fighters[2].hp + "<br> Attack: " + fighters[2].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})

$("#tidusImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[3].name + "<br> HP: " + fighters[3].hp + "<br> Attack: " + fighters[3].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})




$("#terraImage").click (function() {
	currentCharacter = fighters[0].name
	$("#chooseYourWarrior").html(currentCharacter);
	$("#enemy1").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy2").attr("src", "assets/images/characters/cloud.png");
	$("#enemy3").attr("src", "assets/images/characters/tidus.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/terra.png")

	
	



	$("#stats").html("Name: " + fighters[0].name + "<br> HP: " + fighters[0].hp + "<br> Attack: " + fighters[0].attack);
})









})	