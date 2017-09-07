$(document).ready(function() {


var fighters = [
  {
    name: "Terra",
    hp: 180,
    attack: 11,
    counterAttack: 19,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
    name: "Yuffie",
    hp: 209,
    attack: 13,
    counterAttack: 18,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
    name: "Cloud",
    hp: 313,
    attack: 16,
    counterAttack: 28,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
  	name: "Tidus",
    hp: 344,
    attack: 15,
    counterAttack: 33,
    alive: true,
    victories: 0,
    losses: 0
  }
];

var currentEnemyIndex = 99;
var currentCharacterIndex = 99;

var characterSelected = false;
var enemySelected = false;
var attackButtonUnlock = false;

var selectionSound = $("#selectionSound")[0];
var deathSound = $("#deathSound")[0];
var enemySelectionSound = $("#enemySelectionSound")[0];


//.hover Events That Display Character Statistics

$("#terraImage").hover (
	function() {
		if (!characterSelected) {
			$("#stats").html("Name: " + fighters[0].name + "<br> HP: " + 
				fighters[0].hp + "<br> Attack: " + fighters[0].attack);
		}
}, function() {
	if (!characterSelected) {
		$("#stats").html("<br><br><br>");
	}
})

$("#yuffieImage").hover (
	function() {
		if (!characterSelected) {
			$("#stats").html("Name: " + fighters[1].name + "<br> HP: " + 
				fighters[1].hp + "<br> Attack: " + fighters[1].attack);
	}
}, function() {
	if (!characterSelected) {
		$("#stats").html("<br><br><br>");
	}
})

$("#cloudImage").hover (
	function() {
		if (!characterSelected) {
			$("#stats").html("Name: " + fighters[2].name + "<br> HP: " + 
				fighters[2].hp + "<br> Attack: " + fighters[2].attack);
		}
}, function() {
	if (!characterSelected) {
		$("#stats").html("<br><br><br>");
	}
})

$("#tidusImage").hover (
	function() {
		if (!characterSelected) {
			$("#stats").html("Name: " + fighters[3].name + "<br> HP: " + 
				fighters[3].hp + "<br> Attack: " + fighters[3].attack);
		}	
}, function() {
	if (!characterSelected) {
		$("#stats").html("<br><br><br>");
	}
})




//Character Selection Click Functions

$("#terraImage").click (function() {
	if (!characterSelected) {
		selectionSound.play();
		characterSelected = true;
		currentCharacterIndex = 0;
		$("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
		$("#enemy1").attr("src", "assets/images/characters/yuffie.png");
		$("#enemy2").attr("src", "assets/images/characters/cloud.png");
		$("#enemy3").attr("src", "assets/images/characters/tidus.png");
		$("#selectedCharacter").attr("src", "assets/images/characters/terra.png");
		$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
	}
})

$("#yuffieImage").click (function() {
	if (!characterSelected) {
		selectionSound.play();
		characterSelected = true;
		currentCharacterIndex = 1;
		$("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
		$("#enemy1").attr("src", "assets/images/characters/terra.png");
		$("#enemy2").attr("src", "assets/images/characters/cloud.png");
		$("#enemy3").attr("src", "assets/images/characters/tidus.png");
		$("#selectedCharacter").attr("src", "assets/images/characters/yuffie.png");
		$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
	}
})

$("#cloudImage").click (function() {
	if (!characterSelected) {
		selectionSound.play();
		characterSelected = true;
		currentCharacterIndex = 2;
		$("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
		$("#enemy1").attr("src", "assets/images/characters/terra.png");
		$("#enemy2").attr("src", "assets/images/characters/yuffie.png");
		$("#enemy3").attr("src", "assets/images/characters/tidus.png");
		$("#selectedCharacter").attr("src", "assets/images/characters/cloud.png");
		$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
	}
})

$("#tidusImage").click (function() {
	if (!characterSelected) {
		selectionSound.play();
		characterSelected = true;
		currentCharacterIndex = 3;
		$("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
		$("#enemy1").attr("src", "assets/images/characters/terra.png");
		$("#enemy2").attr("src", "assets/images/characters/yuffie.png");
		$("#enemy3").attr("src", "assets/images/characters/cloud.png");
		$("#selectedCharacter").attr("src", "assets/images/characters/tidus.png");
		$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
	}
})





//Choosing Opponents//

$("#enemy1").click (function() {
	
	if (!enemySelected) { 
		enemySelected = true;
		enemySelectionSound.play();
		$("#battleMessage").html("");
		$("#yourAttack").html("");
		$("#opponentAttack").html("");
		$("#enemy1").attr("src", "assets/images/placeholder.jpg");
		
		if (characterSelected && currentCharacterIndex === 0) {	
			currentEnemyIndex = 1;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
				$("#hpLevels").html("<br>" + fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			} 
		}

		else if (characterSelected) {
			currentEnemyIndex = 0;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/terra.png");
				$("#hpLevels").html("<br>" + fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			}
		}
	}
})




$("#enemy2").click (function() {
	
	if (!enemySelected) {
		enemySelected = true;
		enemySelectionSound.play();
		$("#battleMessage").html("");
		$("#yourAttack").html("");
		$("#opponentAttack").html("");
		$("#enemy2").attr("src", "assets/images/placeholder.jpg");
		
		if (characterSelected && currentCharacterIndex === 0) {	
			currentEnemyIndex = 2;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/cloud.png");
				$("#hpLevels").html("<br>" + fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			}
		}

		else if (characterSelected && currentCharacterIndex === 1) {
			currentEnemyIndex = 2;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/cloud.png");
				$("#hpLevels").html("<br>" + fighters[2].name + "'s HP: " + fighters[2].hp);
			}
		}

		else if (characterSelected) {
			currentEnemyIndex = 1;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
				$("#hpLevels").html("<br>" + fighters[1].name + "'s HP: " + fighters[1].hp);
			}
		}
	}
})




$("#enemy3").click (function() {
	
	if (!enemySelected) {
		enemySelected = true;
		enemySelectionSound.play();
		$("#battleMessage").html("");
		$("#yourAttack").html("");
		$("#opponentAttack").html("");
		$("#enemy3").attr("src", "assets/images/placeholder.jpg");
		
		if (characterSelected && currentCharacterIndex === 3) {	
			currentEnemyIndex = 2;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/cloud.png");
				$("#hpLevels").html("<br>" + fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			}
		}

		else if (characterSelected) {
			currentEnemyIndex = 3;
			if (fighters[currentEnemyIndex].alive) {
				$("#currentEnemy").attr("src", "assets/images/characters/tidus.png");
				$("#hpLevels").html("<br>" + fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			}
		}
	}
})





//Attack Button Functions//

if (characterSelected && enemySelected) {
	attackButtonUnlock = true;
}

$("#attackButton").click (function() {
		if (fighters[currentEnemyIndex].alive) {
			fighters[currentEnemyIndex].hp = fighters[currentEnemyIndex].hp - fighters[currentCharacterIndex].attack;
			$("#yourAttack").html("You attack " + fighters[currentEnemyIndex].name + " for " + fighters[currentCharacterIndex].attack + " damage")
			fighters[currentCharacterIndex].attack = fighters[currentCharacterIndex].attack * 2;
			
			if (fighters[currentEnemyIndex].hp > 0) {
				fighters[currentCharacterIndex].hp = fighters[currentCharacterIndex].hp - fighters[currentEnemyIndex].counterAttack;
				$("#opponentAttack").html(fighters[currentEnemyIndex].name + " attacks you for " + fighters[currentEnemyIndex].counterAttack + " damage");
			}

			$("#hpLevels").html(fighters[currentCharacterIndex].name + "'s HP: " + fighters[currentCharacterIndex].hp + "<br>");
			if (fighters[currentEnemyIndex].hp > 0) {
				$("#hpLevels").append(fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
			} else {
				deathSound.play();
				fighters[currentEnemyIndex].hp = 0
				$("#hpLevels").append(fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
				$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
				$("#battleMessage").html("You've defeated " + fighters[currentEnemyIndex].name + "<br>You have " + fighters[currentCharacterIndex].hp + " HP remaining.");
				fighters[currentEnemyIndex].alive = false;
				enemySelected = false;
			}
			
		}
})


$("#restartButton").click (function() {
	window.location.reload(true);
})






})	