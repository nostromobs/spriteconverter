//Game.js

function lvlone(){
    disp.val("Hello world")
}

$(document).ready(function () {
    var input = $("#input");
    var disp = $("#display");
    var lg = $("#log");
    input.focusin();
    input.keypress(function (e) {
        if (e.which == 13) {
            if(input.val() == "start") {lvlone();};

            lg.prepend("<li>"+input.val()+"</li>");
            input.val("");
        }
    });
})