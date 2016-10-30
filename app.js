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

    var images = ['https://unsplash.com/collections/325867/minimalism?photo=JdUzpKdBsbI','https://unsplash.com/collections/325867/minimalism?photo=Bfrk9RCOhRE','https://unsplash.com/collections/325867/minimalism?photo=-S6R604fv_c','https://unsplash.com/collections/325867/minimalism?photo=HeFNnUaDiWc','https://unsplash.com/collections/325867/minimalism?photo=1fyccRaS_u4'];




    $('#imageBannerDiv')

    function changeImage() {
      console.log("iwasclicked");

    }
    $("#image_button").on("click", changeImage);

});
