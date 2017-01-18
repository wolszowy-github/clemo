$(document).ready(function(){

function slider(){
  var sliderPagerDots = $('.sliderPager').find('.circle');
  var index = 0;

  function bgSlides(){
    var sliderImg = $('.slider').find('li');

      sliderPagerDots.on('click', function(){
        sliderPagerDots.css('backgroundColor', 'transparent');
        $(this).css('backgroundColor','#000000');
        sliderImg.hide();
        index = $(this).index('.circle');
        console.log(index);
        sliderImg.eq(index).show();
      });
    }

    bgSlides();

    function coverSlides(){
      var sliderBox = $('.sliderBox');

      sliderPagerDots.on('click', function(event){
        index = $(this).index('.circle');
        sliderBox.hide();
        sliderBox.eq(index).show('slide', {direction: 'left'}, 300, function(){
          sliderBox.eq(!index).hide();
        });
      });
    }

    coverSlides();
  }

  slider();
});
