//Game.js
var input = false;
    disp = false;
    lg = false;

$(document).ready(function () {
    input = $("#input");
    disp = $("#display");
    lg = $("#log");
    input.focusin();
    input.keypress(function (e) {
        if (e.which == 13) {
            if(input.val() == "start") {lvlone();};

            lg.prepend("<li>"+input.val()+"</li>");
            input.val("");
        }
    });
})


function lvlone(){
    disp.val("Hello world")
}