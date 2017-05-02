$(document).ready(function () {


  //  //   example parallax
  //  function parallax() {
  //    var scrolled = $(window).scrollTop();
  //    $('.product-thumb:even').css('transform', 'translate3d(0, ' + scrolled * 0.04 + 'px, 0)');
  //    
  //  };
  //  $(window).scroll(function (e) {
  //    parallax();
  //  });


  $("a.btn.detail-button").click(function(e){
    event.preventDefault();
    $(this).parent().parent().addClass( "still" );
    $(".product-thumb").addClass( "goout" );
    var href = $(this).attr('href');
    setTimeout(function () { 
      document.location.href = href;  
      }, 500);
  })
    


    $(".product-page-title h1").each(function(){
        var voteNumber = $(this).text();
        if (voteNumber > 60) {
            $(this).addClass("big-size");
        } else {
            $(this).addClass("small-size")
        };
    });

  
  
  // for input max length on product page comment
  var maxLengthTitle = 60;
  var maxLengthComment = 230;
  $('#comment-title').keyup(function () {
    var length = $(this).val().length;
    var length = maxLengthTitle - length;
    $('.maxlengthtitle span').text(length);
  });
  $('#comment-body').keyup(function () {
    var length = $(this).val().length;
    var length = maxLengthComment - length;
    $('.maxlengthbody span').text(length);
  });



  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('header').addClass('resize');
    } else {
      $('header').removeClass('resize');
    }
  });


  $(".to-second-step").click(function () {
    event.preventDefault();
    if ($('#message').val().length == 0) {
      $('#message').addClass('red');
    } else {
      $(this).parent().addClass("go-out");
      $(this).parent().next().addClass("go-show");
    };

  });
  $(".to-third-step").click(function () {
    event.preventDefault();
    if ($('#name').val().length == 0) {
      $('#name').addClass('red');
    } else {
      $(this).parent().addClass("go-out");
      $(this).parent().next().addClass("go-show");
    };


  });
  
  
  
  
  $("button.open-off-menu").click(function () {
    $("main").toggleClass("menu");
    $(".off-canvas-header").toggleClass("show");
  });
  
  
  
  $(".open-contact-form").click(function () {
    event.preventDefault();
    $(".contact-form-box").addClass("show");
    $(".off-canvas-header").removeClass("show");
    $("main").removeClass("menu");
  });
  $(".close-contact").click(function () {
    event.preventDefault();
    $(".contact-form-box").removeClass("show");
  });





  
  
  


  
  $('.slider-product').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1

  });
  
  
  
  
  
  // rating
  // Please, if you have the opportunity, do it normally
  
  
  
  
  $(".open-rating-design").click(function () {
    $(this).addClass("to-hide");
    $(".design-rating .count-rating").addClass("to-show");
    $(".design-rating .rating-bar.user-soroka").addClass("done-rating");
    $(".design-rating .user-rating-controls").slideUp();
  });
  
  
  $(".open-rating-functional").click(function () {
    $(this).addClass("to-hide");
    $(".functional-rating .count-rating").addClass("to-show");
    $(".functional-rating .rating-bar.user-soroka").addClass("done-rating");
    $(".functional-rating .user-rating-controls").slideUp();
  });
  $(".open-rating-quality").click(function () {
    $(this).addClass("to-hide");
    $(".quality-rating .count-rating").addClass("to-show");
    $(".quality-rating .rating-bar.user-soroka").addClass("done-rating");
    $(".quality-rating .user-rating-controls").slideUp();
  });
  
  $('.design-rating input').click(function () {
      var valueInput = $(this).val();
      $('.design-rating .count-rating span').text(valueInput);
      $(".open-rating-design").addClass("to-show");
      $(".design-rating .rating-text").addClass("to-hide");
      
      if ($(this).val() == ('1') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','10%');
      } else if ($(this).val() == ('2') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','20%');
      } else if ($(this).val() == ('3') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','30%');
      } else if ($(this).val() == ('4') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','40%');
      } else if ($(this).val() == ('5') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','50%');
      } else if ($(this).val() == ('6') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','60%');
      } else if ($(this).val() == ('7') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','70%');
      } else if ($(this).val() == ('8') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','80%');
      } else if ($(this).val() == ('9') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','90%');
      } else if ($(this).val() == ('10') && $(this).is(':checked')) {
          $('.design-rating .user-soroka .bar').css('width','100%');
      }
    });
  
  
  
  $('.functional-rating input').click(function () {
      var valueInput = $(this).val();
      $('.functional-rating .count-rating span').text(valueInput);
      $(".open-rating-functional").addClass("to-show");
      $(".functional-rating .rating-text").addClass("to-hide");
      
      
      if ($(this).val() == ('1') && $(this).is(':checked')) {
          
          $('.functional-rating .user-soroka .bar').css('width','10%');
      } else if ($(this).val() == ('2') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','20%');
      } else if ($(this).val() == ('3') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','30%');
      } else if ($(this).val() == ('4') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','40%');
      } else if ($(this).val() == ('5') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','50%');
      } else if ($(this).val() == ('6') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','60%');
      } else if ($(this).val() == ('7') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','70%');
      } else if ($(this).val() == ('8') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','80%');
      } else if ($(this).val() == ('9') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','90%');
      } else if ($(this).val() == ('10') && $(this).is(':checked')) {
          $('.functional-rating .user-soroka .bar').css('width','100%');
      }
    });
  
  $('.quality-rating input').click(function () {
      var valueInput = $(this).val();
      $('.quality-rating .count-rating span').text(valueInput);
      $(".open-rating-quality").addClass("to-show");
      $(".quality-rating .rating-text").addClass("to-hide");
      if ($(this).val() == ('1') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','10%');
      } else if ($(this).val() == ('2') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','20%');
      } else if ($(this).val() == ('3') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','30%');
      } else if ($(this).val() == ('4') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','40%');
      } else if ($(this).val() == ('5') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','50%');
      } else if ($(this).val() == ('6') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','60%');
      } else if ($(this).val() == ('7') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','70%');
      } else if ($(this).val() == ('8') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','80%');
      } else if ($(this).val() == ('9') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','90%');
      } else if ($(this).val() == ('10') && $(this).is(':checked')) {
          $('.quality-rating .user-soroka .bar').css('width','100%');
      }
    });
  
  
  $('.slider-product').on('init', function (event, slick) {
    //init code goes here
  }).on('afterChange', function (e, o) {
    //on change slide = do action
    $('iframe').each(function () {
      $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
  }).slick();
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

});