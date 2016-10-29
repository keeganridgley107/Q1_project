"use strict";
$( document ).ready(function() {
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



    console.log( "ready!" );


    function changeImage() {
      console.log("iwasclicked");

      var text = require('textbelt');

text.send('5038036811', 'A sample text message!', undefined, function(err) {
  if (err) {
    console.log(err);
  }
});
    }
    $("#image_button").on("click", changeImage);

});
