"use strict";
$(document).ready(function() {
    //function for google custom search is from google api docs
    //jquery / api is having trouble loading??
    //UPDATE: fixed conflict
    //UPDATE: swapped index and landing pages! refs may be switched below!

    console.log("ready! wireframe is @ https://wireframe.cc/9HBged");



    //GCSE BELOW THIS LINE
    //code is for the landing page google custom search bar api


    (function() {
        var cx = '010106870863249008865:hfaciltwsa8';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);

    })();

    //ALYIEN / HIGHCHARTS API BELOW THIS LINE
    //code is for creating a chart on the source page
    //AYLIEN should use the search query from GCSE input (on landing page)


    var searchTerm = "";

    //Sterm will be used to store text input and dynamicly load the chart
    //HIGHCHARTS CODE WILL GO BELOW (above?) THIS LINE
    // this code will dynamicly create a chart based on the dataARR array


function createHC(e){

e.preventDefault();
Highcharts.theme = {
   colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
var searchTerm = $('#analysisSearch').val();
//console.log(searchTerm);
if (searchTerm.length >= 3) {

}else{
  return;
}

  var url = "https://g-aylien.herokuapp.com/api/v1/histograms?field=social_shares_count&interval.width=100&interval.start=1&interval.end=3000&text=" + searchTerm + "&published_at.start=NOW-30DAYS&published_at.end=NOW&language=en&sort_by=social_shares_count";


  var dataARR = [];

  var $xhr = $.getJSON(url);

  $xhr.done(function(data) {
    if ($xhr.status !== 200) {

      return;
    }

    for (var keys in data.intervals) {

        dataARR.push(data.intervals[keys].count);

      //console.log(data);
    }
console.log(dataARR);
var dataNewARR = dataARR.slice(3, 14);
console.log(dataNewARR);

    var options = {
      chart: {
        renderTo: 'container'

      },
      title: {
        text: 'Search Analysis'
      },
      subtitle: {
        text: 'by social media shares'
      },
      xAxis: {
        categories: ['Today', 'Yesterday', '2 days ago', '3 days ago', '4 days ago', '5 days ago', '6 days ago', '7 days ago', '8 days ago', '9 days ago', '10 days ago']
      },
      yAxis: {
        title: {
          text: 'Social Media Shares'
        }
      },
      series: [{
        name: searchTerm,
        type: 'column'

      }]
    };

    $('#analysisSearch').val("");
    searchTerm = $('#analysisSearch').val();

    options.series[0].data = dataNewARR;
    //console.log(dataARR);
    var chart = new Highcharts.Chart(options)

    //console.log(chart);
    //updated: Create Chart and insert into document
  });
  $('#inverted').on('click',function () {
          chart.update({
              chart: {
                  inverted: true,
                  polar: false
              },
              subtitle: {
                  text: 'Inverted'
              }
          });
      });

  $xhr.fail(function(err) {
    console.log(err);
  });



}
// end of createHC function
$('#analysisSearchButton').on('click',createHC);





    //BACKGROUND PHOTO RANDOM BELOW THIS LINE
    //code is for landing page banner div image


    var counter = Math.floor((Math.random() * 15) + 1);
    console.log(counter);
    $('#imageBannerDiv').css('background-image', 'url("img/photo-' + counter + '.jpeg")');

    function changeImage() {
        console.log("iwasclicked " + counter);
        counter++;
        if (counter > 16) {
            counter = 1;
        }
        $('#imageBannerDiv').css('background-image', 'url("img/photo-' + counter + '.jpeg")');
    }
    $("#image_button").on("click", changeImage);
});


//PHASER ANIMATION BELOW THIS LINE
//code is for index page canvas div


var game = new Phaser.Game('100', '100', Phaser.AUTO, 'canvasDiv', {
    preload: preload,
    create: create
});

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
    "Subject,_",
    "or location._",
    " ",
    "  S O U R C E S E A R C H"
];

var text;
var index = 0;
var line = '';

function preload() {
    game.load.image('backgnd', 'img/photo-9.jpeg');
}

function create() {
    game.stage.backgroundColor = 'rgba(135,155,135,0.5)';
    game.add.image(0, 0, 'backgnd');

    text = game.add.text(60, 185, '', {
        font: "45pt Expletus Sans",
        fill: "#0f0f0f",
        stroke: "#119f4e",
        strokeThickness: 2
    });

    nextLine();

}

function updateLine() {

    if (line.length < content[index].length) {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    } else {
        //  Wait 2 seconds then start a new line
        game.time.events.add(Phaser.Timer.SECOND * 1, nextLine, this);
    }

}

function nextLine() {
    index++;
    if (index < content.length) {
        line = '';
        game.time.events.repeat(80, content[index].length + 1, updateLine, this);
    }
}
