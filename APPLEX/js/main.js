$(".header").click(function () {
  location.replace("index.php?target=index");
});

$(".iphone").click(function () {
  location.replace("index.php?target=iphone");
});

$(".ipad").click(function () {
  location.replace("index.php?target=ipad");
});

$(".watch").click(function () {
  location.replace("index.php?target=watch");
});

$(".airpod").click(function () {
  location.replace("index.php?target=airpod");
});


// 스크롤 시 헤더 토글
var didScroll;
var lastScrollTop = 0;
var delta = 5;    // 동작의 구현이 시작되는 위치
var navbarHeight = $('header').outerHeight();

var didScroll;
// 스크롤시에 사용자가 스크롤했다는 것을 알림
 $(window).scroll(function(event){
    didScroll = true;
  });

// hasScrolled()를 실행하고 didScroll 상태를 재설정
 setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() { // 동작을 구현
    var st = $(this).scrollTop();


    if(Math.abs(lastScrollTop - st) <= delta)
          return;

    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up'); }
      else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }
