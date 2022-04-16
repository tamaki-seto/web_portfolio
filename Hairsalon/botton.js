$(function() {
    // 変数にクラスを入れる
    var btn = $('.button');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });