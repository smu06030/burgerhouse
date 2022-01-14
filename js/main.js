const fadeEls = document.querySelectorAll(".main-image .fade-in");
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    y : 20,
    delay : (index+1)*.5,
    opacity : 1
  });
});

const search = document.querySelector("header .search input");
search.addEventListener('focus',function(){
  search.setAttribute("placeholder","통합검색");
});
search.addEventListener('blur',function(){
  search.setAttribute("placeholder","");
});

new Swiper('.slide-image .swiper-container',{
  autoplay : true,
  loop : true,
  autoplay :{
    delay : 2000
  },
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  }
});

const spyEl = document.querySelector('.slide-image.scroll-spy');
new ScrollMagic.Scene({
  triggerElement : spyEl,
  triggerHook : 0.3
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl,
    triggerHook : 0.8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller);
});