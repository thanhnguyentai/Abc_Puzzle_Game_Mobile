$(document).ready(function() {
    /*
    $('#wrapper').windowResize({
        playWidth: 2048,
        playHeight: 1536
    });
    */
    SceneStart.init();
    //SceneHome.init();
    SceneHome.changeImageSize($(window).width(), $(window).height());
    
    $(window).bind('resize', function() {
        SceneHome.changeImageSize($(window).width(), $(window).height());
    });
});