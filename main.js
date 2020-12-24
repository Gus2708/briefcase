$(document).ready(function(){

    var clipboard = new ClipboardJS('.btn')

    clipboard.on('success', function(e) {
        console.log('Accion:', e.action);
        console.info('Texto:', e.text);
        console.info('Trigger:', e.trigger);
    });

    //alert clipborad event
    $('.btn').click(function(){
        $('.btn .alert').animate({
            opacity: '1'
        }, 300, function(){ 
            $('.btn .alert').animate({
                opacity: '0'
            }, 2500);
         });
    });

    $('#fullpage').fullpage({

		//options here
        autoScrolling:true,
        css3: true,
        verticalCentered: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease-out',
        anchors:['section1'],
        fixedElements: '#header, .arrow',
        scrollHorizontally: false,
        loopHorizontal: false,
        recordHistory: false,
        controlArrows: true,
        slidesNavigation: false,
        keyboardScrolling: true,
        scrollBar: false,
        scrollOverflow: true,
        scrollOverflowOptions: {
            mouseWheel: true,
            scrollbars: false
        },
        // animations after slide load
        afterSlideLoad: function( section, origin, destination, direction){
            var loadedSlide = this;
            // slide 1
            if($('.slide1').hasClass('active')){
                $('.progress .progress-bar').animate({
                    width: '1%'
                }); 

                $('.header .name').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                })
                    
                $('.header .icon').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                });

                if((window).outerWidth <= 768){
                    $('.header').css({
                    background: '#020E1C'
                    });

                    $('.header .name').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    })
                        
                    $('.header .icon').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    });
                };

               /* $('.fp-controlArrow.fp-prev').css({
                    'border-color': 'transparent #fff transparent transparent'
                });

                $('.fp-controlArrow.fp-next').css({
                    'border-color': 'transparent transparent transparent #fff'
                });*/
            }

            // slide 2
            if($('.slide2').hasClass('active')){
                $('.progress .progress-bar').animate({
                    width: '25%'
                });

                $('.header .name').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                });
                    
                $('.header .icon').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                });

                if((window).outerWidth <= 768){
                    $('.header').css({
                    transition: 'all .3s ease',
                    background: '#020E1C'
                    });

                    $('.header .name').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    });
                        
                    $('.header .icon').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    });
                };

                // arrow color in dark bg
                $('.fp-controlArrow.fp-prev').css({
                    'border-right': '3px solid #fff',
                    'border-bottom': '3px solid #fff'
                });

                $('.fp-controlArrow.fp-next').css({
                    'border-right': '3px solid #fff',
                    'border-bottom': '3px solid #fff'
                });

            };

            // slide 3
            if($('.slide3').hasClass('active')){
                $('.progress .progress-bar').animate({
                    width: '50%'
                });
    
                 $('.header .name').css({
                    color: '#1b1c1e',
                    transition: 'none'
                 });
                    
                $('.header .icon').css({
                    color: '#020e1c',
                    transition: 'none'
                });

                $('.slide3.main').css({
                    background: '#f4f4f4'
                });

                if((window).outerWidth <= 768){
                    $('.header').css({
                        background: '#f4f4f4'
                        }, 100);
                        
                    $('.header .name').css({
                        color: '#1b1c1e'
                     });
                        
                    $('.header .icon').css({
                        color: '#020e1c'
                    });
                };

                // cards effect fadein
                $('#card-list .card').each(function(index, element){ 
                    $(this).animate({
                        opacity: '1'
                    },1000 + (index * 500));
                });

                // header bg in -768px size
                if((window).outerWidth <= 768){

                    $('#card-list .card').each(function(index, element){ 
                        $(this).css({
                            opacity: '1'
                        });
                    });
                };

                // arrow color in white bg
                $('.fp-controlArrow.fp-prev').css({
                    'border-right': '3px solid #020e1c',
                    'border-bottom': '3px solid #020e1c'
                });

                $('.fp-controlArrow.fp-next').css({
                    'border-right': '3px solid #020e1c',
                    'border-bottom': '3px solid #020e1c'
                });

            };

            // slide 4
            if($('.slide4').hasClass('active')){

                $('.progress .progress-bar').animate({
                    width: '75%'
                });
    
                 $('.header .name').css({
                    color: '#1b1c1e',
                    transition: 'color .3s ease'
                 });
                    
                $('.header .icon').css({
                    color: '#020e1c',
                    transition: 'color .3s ease'
                });

                $('.slide4.main').css({
                    background: '#f4f4f4'
                });

                // header bg in -600px size
                if((window).outerWidth <= 768){
                    $('.header').css({
                    transition: 'all 1s ease',
                    background: '#f4f4f4'
                    }, 100);
                };

                // arrow color in white bg
                $('.fp-controlArrow.fp-prev').css({
                    'border-right': '3px solid #020e1c',
                    'border-bottom': '3px solid #020e1c'
                });

                $('.fp-controlArrow.fp-next').css({
                    'border-right': '3px solid #020e1c',
                    'border-bottom': '3px solid #020e1c'
                });
            };

            // slide 5
            if($('.slide5').hasClass('active')){
                
                $('.progress .progress-bar').animate({
                    width: '100%'
                });

                $('.header .name').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                });
                    
                $('.header .icon').css({
                    color: '#f4f4f4',
                    transition: 'color .3s ease'
                });

                if((window).outerWidth <= 768){
                    $('.header').css({
                    transition: 'all .3s ease',
                    background: '#020E1C'
                    });

                    $('.header .name').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    });
                        
                    $('.header .icon').css({
                        color: '#fff',
                        transition: 'color .3s ease'
                    });
                };

                // arrow color in dark bg
                $('.fp-controlArrow.fp-prev').css({
                    'border-right': '3px solid #fff',
                    'border-bottom': '3px solid #fff'
                });

                $('.fp-controlArrow.fp-next').css({
                    'border-right': '3px solid #fff',
                    'border-bottom': '3px solid #fff'
                });
            };
        },


        // animations on leave slide
        onSlideLeave: function(section, origin, destination, direction){
            var leavingSection = this;

            // opacity effect slide 2
            if($('.slide1').hasClass('active')){
                $('.slide2.main > *').each(function(index, element){ 
                    $(this).animate({
                        opacity: '1'
                    },1500 + (index * 700));
                });
            };

            // slide 3 bg color change
            if($('.slide2').hasClass('active')){
                // main color change
                $('.slide3.main').css({
                transition: 'all 2s ease',
                background: '#f4f4f4'
                });

            };

            if($('.slide3').hasClass('active')){
                // main color change
                $('.slide4.main').css({
                background: '#f4f4f4'
                });

            };
        }        
    }); 
});