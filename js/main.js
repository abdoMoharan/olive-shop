



$(function(){
    $('.fa-bars').on('click',function(){
        
        $('.nav').toggleClass('is-vispel');
        if( $('.nav').hasClass('is-vispel')){
            $('.nav').animate({
                right:0
            },500);
            $('body').animate({
                paddingRight:'300px'
            },500)
        } 
    })
    $('.fa-times').click(function(){
        $('.nav').animate({
            right:'-300px'
        },500);
        $('body').animate({
            paddingRight:'0'
        },500)
        
    })

    // 
    $('.show-page').on('click',function(){
        $('.nav-responsef').toggleClass('is-vispel');
        if( $('.nav-responsef').hasClass('is-vispel')){
            $('.nav-responsef').animate({
                right:0
            },500);
            $('body').animate({
                paddingRight:'300px'
            },500)
        } 
       
    })
    $('.fa-times-circle').click(function(){
        $('.nav-responsef').css({
            display:'none'
        });
        $('body').animate({
            paddingRight:'0'
        },500)
        
    })
    $('h3').click(function(){
        $('.nav-responsef').animate({
            right:'-300px'
        },500);
        $('body').animate({
            paddingRight:'0'
        },500)
        
    })
    // 
    $(window).on('load scroll',function(){

        if($(window).scrollTop() >10){
            $('header').addClass('header-active');
            
        }else{
            $('header').removeClass('header-active');
        }
        var scrollToTop=$('.bi-arrow-up');
        if($(window).scrollTop() > 700){

           scrollToTop.show();

        }else{

            scrollToTop.hide();
        }
        if($(window).scrollTop() >600){
            $('.dropdown-pages').hide(100);
        } 
        $('body').css("overflow","auto");
        $('.loding-overlay .sk-cube-grid').fadeOut(200,
            function()
            {
                $(this).parent().fadeOut(500,
                    function()
                    {
                        
                        $(this).remove();
                    })
            })
       
    });

    $('.bi-arrow-up').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000)
    })

    $('.fa-cog').click(function(){
        $('html, body').animate({
            scrollTop:0
        },2000)
    })
// /prodact
    $('.tab ul li').click(function(){
        $('.prodact li').removeClass('active');
        $(this).addClass('active');
        $('.inner-block').hide();
        var showId = $('#'+$(this).data('teps'));
        showId.show(500);
        
    });

    $('#cloesPup').on('click',function(){
         $('.popup-vedio').show()
    })
    $('.popup-vedio').click(function(){
        $(this).hide();
    })
    $('.show-1 h3').click(function(){
        $('.show-1 ul li a').fadeToggle()
    })

    $('.show-2 h3').click(function(){
        $('.show-2 ul li a').fadeToggle()
    })
    $('.footer-news  h3').click(function(){
        $('.contt-show').fadeToggle()
    })


    $('.nav ul li .aa').click(function (e) { 
        e.preventDefault();
        $('.nav a').removeClass('active');
        $(this).addClass('active');

        $('.dropdown-pages').hide();

        var drpdownid = $('#'+$(this).data('dropdowen'));
        drpdownid.show(500);

    });

    $('.bi-gear').click(function(){

        $('.setting').animate({
            top:0
        },500)
    })
    
    $('#times').click(function(){
        
        $('.setting').animate({
            top:-1000
        },500)
    })

    $('#open-search').click(function(){
        
        $('.srarching').fadeIn(400)
    })

    $('#cloes-search').click(function(){
        
        $('.srarching').fadeOut(400)
    })


}) 