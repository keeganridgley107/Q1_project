"use strict";
$(document).ready(function() {
    //function for google custom search is from google api docs
    //jquery is having trouble loading??

    (function() {
        var cx = '010106870863249008865:hfaciltwsa8';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();



    console.log("ready! wireframe is @ https://wireframe.cc/9HBged");


    var counter = 1;
    $('#imageBannerDiv').css('background-image', 'url("img/photo-' + counter + '.jpeg")');




    function changeImage() {
        console.log("iwasclicked " + counter);
        counter++;
        if (counter > 8) {
            counter = 1;
        }
        $('#imageBannerDiv').css('background-image', 'url("img/photo-' + counter + '.jpeg")');
    }
    $("#image_button").on("click", changeImage);
});


var game = new Phaser.Game('100', '100', Phaser.AUTO, 'canvasDiv', { preload: preload, create: create });

var content = [
    "_",
    "Searching for source documents?_",
    "_",
    " ",
    "_",
    "You need SourceSearch_",
    "_",
    " ",
    "_",
    "SourceSearch_",
    "Quickly search by filetype,_",
    "Subject matter,_",
    "or location._",
    " ",
    "  S O U R C E S E A R C H"
  ];

var text;
var index = 0;
var line = '';

function preload() {
    game.load.image('backgnd', 'img/photo-9.jpg');
}

function create() {
    game.stage.backgroundColor = 'rgba(135,155,135,0.5)';
    game.add.image(0, 0, 'backgnd');

    text = game.add.text(60, 185, '', { font: "45pt Expletus Sans", fill: "#0f0f0f", stroke: "#119f4e", strokeThickness: 2 });

    nextLine();

}

function updateLine() {

    if (line.length < content[index].length)
    {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    }
    else
    {
        //  Wait 2 seconds then start a new line
        game.time.events.add(Phaser.Timer.SECOND * 1, nextLine, this);
    }

}

function nextLine() {
    index++;
    if (index < content.length)
    {
        line = '';
        game.time.events.repeat(80, content[index].length + 1, updateLine, this);
    }
}
