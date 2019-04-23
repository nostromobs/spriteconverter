//Game.js
var input = false,
    disp = false,
    lg = false;

$(document).ready(function () {
    input = $("#input");
    disp = $("#display");
    lg = $("#log");
    input.focusin();
    $(this).click(function(){input.focusin()})
    input.keypress(function (e) {
        lvlFilter(e)
    });
})

var display = new Object({
    loopObj : {i:0,speed:50,disptxt:""},
    RunLevel : function(text){
        display.loopObj.disptxt = text
        display.TypeWriter()
    },
    TypeWriter : function(){
        if (display.loopObj.i < display.loopObj.disptxt.length) {
            disp[0].value += display.loopObj.disptxt.charAt(display.loopObj.i);
            display.loopObj.i++;
            setTimeout(function(){display.TypeWriter()}, display.loopObj.speed);
        } else {
            display.loopObj.i == 0
        }
    }
})

function consoleLog(){
    lg.prepend("<li>"+input.val()+"</li>"); 
    input.val("");
}



function lvlFilter(event){
    if (event.which == 13) {
        switch (input.val()){
            case "start": lvlone(); break;
            default : consoleLog();
        }
    }
}

function lvlone(){
    // display.loopObj.disptxt = "Hello"
    display.RunLevel("Hello world! Welcome to spriteconverter.js").done()
    // display.RunLevel("Please wait for instructions...")
}