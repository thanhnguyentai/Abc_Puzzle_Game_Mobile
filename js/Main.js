$(document).ready(function() {
    SceneStart.init();
    SceneHome.changeImageSize($(window).width(), $(window).height());
    
    $(window).bind('resize', function() {
        SceneHome.changeImageSize($(window).width(), $(window).height());
    });
});