$(document).ready(function(){
  $('.vineName').html( randomVine() );
});

$('.another-button').click(function(){
  $('.vineName').animate({
    opacity: '0'
  }, 100, function(){
    $('.vineName').html( `"${randomVine()} ${randomEmoji()} ${randomHashtag()}"` );
    $('.vineName').animate({
      opacity: '1'
    }, 100)
  });

  $('.another-button').addClass('animated tada')
  setTimeout(function(){ $('.another-button').removeClass('tada') }, 1000)
});
