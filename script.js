$(function(){
//課題１
$('.carousel').slick({
  autoplay: true,
  dots: true,
  fade: true, 
  cssEase: 'linear',
  isFinite: true,
  speed: 600, 
  autoplaySpeed: 5000,
  arrows: false,
});

//課題２
$('a').on('mouseover',function(){
  $(this).animate({
    opacity:0.5,
  },100);
});
  $('a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      
    }, 100);
});


//課題６　モーダル
$('.works img').click(function () {
  const imgSrc = $(this).attr('src');
  $('.big-img').attr('src', imgSrc);
  $('.modal').fadeIn();
  return false
});

// 閉じるボタンをクリックしたときにモーダルを閉じる
$('.close-btn').click(function () {
  $('.modal').fadeOut();
  return false
});

//課題3・4
$('#back-btn').hide();

$(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('#back-btn').fadeIn();
    }else{
      $('#back-btn').fadeOut();
    }
});

$('#back-btn').click(function(){
   $('body,html').animate({
      scrollTop:0
   },500);
   console.log('スクロール')
});
$('a[href="#about"]').click(function(){
  $('body,html').animate({
     scrollTop:600
  },500);
});
$('a[href="#works"]').click(function(){
  $('body,html').animate({
     scrollTop:800
  },500);
});

//課題５
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('section').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});

});

