$('#btnRedEco').hide();
$('#btnRedTimer').hide();
$('#btnPowerOn').hide();
// $('.nav-pop-out').hide();


$('#navBtn').click(function(){
  $('.nav-pop-out').show();
});
$('#closeBtn').click(function(){
  $('.nav-pop-out').hide();
});

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


$('#Arrow_Button_Up').click(function(){
  // $('.cls-1').css('fill','rgb(221, 41, 41)'); changes color
  var btn = $(".btn-arrow-up")
  btn.animate({opacity: 0}, 'fast')
  btn.animate({opacity: 1}, 'fast')
});
$('#Arrow_Button_Down').click(function(){
  // $('.cls-1').css('fill','rgb(221, 41, 41)'); changes color
  var btn = $(".btn-arrow-down")
  btn.animate({opacity: 0}, 'fast')
  btn.animate({opacity: 1}, 'fast')
});
