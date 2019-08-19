$(document).ready(function(){
    if($("body").find('.block1').length !== 0 ) {
        var scrollPos3 = $('#scroll-animate1').offset().top - 400;
        var once3 = false;

        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();


            if ((scrolled > scrollPos3) && !once3) {
                once3 = true;
                function miaso(){
                    $('.ellips').css('opacity', '0.2').addClass('animated zoomIn');
                    $('.meat').css('opacity', '1').addClass('animated zoomIn');
                }

                function kolbaski(){
                    $('.ellips1').css('opacity', '0.2').addClass('animated zoomIn');
                    $('.meat1').css('opacity', '1').addClass('animated zoomIn');
                }

                function manty(){
                    $('.ellips2').css('opacity', '0.2').addClass('animated zoomIn');
                    $('.manty').css('opacity', '1').addClass('animated zoomIn');
                }
                $('.border_btm, .border_left, .border_top, .border_right').addClass('active');

                setTimeout(miaso, 100);
                setTimeout(kolbaski, 500);
                setTimeout(manty, 900);
            }
        });
    }
});

$(document).ready(function(){

    $('body').on('click', '.p222',function(){
        var id = $(this).data('id');
        $('.row.click_select').removeClass('active animated fadeIn');
        $('#selected-' + id).addClass('active animated fadeIn');

    });


      $('body').on('click', '.p222',function(){
          var id = $(this).data('id');
            $('.row.click_select').removeClass('active animated fadeIn');
              $('#selected-' + id).addClass('active animated fadeIn');
          
      });

    if($("body").find('.block1').length !== 0 ) {
        var scrollPos3 = $('#scroll-animate').offset().top - 400;
        var once3 = false;
        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();
            if ((scrolled > scrollPos3) && !once3) {
                once3 = true;

                function p5(){
                    $('.p1 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p1 img').css('opacity', '1').addClass('animated zoomIn');
                }

                function p2(){
                    $('.p2 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p2 img').css('opacity', '1').addClass('animated zoomIn');
                }

                function p3(){
                    $('.p3 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p3 img').css('opacity', '1').addClass('animated zoomIn');
                }

                function p4(){
                    $('.p4 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p4 img').css('opacity', '1').addClass('animated zoomIn');
                }
                function p6(){
                    $('.p6 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p6 img').css('opacity', '1').addClass('animated zoomIn');
                }

                function p7(){
                    $('.p7 h5').css('opacity', '1').addClass('animated zoomIn');
                    $('.p7 img').css('opacity', '1').addClass('animated zoomIn');
                }
                function p(){
                    $('.s1 img').css('opacity', '1').addClass('animated zoomIn');
                }

                setTimeout(p2, 100);
                setTimeout(p3, 500);
                setTimeout(p4, 800);
                setTimeout(p5, 1000);
                setTimeout(p, 1500);
                setTimeout(p6, 1800);
                setTimeout(p7, 2100);
            }
        });
    }

    $("body").on("click", ".show_okno", function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        $('.okno').slideUp();
        $('.show_okno').removeClass('active');
        if ($('.okno[data-id=' + id + ']').hasClass('active')) {
            $('.okno[data-id=' + id + ']').removeClass('active').slideUp()
        } else if (!$('.okno[data-id=' + id + ']').hasClass('active')) {
            $('.okno[data-id=' + id + ']').addClass('active').slideDown();
            $(this).addClass('active').slideDown();
            if ($('.okno[data-id=' + id + ']').addClass('active').slideDown()) {
                $('.okno').not($('.okno[data-id=' + id + ']')).removeClass('active')
            }
        }
    });

});

