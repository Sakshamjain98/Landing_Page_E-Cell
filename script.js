$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});


  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    path: 'Animation - 1703414280698.json' 
  });
