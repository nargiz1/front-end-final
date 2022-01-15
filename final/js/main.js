$(document).ready(function(){
    AOS.init();

    NavbarScrolled();
    ScrollTop();

    $(window).scroll(function(){
        NavbarScrolled();
        ScrollTop();
    });
    $(document).on("click",".scroll",function(){
        $(window).scrollTop(0);
      })
    $(document).on({
        mouseenter: function () {
            $(".pages").slideDown();
        },
        mouseleave: function () {
            $(".pages").slideUp();
        },
    },
    ".page", function(){   
    });
    
    $(document).on("click", ".all", function(){
        setTimeout(
            function() 
            {
                $(".post").removeClass("display-none");
            }, 5000);
            $(".post3").animate({left: '440px'});

    })
    // $(document).on("click", ".branding", function(){
    //     if($(".all").hasClass("btn-active")){
    //         $(".all").removeClass("btn-active");
    //         $(".branding").addClass("btn-active");
    //         setTimeout(
    //             function() 
    //             {
    //                 $(".post2,.post4,.post5,.post6").addClass("display-none");
    //             }, 5000);
    //         $(".post2,.post4,.post5,.post6").attr("data-aos", "zoom-in");
    //         $(".post3").animate({right: '440px'});
    //     }
        

    // })
    // $(document).on("click", "marketing", function(){

    // })
    $(document).on({
            mouseenter: function () {
            $(this).children(".social-media").slideDown();
        },
            mouseleave: function () {
            $(this).children(".social-media").slideUp();
        },
    },
    ".team-item", function(){   
    });
    $(".testimonial-carousel").owlCarousel({
        loop: false,
        dots: true,
        margin: 10,
        items:3
    });
    $(document).on("click",".accordions1 .accordion-head", function(){
        $(".accordions1 .accordion-body").slideUp();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children("i").removeClass("bi-x").addClass("bi-plus");
        }else{
            $(".accordions1 .accordion-head").children("i").removeClass("bi-x").addClass("bi-plus");
            $(".accordions1 .accordion-head").removeClass("active")
            $(this).addClass("active");
            $(this).next(".accordions1 .accordion-body").slideDown();
            $(this).children("i").removeClass("bi-plus").addClass("bi-x");
        }
    });
    $(document).on("click",".accordions2 .accordion-head", function(){
        $(".accordions2 .accordion-body").slideUp();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children("i").removeClass("bi-x").addClass("bi-plus");
        }else{
            $(".accordions2 .accordion-head").children("i").removeClass("bi-x").addClass("bi-plus");
            $(".accordions2 .accordion-head").removeClass("active")
            $(this).addClass("active");
            $(this).next(".accordions2 .accordion-body").slideDown();
            $(this).children("i").removeClass("bi-plus").addClass("bi-x");
        }
    });




    function NavbarScrolled(){
        if($(window).scrollTop()>30){
            $("#navbar").addClass("scrolled");
            $("#navbar img").attr("src", "img/navbar.svg");
        }else{
            $("#navbar").removeClass("scrolled");
            $("#navbar img").attr("src", "img/white-logo.svg");
        }
    }
    function ScrollTop(){
        if($(window).scrollTop()>100){
            $(".scroll").fadeIn(200);
        }else{
            $(".scroll").fadeOut(100);
        }
    }
})