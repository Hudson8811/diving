$(document).ready(function (){
   $('.js-accord-title').on('click',function (){
      if ($(window).width() < 768){
          event.preventDefault();
          $(this).toggleClass('rotated').siblings('.js-accord-content').slideToggle('fast');
      }
   });
});