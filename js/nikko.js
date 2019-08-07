$("ul.nav li.dropdown").hover(function(){
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function(){
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('li.dropdown ul').find('a').on('click', function() {
    window.location = $(this).attr('href');
});

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
    $('#navbar').load("/navbar.html");
});

$(document).on('change', '#burger', function() {
    $('body').toggleClass("menu-open");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $(".backToTop").show()
  } else {
       $(".backToTop").hide();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

