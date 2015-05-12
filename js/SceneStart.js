SceneStart = {
    init: function(){
        this.startLoading();
    },
    
    startLoading: function(){
        $('#loading_container').fadeIn(500);
        
        SceneHome.init();
    }
};
