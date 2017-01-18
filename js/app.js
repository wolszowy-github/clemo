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

    function autoSwitch(){

      var sliderImg = $('.slider').find('li');
      var sliderBox = $('.sliderBox');

      var interval = setInterval(function () {

      if(index > 1){
        index = 0;
      } else{
        index = index + 1;
      }

      sliderImg.hide();
      sliderImg.eq(index).fadeIn();
      sliderBox.hide();
      sliderBox.eq(index).show('slide', {direction: 'left'}, 300, function(){
        sliderBox.eq(!index).hide();
      });
      sliderPagerDots.css('backgroundColor', 'transparent');
      sliderPagerDots.eq(index).css('backgroundColor','#000000');

    }, 6000); // 5s
    }

    autoSwitch();

  }

  slider();
});
