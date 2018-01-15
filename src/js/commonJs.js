$(document).ready(function(){
  $('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.about-us-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    initialSlide: 2,
    variableWidth: true
  });

  $('.slider-project').slick({
    dots: true
  });

  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    initialSlide: 1,
    cssEase: 'linear'
  });

  $(".button-mob").on("click", function () {
    $(".mobile-menu").toggleClass("active-mob");
  });

  $('.grid').masonry();

  $(".btn-js-1").on("click", function () {
    $(".text-js-1").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-2").on("click", function () {
    $(".text-js-2").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-3").on("click", function () {
    $(".text-js-3").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-4").on("click", function () {
    $(".text-js-4").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-5").on("click", function () {
    $(".text-js-5").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-6").on("click", function () {
    $(".text-js-6").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });
  $(".btn-js-7").on("click", function () {
    $(".text-js-7").slideToggle("text-js-active");
    $(this).toggleClass("plus-minus-icon");
  });

  $('.testimonials-big-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    initialSlide: 2,
    cssEase: 'linear'
  });
});

