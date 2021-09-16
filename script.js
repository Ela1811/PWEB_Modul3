var slideNow = 0;
displaySlide(slideNow);
function geser(n){
  slideNow+=n
  displaySlide(slideNow)
}
function displaySlide(slideNum){
  var slide = document.querySelectorAll('.slide');
  if(slideNum>slide.length-1){slideNow=0}
  if(slideNum<0){slideNow=slide.length-1}
  for(i=0;i<slide.length;i++){
    slide[i].style.display = 'none';
  }
  slide[slideNow].style.display = 'block';
}

$(document).ready(function(){
  $(".tombol").click(function(){
    alert("You are expanding/collapsing description of the article");
    $("p.readmore").toggleClass('active');
    $(".tombol").html(($(".tombol").html() === "Baca Selengkapnya..." ? "Lihat lebih sedikit" : "Baca Selengkapnya..."));
  });
});