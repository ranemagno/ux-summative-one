// navigation ------------------------------------------------------------------
$('#navPopOut').hide();

$('#navBtn').click(function(){
  $('.nav-pop-out').show();
});
$('#closeBtn').click(function(){
  $('.nav-pop-out').hide();
});

// remote button interactions --------------------------------------------------
$('#btnRedEco').hide();
$('#btnRedTimer').hide();
$('#btnPowerOn').hide();

$('#btnWhiteEco').click(function(){
  $('#btnWhiteEco').hide();
  $('#btnRedEco').show();
  $('#btnRedEco').css('filter', 'none');
});
$('#btnRedEco').click(function(){
  $('#btnRedEco').hide();
  $('#btnWhiteEco').show();
});
$('#btnWhiteTimer').click(function(){
  $('#btnWhiteTimer').hide();
  $('#btnRedTimer').show();
  $('#btnRedTimer').css('filter', 'none');
});
$('#btnRedTimer').click(function(){
  $('#btnRedTimer').hide();
  $('#btnWhiteTimer').show();
});
$('#btnPowerOff').click(function(){
  $('#btnPowerOff').hide();
  $('#btnPowerOn').show();
});
$('#btnPowerOn').click(function(){
  $('#btnPowerOn').hide();
  $('#btnPowerOff').show();
});

// arrow buttons push animation -----------------------------------------------
$('#Arrow_Button_Up').click(function(){
  // $('.cls-1').css('fill','rgb(221, 41, 41)'); changes color
  var btn = $(".btn-arrow-up")
  btn.animate({opacity: 0}, 'fast')
  btn.animate({opacity: 1}, 'fast')
});
$('#Arrow_Button_Down').click(function(){
  var btn = $(".btn-arrow-down")
  btn.animate({opacity: 0}, 'fast')
  btn.animate({opacity: 1}, 'fast')
});




// Eco timer page interactions -------------------------------------------------
// need to figure out way to get this looping lol
$('#btnAutoAdjust').click(function(){
  $('.btn-auto-adjust').attr('src', 'graphics/Slide Button Off.svg')
  $('#btnAutoAdjust').click(function(){
    $('.btn-auto-adjust').attr('src', 'graphics/Slide Button On.svg')
    $('#btnAutoAdjust').click(function(){
      $('.btn-auto-adjust').attr('src', 'graphics/Slide Button Off.svg')
      $('#btnAutoAdjust').click(function(){
        $('.btn-auto-adjust').attr('src', 'graphics/Slide Button On.svg')
        $('#btnAutoAdjust').click(function(){
          $('.btn-auto-adjust').attr('src', 'graphics/Slide Button Off.svg')
        });
      });
    });
  });
});
