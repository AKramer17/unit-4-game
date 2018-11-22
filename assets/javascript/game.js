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
            alert("You win! Yay math!");
            winCount++;
        } else if (current > target) {
            alert("You lose! But let's try again")
            lossCount++;
        }
    });

    $("#cstl2").on("click", function() {
        current += valC2;
    });

    $("#cstl3").on("click", function() {
        current += valC3;
    });

    $("#cstl4").on("click", function() {
        current += valC4;
    });
});