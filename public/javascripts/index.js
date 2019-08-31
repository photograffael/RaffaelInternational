$(document).ready(function() {


  var options = {
    strings: ['raffael.international', 'raffael.kreativ', 'raffael.interessiert',
      'raffael.motiviert', 'raffael.neugierig', 'raffael.international'],
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 1200,
    loop: false,
    showCursor: true,
    smartBackspace: true,
    onComplete: (self) => {
      console.log("complete");
      self.stop()
      $('.typed-cursor').css('visibility', 'hidden');
    }
  };
  var typeElement = document.getElementById('typed');

  var typed = new Typed(typeElement, options);

});
