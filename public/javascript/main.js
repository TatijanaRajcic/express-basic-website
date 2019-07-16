$(".img-gal-photo").on("click", function(){
  $(this).toggleClass("hidden");
  $(this).siblings().toggleClass("hidden");
  $(".content-gal").toggleClass("hidden");
})