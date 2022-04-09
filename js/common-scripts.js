

;(function($){
	$(function(){

        $('.main-nav > ul > li').find('.mega-menu').parent().addClass("Submenu");
        if($(window).width()<768){
            $(".main-nav ul > li").find(".mega-menu").parent("li").find("> a");
            $(".main-nav ul li.Submenu > a").bind('click', 'touchend', function (e) {
                e.preventDefault();
                $(".main-nav ul > li").find(".mega-menu:visible").slideUp()
                $(".main-nav ul > li").removeClass("active")
                if ($(this).parents(".Submenu").find(".mega-menu:visible").length) {
                    $(this).removeClass("active")
                    $(this).parents(".Submenu").find(".mega-menu").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parents(".Submenu").find(".mega-menu").slideDown()
                }
            })
        }
        
        
        $(window).scroll(function(){
            if($(window).width() >1024){
                if ($(window).scrollTop() > 90){
                    $("body").addClass('sticky');
                }
                else{
                    $("body").removeClass('sticky');
                }
            }
        });
        
        

      
        var lastScrollTopPos = 0;
        $("#phone-nav").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $("body").addClass('modalOpen')
            })
        })

        $("#close-btn").click(function (e) {
            e.preventDefault();
            $("body").removeClass('modalOpen')
        })
        
         if($(".home-content").length){
            $("body").addClass('home-content-page');
        } 
        
        if($(".search-content").length){
            $("body").addClass('search-page');
        } 
        
   
        
       

        $("#back-to-top").on('click touchstart', function () {
            $("html,body").animate({ scrollTop: 0 }, 2000 );
            return false
        })   
        
        $(".side-bar ul li a").each(function(){
            $(this).on("click", function(e) {
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top
                }, 1000);
            });
        });
        
        

       
     /*Career slider function */
        if($('#career-slider').length){
            $('#career-slider').slick({
                dots: false,
                arrows:true,
                autoplay: true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 500,
                slidesToShow:1,
                slidesToScroll: 1,
                prevArrow: '#career-slider-controller .prev',
                nextArrow: '#career-slider-controller .next',
            });
        }
        /*Career slider function */
    
     
        if($('#similar-courses-slider-2').length){
            $('#similar-courses-slider-2').slick({
                dots: false,
                arrows:true,
                autoplay: true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 500,
                slidesToShow:2,
                slidesToScroll: 1,
                prevArrow: '#similar-slider-buttons-2 .prev',
                nextArrow: '#similar-slider-buttons-2 .next',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }  
        
        
        
        if($('#similar-courses-slider').length){
            $('#similar-courses-slider').slick({
                dots: false,
                arrows:true,
                autoplay: true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 500,
                slidesToShow:2,
                slidesToScroll: 1,
                prevArrow: '#similar-slider-buttons .prev',
                nextArrow: '#similar-slider-buttons .next',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        } 
        
        
        /* =======  End Programme Course page ======= */

        var mdquery = window.matchMedia("(max-width: 767px)");
        if (mdquery.matches) {
            if ($("select.mobiselec").length) {
                $("select.mobiselec").selectric();
            }
            var slitem = $( "#" + $("select.mobiselec option:selected").text());
            var firstHeight = slitem.height() + 180;
            $(".des-info-inner").css({ height: firstHeight + "px" });
            slitem.addClass("active");
            $("select.mobiselec").on("change", function() {
                var chitem = $("#" + $("select.mobiselec option:selected").text());
                var chheight = chitem.height() + 180;
                $(".des-info-inner").css({ height: chheight + "px" });
                $(".des-info-inner > div").removeClass("active");
                chitem.addClass("active");
            });
        }

        var mdquery2 = window.matchMedia("(min-width:768px)");
        if (mdquery2.matches) {
            var checkscl = true;

            $(".side-bar ul li a").each(function() {
                $(this).on("click", function(e) {
                    $(".side-bar ul li a").removeClass("current");
                    $(this).addClass("current");
                    e.preventDefault();
                    checkscl = false;
                    $("html, body").animate(
                        {
                            scrollTop: $($(this).attr("href")).offset().top
                        },
                        1000,
                        function() {
                            checkscl = true;
                        }
                    );
                });
            });

            var mainNavLinks = document.querySelectorAll(".side-bar ul li a");

            window.addEventListener("scroll", function(event) {
                if (checkscl) {
                    var fromTop = window.scrollY;
                    var windowHeight = $(window).height();
                    mainNavLinks.forEach(function(link) {
                        var section = document.querySelector(link.hash);
                        var sectionTop = section.getBoundingClientRect().top;
                        var sectionHeight = section.getBoundingClientRect().height;

                        if (
                            sectionTop - windowHeight <= 0 &&
                            sectionTop - windowHeight >= -(windowHeight + sectionHeight)
                        ) {
                            $(mainNavLinks).removeClass("current");
                            link.classList.add("current");
                        } else {
                            link.classList.remove("current");
                        }
                    });
                }
            });
        }
        
        
        /* Beginning Component page*/
        
        /* ====== Gallery slider ========== */ 
        
        if($('#gallery-slider').length){
            $('#gallery-slider').slick({
                dots: false,
                arrows:true,
            
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '#gallery-thumb',
              
            });
            $(window).on('resize', function () {
                $('#gallery-slider').slick('resize');

            });
        }  
        
        if($('#gallery-thumb').length){
            $('#gallery-thumb').slick({
               
                arrows:true,
                infinite: true,
                navigation:false,
              /*  speed: 500,*/
                slidesToShow:7,
                slidesToScroll: 1,
                asNavFor: '#gallery-slider',
                dots:false,
                centerMode: false,
                focusOnSelect: true

            });
            $(window).on('resize', function () {
                $('#gallery-thumb').slick('resize');

            });
        }  
        
        
     /*  FAQs Accordion Function */
        
        $(".accordion-row").each(function () {
            var $this = $(this);
            $this.find(" > .accordion-title").on("click touch", function () {
                $(".accordion-row").removeClass("active")
                $(".accordion-row .accordion-info").slideUp();
                if ($this.find(".accordion-info:visible").length) {
                    $(".accordion-row").removeClass("active")
                    $(".accordion-row .accordion-info").slideUp();
                } else {
                    $this.addClass("active")
                    $(".accordion-row .accordion-info").slideUp();
                    $this.find(" > .accordion-info").slideDown();
                }
            })
        })
        /*  FAQs Accordion Function */
       
        

        
  

        
        
        
   
        
        
        
		
	});// End ready function.
})(jQuery);





    
    
