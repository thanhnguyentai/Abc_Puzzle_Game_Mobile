SceneStart = {
    init: function(){
        var _self = this;
        $('#iconStart').bind('click', function(){
            _self.startLoading();
        });
    },
    
    startLoading: function(){
        $('#SceneStart').fadeOut(200);
        $('#loading_container').fadeIn(500);
        $('#SceneSplash').fadeIn(500);
        
        SceneHome.init();
    }
};
