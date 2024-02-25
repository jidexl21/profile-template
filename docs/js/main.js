// optional
// $('#blogCarousel').carousel({
//     interval: 5000
// });

var myCarousel = document.querySelector('#blogCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
