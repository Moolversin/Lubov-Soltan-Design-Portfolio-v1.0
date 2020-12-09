// hide #back-to-top first
$("#back-to-top").hide();

// fade in #back-to-top

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#back-to-top').show();
  } else {
    $('#back-to-top').hide();
  }
});

// scroll body to 0px on click
$('#back-to-top a').on("click", function(){
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});