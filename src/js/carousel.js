$("#right").click(function() {
  var currentLeft = parseInt($('.presse_content__flex__items').css('left'));
  $('.presse_content__flex__items').css('left', (currentLeft - 800) + 'px');
});

$('#left').click(function() {
  var currentLeft = parseInt($('.presse_content__flex__items').css('left'));
  $('.presse_content__flex__items').css('left', (currentLeft + 800) + 'px');
});