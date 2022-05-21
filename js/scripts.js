$(function(){
    // jQuery for the Carousel. 
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //jQuery for the Reserve Button / Login Button modals. 
    $("#reserveButton").click(function(){
        console.log('Clicked.');
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function(){
        console.log('Clicked.');
        $("#loginModal").modal("show");
    });
});