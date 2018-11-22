$(document).ready(function() {

    var current = 0;
    var winCount = 0;
    var lossCount = 0;
    var target = Math.floor(Math.random() * 150 + 39);

    $("#targetNumber").text(target);

    var valC1 = Math.floor(Math.random() * 17 + 1);
    var valC2 = Math.floor(Math.random() * 17 + 1);
    var valC3 = Math.floor(Math.random() * 17 + 1);
    var valC4 = Math.floor(Math.random() * 17 + 1);

    $("#cstl1").on("click", function() {
        current += valC1;
        $("#playerNumber").text(current);
        if (current === target) {
            win();
        } else if (current > target) {
            lose();
        }
    });

    $("#cstl2").on("click", function() {
        current += valC2;
        $("#playerNumber").text(current);
        if (current === target) {
            win();
        } else if (current > target) {
            lose();
        }
    });

    $("#cstl3").on("click", function() {
        current += valC3;
        $("#playerNumber").text(current);
        if (current === target) {
            win();
        } else if (current > target) {
            lose();
        }
    });

    $("#cstl4").on("click", function() {
        current += valC4;
        $("#playerNumber").text(current);
        if (current === target) {
            win();
        } else if (current > target) {
            lose();
        }
    });

    function win() {
        alert("You win! Yay math!");
        winCount++;
        $("#wins").text(winCount);
        reset();
    }

    function lose() {
        alert("You lose! But let's try again");
        lossCount++;
        $("#losses").text(lossCount);
        reset();
    }

    function reset() {
        target = Math.floor(Math.random() * 150 + 39);
        $("#targetNumber").text(target);
        valC1 = Math.floor(Math.random() * 17 + 1);
        valC2 = Math.floor(Math.random() * 17 + 1);
        valC3 = Math.floor(Math.random() * 17 + 1);
        valC4 = Math.floor(Math.random() * 17 + 1);
        current = 0;
        $("#playerNumber").text(current);
      }

});