$(document).ready(function() {

    var fighters = [{
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

    var currentEnemyIndex = null;
    var currentCharacterIndex = null;
    var initialAttack = null;

    var characterSelected = false;
    var enemySelected = false;
    var attackButtonUnlock = false;

    var selectionSound = $("#selectionSound")[0];
    var deathSound = $("#deathSound")[0];
    var enemySelectionSound = $("#enemySelectionSound")[0];

    var characterIds = ["terraImage", "yuffieImage", "cloudImage", "tidusImage"];
    characterIds.forEach(function(id, index) {
        $("#" + id).hover(function() {
            if (!characterSelected) {
                $("#stats").html("Name: " + fighters[index].name + "<br> HP: " + fighters[index].hp + "<br> Attack: " + fighters[index].attack);
            }
        }, function() {
            if (!characterSelected) {
                $("#stats").html("<br><br><br>");
            }
        }).click(function() {
            if (!characterSelected) {
                selectionSound.play();
                characterSelected = true;
                currentCharacterIndex = index;
                initialAttack = fighters[currentCharacterIndex].attack;
                $("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
                updateCharacterImages();
            }
        });
    });

    function updateCharacterImages() {
        var enemyImages = ["enemy1", "enemy2", "enemy3"];
        var characterImages = ["terra", "yuffie", "cloud", "tidus"];
        for (var i = 0; i < 3; i++) {
            var enemyIndex = (currentCharacterIndex + i + 1) % 4;
            $("#" + enemyImages[i]).attr("src", "assets/images/characters/" + characterImages[enemyIndex] + ".png");
        }
        $("#selectedCharacter").attr("src", "assets/images/characters/" + characterImages[currentCharacterIndex] + ".png");
        $("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
    }

    var enemyIds = ["enemy1", "enemy2", "enemy3"];
    enemyIds.forEach(function(id, index) {
        $("#" + id).hover(function() {
            if (characterSelected && !enemySelected) {
                var enemyIndex = (currentCharacterIndex + index + 1) % 4;
                $("#stats").html("Name: " + fighters[enemyIndex].name + "<br> HP: " + fighters[enemyIndex].hp + "<br> Attack: " + fighters[enemyIndex].attack);
            }
        }, function() {
            if (characterSelected && !enemySelected) {
                $("#stats").html("<br><br><br>");
            }
        }).click(function() {
            if (characterSelected && !enemySelected) {
                enemySelectionSound.play();
                enemySelected = true;
                currentEnemyIndex = (currentCharacterIndex + index + 1) % 4;
                $("#currentEnemy").attr("src", "assets/images/characters/" + characterImages[currentEnemyIndex] + ".png");
                attackButtonUnlock = true;
            }
        });
    });

    $("#attackButton").click(function() {
        if (attackButtonUnlock && fighters[currentEnemyIndex].alive) {
            fighters[currentEnemyIndex].hp = fighters[currentEnemyIndex].hp - fighters[currentCharacterIndex].attack;
            $("#yourAttack").html("You attack " + fighters[currentEnemyIndex].name + " for " + fighters[currentCharacterIndex].attack + " damage");
            fighters[currentCharacterIndex].attack = fighters[currentCharacterIndex].attack + initialAttack;

            if (fighters[currentEnemyIndex].hp > 0) {
                fighters[currentCharacterIndex].hp = fighters[currentCharacterIndex].hp - fighters[currentEnemyIndex].counterAttack;
                $("#opponentAttack").html(fighters[currentEnemyIndex].name + " attacks you for " + fighters[currentEnemyIndex].counterAttack + " damage");
            }

            $("#hpLevels").html(fighters[currentCharacterIndex].name + "'s HP: " + fighters[currentCharacterIndex].hp + "<br>");
            if (fighters[currentEnemyIndex].hp > 0) {
                $("#hpLevels").append(fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
            } else {
                deathSound.play();
                fighters[currentEnemyIndex].hp = 0;
                $("#hpLevels").append(fighters[currentEnemyIndex].name + "'s HP: " + fighters[currentEnemyIndex].hp);
                $("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
                $("#battleMessage").html("You've defeated " + fighters[currentEnemyIndex].name + "<br>You have " + fighters[currentCharacterIndex].hp + " HP remaining.");
                fighters[currentEnemyIndex].alive = false;
                enemySelected = false;
            }
        }
    });

    $("#restartButton").click(function() {
        window.location.reload(true);
    });
});