$(window).mousemove(function(e) { 
  var change; 
  var xpos=e.clientX;var ypos=e.clientY;var left= change*20; 
  var xpos=xpos*2; ypos=ypos*2;

        $('.parall').css('top',((-76+(ypos/300))+"px"));
        $('.parall').css('right',((21+(xpos/300))+"px"));

        $('.parallax_per1').css('top',((2476+(ypos/100))+"px"));
        $('.parallax_per1').css('left',((11+(xpos/600))+"px"));

        $('.parallax_per2').css('top',((2572+(ypos/220))+"px"));
        $('.parallax_per2').css('left',((42+(xpos/260))+"px"));

        $('.parallax_per3').css('top',((2465+(ypos/180))+"px"));
        $('.parallax_per3').css('right',((95+(xpos/320))+"px"));

        $('.parallax_per4').css('top',((2524+(ypos/180))+"px"));
        $('.parallax_per4').css('right',((2+(xpos/320))+"px"));

        $('.parallax_predl1').css('top',((1741+(ypos/180))+"px"));
        $('.parallax_predl1').css('left',((25+(xpos/320))+"px"));

        $('.predl_p1').css('top',((1837+(ypos/110))+"px"));
        $('.predl_p1').css('left',((25+(xpos/120))+"px"));

        $('.predl_p2').css('top',((1670+(ypos/60))+"px"));
        $('.predl_p2').css('right',((110+(xpos/190))+"px"));

        $('.predl_p3').css('top',((1732+(ypos/180))+"px"));
        $('.predl_p3').css('right',((5+(xpos/110))+"px"));

        $('.yellow_par').css('top',((-72+(ypos/180))+"px"));
        $('.yellow_par').css('left',((-48+(xpos/110))+"px"));

        $('.wop_par').css('top',((16+(ypos/100))+"px"));
        $('.wop_par').css('left',((-42+(xpos/40))+"px"));

        $('.green_par').css('top',((-68+(ypos/50))+"px"));
        $('.green_par').css('right',((63+(xpos/90))+"px"));

        $('.red_par').css('top',((-18+(ypos/150))+"px"));
        $('.red_par').css('right',((-81+(xpos/60))+"px"));

        $('.kol_prx').css('top',((248+(ypos/150))+"px"));
        $('.kol_prx').css('left',((15+(xpos/160))+"px"));

        $('.rose').css('top',((352+(ypos/210))+"px"));
        $('.rose').css('right',((0+(xpos/100))+"px"));

        $('.rose_btm').css('top',((258+(ypos/150))+"px"));
        $('.rose_btm').css('right',((52+(xpos/520))+"px"));


        $('.parallax').css('top',((-267+(ypos/300))+"px"));
        $('.parallax').css('right',((45+(xpos/300))+"px"));
        $('.parallax1').css('top',((-354+(ypos/500))+"px"));
        $('.parallax1').css('right',((235+(xpos/500))+"px"));
        $('.parallax2').css('top',((-303+(ypos/500))+"px"));
        $('.parallax2').css('right',(( 327+(xpos/200))+"px"));
        $('.parallax3').css('top',((36+(ypos/50))+"px"));
        $('.parallax3').css('right',((488+(xpos/50))+"px"));
        $('.parallax4').css('top',((-140+(ypos/500))+"px"));
        $('.parallax4').css('left' ,(( 220+(xpos/500))+"px"));
        $('.parallax5').css('top',((215+(xpos/500))+"px"));
        $('.parallax5 ').css('right',(( 286+(ypos/500))+"px"));
        $('.parallax6').css('top',((199+(xpos/500))+"px"));
        $('.parallax6 ').css('left',(( 190+(ypos/500))+"px"));
        $('.parallax7').css('top',((-100+(xpos/500))+"px"));
        $('.parallax7 ').css('right',(( 305+(ypos/500))+"px"));
        $('.parallax8').css('top',((228+(xpos/500))+"px"));
        $('.parallax8 ').css('right',(( -70+(ypos/500))+"px"));
        $('.parallax9').css('top',((575+(xpos/500))+"px"));
        $('.parallax9 ').css('left',(( 334+(ypos/500))+"px"));
        $('.parallax10').css('top',((265+(xpos/200))+"px"));
        $('.parallax10 ').css('right',(( -235+(ypos/300))+"px"));
        $('.parallax11').css('top',((250+(xpos/100))+"px"));
        $('.parallax11 ').css('right',(( -42+(ypos/70))+"px"));
        $('.parallax12').css('top',((360+(xpos/300))+"px"));
        $('.parallax12 ').css('right',(( 37+(ypos/60))+"px"));
        $('.parallax13 ').css('top',(( -30+(ypos/70))+"px"));
        $('.parallax13 ').css('left',(( 258 +(ypos/250))+"px"));
        $('.parall1').css('right',(( 130+(ypos/60))+"px"));
        $('.parall1').css('top',(( 52+(xpos/800))+"px"));
        $('.parall2').css('right',(( 0+(ypos/70))+"px"));
        $('.parall2').css('top',(( -26+(xpos/70))+"px"));
        $('.parl ').css('right',(( 0+(ypos/60))+"px"));
        $('.par1').css('top',((0+(xpos/500))+"px"));
        $('.par2').css('right',(( 0+(ypos/70))+"px"));
        $('.par2').css('top',((0+(xpos/500))+"px"));
        $('.par3').css('right',(( 0+(ypos/70))+"px"));
        $('.par3').css('top',((0+(xpos/500))+"px"));
        $('.paral1').css('right',((130+(ypos/20))+"px"));
        $('.para11').css('top',((75+(xpos/390))+"px"));
        $('.para111').css('right',((45+(ypos/70))+"px"));
        $('.para111').css('top',((16+(xpos/250))+"px"));
        $('.para222').css('right',((-120+(ypos/50))+"px"));
        $('.para222').css('top',((197+(xpos/400))+"px"));
        $('.para333').css('left',((45+(ypos/90))+"px"));
        $('.para333').css('top',((405+(xpos/200))+"px"));
        $('.para444').css('left',(( 185+(ypos/20))+"px"));
        $('.para444').css('top',((420+(xpos/200))+"px"));
        $('.para555').css('right',((86+(ypos/40))+"px"));
        $('.para555').css('top',((515+(xpos/200))+"px"));
        $('.Parallax').css('right',(( 0+(ypos/40))+"px"));
        $('.Parallax').css('top',((0+(xpos/200))+"px"));
        $('.PAR1').css('right',(( 0+(ypos/40))+"px"));
        $('.PAR1').css('top',((0+(xpos/200))+"px"));
        $('.PAR2').css('right',(( 0+(ypos/80))+"px"));
        $('.PAR2').css('top',((0+(xpos/500))+"px"));
        $('.PAR3').css('right',(( 0+(ypos/50))+"px"));
        $('.PAR3').css('top',((0+(xpos/600))+"px"));
        $('.PAR4').css('right',(( 0+(ypos/200))+"px"));
        $('.PAR4').css('top',((0+(xpos/300))+"px"));
        $('.PAR5').css('right',(( 0+(ypos/200))+"px"));
        $('.PAR5').css('top',((0+(xpos/300))+"px"));
        $('.PAR6').css('right',(( 0+(ypos/300))+"px"));
        $('.PAR6').css('top',((0+(xpos/400))+"px"));
        $('.PARA1').css('right',(( 0+(ypos/300))+"px"));
        $('.PARA1').css('top',((0+(xpos/400))+"px"));
        $('.parx').css('right',(( 0+(ypos/300))+"px"));
        $('.parx').css('top',((0+(xpos/400))+"px"));
        $('.parx1').css('right',(( 0+(ypos/300))+"px"));
        $('.parx1').css('top',((0+(xpos/200))+"px"));
        $('.parx2').css('right',(( 0+(ypos/500))+"px"));
        $('.parx2').css('top',((0+(xpos/100))+"px"));
        $('.parx3').css('right',(( 0+(ypos/200))+"px"));
        $('.parx3').css('top',((0+(xpos/600))+"px"));
        $('.parx4').css('right',(( 0+(ypos/200))+"px"));
        $('.parx4').css('top',((0+(xpos/500))+"px"));
        });



var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
  }





