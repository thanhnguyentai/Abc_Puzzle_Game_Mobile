SceneHome = {
    designW: 1600,
    designH: 1300,

    camelBabySprite: new Array(),
    camelBabyBaseUrl: 'images/Camel_Baby/',
    camelBabyNumber: 4,
    camelBabyImgWidth: 150,
    camelBabyImgHeight: 100,
    camelBabyWidth: 150,
    camelBabyHeight: 100,
    
    womanBabySprite: new Array(),
    womanBabyBaseUrl: 'images/Woman_with_baby/pose_',
    womanBabyNumbrer: 5,
    womanBabyImgWidth: 250,
    womanBabyImgHeight: 400,
    womanBabyWidth: 250,
    womanBabyHeight: 400,
    
    gameAnimationSprite: new Array(),
    gameAnimationBaseUrl: 'images/Animation/vfx_',
    gameAnimationNumbrer: 28,
    gameAnimationImgWidth: 550,
    gameAnimationImgHeight: 550,
    gameAnimationWidth: 550,
    gameAnimationHeight: 550,
    
    birdAnimationSprite: new Array(),
    birdAnimationBaseUrl: 'images/Bird/Hoopoe_Animation_300',
    birdAnimationNumbrer: 70,
    birdAnimationImgWidth: 390,
    birdAnimationImgHeight: 425,
    birdAnimationWidth: 390,
    birdAnimationHeight: 425,
    
    frameRate: 5,
    numberLoaded: 0,
    
    init: function(){
        var _self = this;
        // preload image for camel baby
        for(var i=1;i<=this.camelBabyNumber;i++){
            this.camelBabySprite.push(PreloadImage.create(this.camelBabyBaseUrl+i+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for woman baby
        for(var i=1;i<=this.womanBabyNumbrer;i++){
            this.womanBabySprite.push(PreloadImage.create(this.womanBabyBaseUrl+i+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for game animation
        for(var i=1;i<=this.gameAnimationNumbrer;i++){
            this.gameAnimationSprite.push(PreloadImage.create(this.gameAnimationBaseUrl+(i<10?('0'+i):i)+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for bird animation
        for(var i=1;i<=this.birdAnimationNumbrer;i++){
            this.birdAnimationSprite.push(PreloadImage.create(this.birdAnimationBaseUrl+(i<10?('0'+i):i)+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
    },
    
    callbackPreloadImage: function(){
        this.numberLoaded++;
        var total = this.camelBabyNumber + this.gameAnimationNumbrer + this.womanBabyNumbrer + this.birdAnimationNumbrer;
        if(this.numberLoaded < total){
            var percent = 100*this.numberLoaded/total;
            $('#loading_running').loading({width: percent});
        }
        else{
            $('#loading_container').css('display','none');
            $('#SceneSplash').fadeOut(200);
            $('#SceneHome').css('opacity','1');
            $('#gameBoard').css('display','block');
            this.playAnimation();
        }
    },
    
    playAnimation: function(){
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.camelBabySprite,
            img_width: this.camelBabyImgWidth,
            img_height: this.camelBabyImgHeight,
            width: this.camelBabyWidth,
            height: this.camelBabyHeight,
            x: 0,
            y: 0
        });
        this.gameAnimation1 = SpritePlay.create(spriteCollection, this.frameRate,document.getElementById('homeCamelBaby').getContext('2d'), this.camelBabyWidth, this.camelBabyHeight);
        this.gameAnimation1.play();
        
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.womanBabySprite,
            img_width: this.womanBabyImgWidth,
            img_height: this.womanBabyImgHeight,
            width: this.womanBabyWidth,
            height: this.womanBabyHeight,
            x: 0,
            y: 0
        });
        this.gameAnimation4 = SpritePlay.create(spriteCollection, this.frameRate,document.getElementById('homeWomanBaby').getContext('2d'), this.womanBabyWidth, this.womanBabyHeight);
        this.gameAnimation4.play();
        
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.gameAnimationSprite,
            img_width: this.gameAnimationImgWidth,
            img_height: this.gameAnimationImgHeight,
            width: this.gameAnimationImgWidth,
            height: this.gameAnimationImgHeight,
            x: 0,
            y: 0
        });
        this.gameAnimationEnd = SpriteAnimation.create(spriteCollection, this.frameRate*4,document.getElementById('gameAnimation').getContext('2d'), this.gameAnimationImgWidth, this.gameAnimationImgHeight, this.gameAnimationEnd);        
        
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.birdAnimationSprite,
            img_width: this.birdAnimationImgWidth,
            img_height: this.birdAnimationImgHeight,
            width: this.birdAnimationImgWidth,
            height: this.birdAnimationImgHeight,
            x: 0,
            y: 0
        });
        this.birdAnimation = SpriteAnimation.create(spriteCollection, this.frameRate*4,document.getElementById('birdAnimation').getContext('2d'), this.birdAnimationImgWidth, this.birdAnimationImgHeight);
        this.birdAnimation.showFirst();
        
        this.startPlay();
    },
    
    changeImageSize: function(windowW, windowH){
        var ratio = 1;
        if(windowW/windowH > this.designW/this.designH){
            ratio = windowH / this.designH;
        }
        else{
            ratio = windowW / this.designW;
        }
        
        this.windowWidth = windowW;
        this.ratio = ratio;
        
        $('.resize-item').css('transform', 'scale(' + ratio + ')');
        $('.resize-item').css('-webkit-transform', 'scale(' + ratio + ')');
        $('.resize-item').css('-ms-transform', 'scale(' + ratio + ')');
        $('.resize-item').css('-moz-transform', 'scale(' + ratio + ')');
    },
    
    playAnimationEnd: function(callback){
        $('#gameAnimation').css('display','block');
        this.callbackEndAnimation = callback;
        this.gameAnimationEnd.play();
    },
    
    playBirdAnimation: function(){
        this.birdAnimation.play();
    },
    
    gameAnimationEnd: function(){
        $('#gameAnimation').css('display','none');
        if(SceneHome.callbackEndAnimation)
            SceneHome.callbackEndAnimation();
    },
    
    startPlay: function(){
        ScenePlay.init();
    }
};
