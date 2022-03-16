// $(function() {
// var $win = $(window),
// $cloneNav = $('#navi').clone().addClass('clone-nav').appendTo('body'),
// showClass = 'is-show';
 
// $win.on('load scroll', function() {
// var value = $(this).scrollTop();
// if ( value > 1000 ) {
// $cloneNav.addClass(showClass);
// } else {
//  $cloneNav.removeClass(showClass);
// }
// });
// });

//ナビゲーション固定	
$(function () {
  var menu = $('.sticky_area'),
    offset = menu.offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});

(function ($) {
  var $body = $('body');
  var $head = $('.sticky_area');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$body.hasClass(open)) {
      $body.addClass(open);
      $('.sticky_area').addClass('fixed')
    } else {
      $body.removeClass(open);
      $('.sticky_area').removeClass('fixed');
    }
  });

  //アコーディオン
  jQuery(function ($) {
    $('.article-title').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open');
    });
  });

  // mask close
  $mask.on('click', function () {
    $body.removeClass(open);
  });
})(jQuery);

jQuery(function ($) {
  $('.ac1').on('click', function () {
    $(this).next().slideToggle(100);
    $(this).toggleClass('open')
  });
});

$mask.on('click', function () {
  $body.removeClass(open);
})(jQuery);

//格納メニュー展開時背景固定
$(function () {
  var state = false;
  var scrollpos;

  $('#nav-toggle').on('click', function () {
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({
        'top': -scrollpos
      });
      state = true;
    } else {
      $('body').removeClass('fixed').css({
        'top': 0
      });
      window.scrollTo(0, scrollpos);
      state = false;
    }
  });
  $('.close_area').on('click', function () {
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({
        'top': -scrollpos
      });
      state = true;
    } else {
      $('body').removeClass('fixed').css({
        'top': 0
      });
      window.scrollTo(0, scrollpos);
      state = false;
    }
  });
});



