/* =================================
          NAV scroll
================================= */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos && $(window).scrollTop() >= 50) {
    document.getElementById("navbar").style.top = "-50%";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background-color', '#222222');
  } else {
    if ($(window).width() < 576) {
      $('.navbar').css('background-color', 'rgba(34,34,34,0.9)');
    } else $('.navbar').css('background-color', 'transparent');
  }
});

/* =================================
  movimenti cursore personalizzato
================================= */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.clientY) + "px; left: " + (e.clientX) + "px;")
})

/* =================================
      z-index in sequenza
================================= */
$(function() {
  var boxes = $("section");
  var z = 0;
  boxes.each(function() {
    this.style.zIndex = z++;
  });

});

/* =================================
    mouse interaction con DOJOne
================================= */
// const el = document.querySelector("#fraseViola");
// const ig = document.querySelector(".mockup");
//
// el.addEventListener("mousemove", (e) => {
//   ig.style.top = -e.screenY/15 + "px";
//   ig.style.left = -e.screenX/15 + "px";
// });

/* =================================
    rileva se dispositivo touch
================================= */
function isTouchScreendevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

if (isTouchScreendevice()) {
  const cursor = document.querySelector('.cursor');
  $(".cursor").hide()
  console.log("I am a touch screen device")
} else console.log("I am a desk screen device")


/* =================================
          banner scroll
================================= */
// var sdegree = 0;
//
// $(window).scroll(function() {
//
//   sdegree++;
//   sdegree = sdegree + 3;
//   $('.bannerContainer').css("transform", "translate(250px,0)");
// });
/* =================================
              FILIPPO
================================= */

// //banner
// $(document).ready(function(){
//     initAll();
//
//     $(window).on("orientationchange", function(){
//         clearTimeout(trigger);
//         initAll();
//     });
//
//     $(window).resize(function(){
//         clearTimeout(trigger);
//         initAll();
//     });
// });
//
// function initAll(){
//     $('.banner-orig').each(function(){
//         initBanner($(this));
//     });
//     trigger = setTimeout(function(){
//        $('.banner-orig').each(function(){
//            changeAnim($(this));
//        });
//     }, 25000);
// }
//
// function initBanner(banner){
//     if(!banner.next().hasClass('banner-clone')){
//      var bannerTwo = banner.clone();
//       bannerTwo.appendTo(banner.parent());
//       bannerTwo.addClass('banner-clone');
//       bannerTwo.removeClass('banner-orig');
//     } else {
//      var bannerTwo = banner.next('.banner-clone');
//     }
//   banner.css('animation', 'scroll-start 25s linear 1');
//   banner.css('-webkit-animation', 'scroll-start 25s linear 1');
//   bannerTwo.css('animation', 'scroll-second 50s linear infinite');
//   bannerTwo.css('-webkit-animation', 'scroll-second 50s linear infinte');
// }
//
// function changeAnim(banner){
//     banner.css('animation', 'scroll 50s linear infinite');
//     banner.css('-webkit-animation', 'scroll 50s linear infinite');
// }
