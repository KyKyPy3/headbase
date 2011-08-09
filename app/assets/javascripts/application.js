// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require rails.validations
//= require_tree .

function notify(flash_message) 
  { 
    // jQuery: reference div, load in message, and fade in 
    var flash_div = $("#flash") 
    flash_div.html(flash_message); 
    flash_div.fadeIn(400); 
    // use Javascript timeout function to delay calling 
    // our jQuery fadeOut, and hide 
    setTimeout(function(){ 
    flash_div.fadeOut(500, 
      function(){ 
        flash_div.html(""); 
        flash_div.hide()})}, 
    1400); 
  }

$(document).ready(function() {
  $('#navigation a').stop().animate({'marginLeft':'85px'},1000);

  $('#navigation > li').hover(
    function () {
        $('a',$(this)).stop().animate({'marginLeft':'10px'},500);
    },
    function () {
        $('a',$(this)).stop().animate({'marginLeft':'85px'},200);
    }
  );

  $(".signin").click(function(e) {
    e.preventDefault();
    $("fieldset#signin_menu").toggle(150);
    $(".signin").toggleClass("menu-open");
  });

  $("fieldset#signin_menu").mouseup(function() {
    return false
  });

  $(document).mouseup(function(e) {
    if($(e.target).parent("a.signin").length==0) {
      $(".signin").removeClass("menu-open");
      $("fieldset#signin_menu").hide();
    }
  });
  
  $("#flash").hide(); 
  // grab flash message from our div 
  var flash_message = $("#flash").html().trim(); 
  // call our flash display function 
  if(flash_message != "") 
  { 
    notify(flash_message); 
  } 
});