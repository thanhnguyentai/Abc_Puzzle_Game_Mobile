SceneHome = {
    designW: 2028,
    designH: 1536,
    camelBabySprite: new Array(),
    camelBabyBaseUrl: 'images/Camel_Baby/Camel_Baby0',
    camelBabyNumber: 120,
    camelBabyImgWidth: 712,
    camelBabyImgHeight: 720,
    camelBabyWidth: 712,
    camelBabyHeight: 720,
    camelBabyX: 700,
    camelBabyY: 250,
    
    camelAndManSprite: new Array(),
    camelAndManBaseUrl: 'images/Camels_and_man/Camels_Man0',
    camelAndManNumbrer: 120,
    camelAndManImgWidth: 1280,
    camelAndManImgHeight: 720,
    camelAndManWidth: 1280,
    camelAndManHeight: 720,
    camelAndManX: 1300,
    camelAndManY: 200,
    camelManSprite: {
        index: 0,
        id: 'homeCamelMan',
        stepWidth: 488,
        baseStepWidth: 488,
        sprite: null
    },
    
    goatSprite: new Array(),
    goatBaseUrl: 'images/Goat/Goat0',
    goatNumbrer: 63,
    goatImgWidth: 712,
    goatImgHeight: 600,
    goatWidth: 712,
    goatHeight: 600,
    goatX: 150,
    goatY: 960,
    
    goat2Sprite: new Array(),
    goat2BaseUrl: 'images/Goat2/',
    goat2Numbrer: 4,
    goat2ImgWidth: 200,
    goat2ImgHeight: 150,
    goat2Width: 200,
    goat2Height: 150,
    goat2X: 150,
    goat2Y: 500,
    
    sheepSprite: new Array(),
    sheepBaseUrl: 'images/Sheeps/Sheeps0',
    sheepNumbrer: 70,
    sheepImgWidth: 572,
    sheepImgHeight: 378,
    sheepWidth: 572,
    sheepHeight: 378,
    sheepX: 1300,
    sheepY: 600,
    
    womanUtensilSprite: new Array(),
    womanUtensilBaseUrl: 'images/Woman_Utensils/Woman_Utensils0',
    womanUtensilNumbrer: 63,
    womanUtensilImgWidth: 712,
    womanUtensilImgHeight: 720,
    womanUtensilWidth: 712,
    womanUtensilHeight: 720,
    womanUtensilX: 400,
    womanUtensilY: 600,
    
    womanBabySprite: new Array(),
    womanBabyBaseUrl: 'images/Woman_with_baby/Woman_baby0',
    womanBabyNumbrer: 63,
    womanBabyImgWidth: 712,
    womanBabyImgHeight: 833,
    womanBabyWidth: 712,
    womanBabyHeight: 833,
    womanBabyX: -40,
    womanBabyY: 400,
    
    gameAnimationSprite: new Array(),
    gameAnimationBaseUrl: 'images/Animation/vfx_',
    gameAnimationNumbrer: 28,
    gameAnimationImgWidth: 550,
    gameAnimationImgHeight: 550,
    gameAnimationWidth: 550,
    gameAnimationHeight: 550,
    gameAnimationX: 0,
    gameAnimationY: 0,
    
    birdAnimationSprite: new Array(),
    birdAnimationBaseUrl: 'images/Bird/Hoopoe_Animation_300',
    birdAnimationNumbrer: 70,
    birdAnimationImgWidth: 390,
    birdAnimationImgHeight: 425,
    birdAnimationWidth: 390,
    birdAnimationHeight: 425,
    birdAnimationX: 0,
    birdAnimationY: 0,
    
    frameRate: 20,
    width: 2028,
    height: 1536,
    numberLoaded: 0,
    
    init: function(){
        var _self = this;
        // preload image for camel baby
        for(var i=1;i<=this.camelBabyNumber;i++){
            this.camelBabySprite.push(PreloadImage.create(this.camelBabyBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for camel and man
        /*
        for(var i=1;i<=this.camelAndManNumbrer;i++){
            this.camelAndManSprite.push(PreloadImage.create(this.camelAndManBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        */

        // preload image for goat
        for(var i=1;i<=this.goatNumbrer;i++){
            this.goatSprite.push(PreloadImage.create(this.goatBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for goat2
        for(var i=1;i<=this.goat2Numbrer;i++){
            this.goat2Sprite.push(PreloadImage.create(this.goat2BaseUrl+i+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for sheep
        for(var i=1;i<=this.sheepNumbrer;i++){
            this.sheepSprite.push(PreloadImage.create(this.sheepBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for woman utensil
        for(var i=1;i<=this.womanUtensilNumbrer;i++){
            this.womanUtensilSprite.push(PreloadImage.create(this.womanUtensilBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
                _self.callbackPreloadImage();
            }));
        }
        
        // preload image for woman baby
        for(var i=1;i<=this.womanBabyNumbrer;i++){
            this.womanBabySprite.push(PreloadImage.create(this.womanBabyBaseUrl+(i<10?('00'+i):(i<100?'0'+i:i))+'.png', function(){
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
        var total = this.camelBabyNumber /*+ this.camelAndManNumbrer*/ + this.goatNumbrer + this.goat2Numbrer + this.gameAnimationNumbrer
                    + this.sheepNumbrer + this.womanUtensilNumbrer + this.womanBabyNumbrer + this.birdAnimationNumbrer;
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
            sprite: this.sheepSprite,
            img_width: this.sheepImgWidth,
            img_height: this.sheepImgHeight,
            width: this.sheepWidth,
            height: this.sheepHeight,
            x: 0,
            y: 0
        });
        this.gameAnimation2 = SpritePlay.create(spriteCollection, this.frameRate,document.getElementById('homeSheep').getContext('2d'), this.sheepWidth, this.sheepHeight);
        this.gameAnimation2.play();
        
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.womanUtensilSprite,
            img_width: this.womanUtensilImgWidth,
            img_height: this.womanUtensilImgHeight,
            width: this.womanUtensilWidth,
            height: this.womanUtensilHeight,
            x: 0,
            y: 0
        });
        this.gameAnimation3 = SpritePlay.create(spriteCollection, this.frameRate,document.getElementById('homeWomanUtensil').getContext('2d'), this.womanUtensilWidth, this.womanUtensilHeight);
        this.gameAnimation3.play();
        
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
            sprite: this.goatSprite,
            img_width: this.goatImgWidth,
            img_height: this.goatImgHeight,
            width: this.goatWidth,
            height: this.goatHeight,
            x: 0,
            y: 0
        });
        this.gameAnimation5 = SpritePlay.create(spriteCollection, this.frameRate,document.getElementById('homeGoat').getContext('2d'), this.goatWidth, this.goatHeight);
        this.gameAnimation5.play();
        
        var spriteCollection = new Array();
        spriteCollection.push({
            index: 0,
            sprite: this.goat2Sprite,
            img_width: this.goat2ImgWidth,
            img_height: this.goat2ImgHeight,
            width: this.goat2Width,
            height: this.goat2Height,
            x: 0,
            y: 0
        });
        this.gameAnimation6 = SpritePlay.create(spriteCollection, this.frameRate/4,document.getElementById('homeGoat2').getContext('2d'), this.goat2Width, this.goat2Height);
        this.gameAnimation6.play();
        
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
        this.gameAnimationEnd = SpriteAnimation.create(spriteCollection, this.frameRate,document.getElementById('gameAnimation').getContext('2d'), this.gameAnimationImgWidth, this.gameAnimationImgHeight, this.gameAnimationEnd);        
        
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
        this.birdAnimation = SpriteAnimation.create(spriteCollection, this.frameRate*2,document.getElementById('birdAnimation').getContext('2d'), this.birdAnimationImgWidth, this.birdAnimationImgHeight);
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
