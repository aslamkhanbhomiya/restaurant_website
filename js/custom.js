

  (function () {

    var swiper = new Swiper(".serviceSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
      },
    });


    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);
  
        const { slideIndex, slideNode, slideConfig, player } = current;
  
        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }
  
            player.on('play', (event) => {
                console.log('Started play');
            });
  
            player.on('volumechange', (event) => {
                console.log('Volume change');
            });
  
            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });
  
  
  
  
  
  
  }());
  
  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }