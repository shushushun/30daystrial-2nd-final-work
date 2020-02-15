$(function(){

  // Header Settings
  $(window).on('scroll', function (){
    var $menu = $('#navbar li a');
    if ($(this).scrollTop() > 648) {
      $('#navbar').css('background-color', '#3E3E3E');
      $menu.css('color', '#fff');
      $menu.hover(
        function (){
          $(this).css('border-bottom', '1px solid #fff');
        },
        function (){
          $(this).css('border-bottom', 'none');
        }
      );
    } else {
      $('#navbar').css('background-color', 'rgba(255, 255, 255, 0.102)');
      $menu.css('color', '#3E3E3E');
      $menu.hover(
        function (){
          $(this).css('border-bottom', '1px solid #3E3E3E');
        },
        function (){
          $(this).css('border-bottom', 'none');
        }
      );
    }
  });

  // Moving Scroll
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var adjust = 80;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, "speed", "swing");
    return false;
  });

  // Current Menu Display
  var scrollMenu = function() {
    var array = {
      '#hoge': 0,
      '#news': 0,
      '#service': 0,
      '#results': 0,
      '#price': 0,
      '#comments': 0,
      '#faqs': 0,
      '#contact': 0
    };
  var $globalNavi = new Array();
    for (var key in array) {
      if ($(key).offset()) {
        array[key] = $(key).offset().top - 80;
        $globalNavi[key] = $('#navbar li a[href="' + key + '"], #drawer-nav li a[href="' + key + '"]');
      }
    }
    $(window).scroll(function () {
      for (var key in array) {
        if ($(window).scrollTop() > array[key] - 50) {
          $('#navbar li a, #drawer-nav li a').each(function() {
            $(this).removeClass('active');
          });
          $globalNavi[key].addClass('active');
        }
      }
    });
  }
  scrollMenu();

  // Drawer Setting
  $('#drawer-open').on('click', function (){
    $('#over-lay, #drawer-close').show();
    $('#drawer-wrapper').animate({width: 'toggle'}, '1500');
  });
  $('#drawer-close').on('click', function (){
    $('#over-lay').hide();
    $('#drawer-wrapper').animate({width: 'toggle'}, '1500');
    $('#drawer-close').hide();
  });

  // Accordion Setting
  $('.qa-list-item').on('click', function (){
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('.qa-title img').attr('src', './img/min/PC/plus.svg');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('.qa-title img ').attr('src', './img/min/PC/minus.svg');
    }
  });

  // Swiper Setting
  var mySwiper = new Swiper ('.swiper-container', {
    loop: false,
    width: 276,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: -50,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    breakpoints: {
      577: {
        width: 422,
        slidesOffsetBefore: 110,
        slidesOffsetAfter: -500,
        spaceBetween: 40,
      },
    }
  });
});

// Scroll to Top
jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.scroll-btn').fadeIn(300, "swing");
  } else {
    jQuery('.scroll-btn').fadeOut(300, "swing");
  }
});
