$(document).ready(function() {


  var options = {
    strings: ['raffael.international', 'raffael.kreativ',
    'raffael.lernen', 'raffael.motiviert', 'raffael.reisen', 'raffael.international'],
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 1000,
    loop: false,
    showCursor: false,
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
