$("#player1").click(function(){
    $("#gameboard1").css("display", "inline-block");
    $("#gameboard2").css("display", "none");

});

$("#player2").click(function(){
    $("#gameboard2").css("display", "inline-block");
    $("#gameboard1").css("display", "none");
});

$(".box").click(function(){
    $("#displayEncounter").css("display", "block");

});

