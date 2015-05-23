$(document).ready(function() {
    if(GameData.isAndroid || GameData.isIOS){
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    else {
        onDeviceReady();
    }
});

function onDeviceReady(){
	SceneStart.init();
    SceneHome.changeImageSize($(window).width(), $(window).height());
    
    $(window).bind('resize', function() {
        SceneHome.changeImageSize($(window).width(), $(window).height());
    });
}