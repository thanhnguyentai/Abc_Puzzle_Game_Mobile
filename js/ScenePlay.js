ScenePlay = {
    init: function(){
        var _self = this;
        this.enableSoundBG = true;

        if(GameData.isAndroid){
            this.audioBG = new Media(GameData.getBaseUrlAudio()+'bg_sound/bg_sound.m4a', null, null, function(status){
                if (status === Media.MEDIA_STOPPED && _self.enableSoundBG) {
                    _self.audioBG.play();
                }
            });

            this.audioBG.play();
        }
        else{
            this.audioBG = new buzz.sound(GameData.getBaseUrlAudio()+'bg_sound/bg_sound', {
                formats: ['m4a','mp3','ogg'],
                preload: true,
                loop: true
            });
            this.audioBG.play();
        }
        
        $('#playButton').bind('click', function(){
            _self.hideStartScreen();
            _self.showLevelScreen();
        });
        
        $('#bgSoundButton').bind('click', function(){ 
            if(_self.enableSoundBG){
                $('.bgsound-button').addClass('none-bgsound-button').removeClass('bgsound-button');
                _self.audioBG.pause();
            }
            else{
                $('.none-bgsound-button').addClass('bgsound-button').removeClass('none-bgsound-button');
                _self.audioBG.play();
            }
            _self.enableSoundBG = !_self.enableSoundBG;
        });
        $('#bgSoundButton2').bind('click', function(){
            if(_self.enableSoundBG){
                $('.bgsound-button').addClass('none-bgsound-button').removeClass('bgsound-button');
                _self.audioBG.pause();
            }
            else{
                $('.none-bgsound-button').addClass('bgsound-button').removeClass('none-bgsound-button');
                _self.audioBG.play();
            }
            _self.enableSoundBG = !_self.enableSoundBG;
        });
        $('#characterVoiceButton').bind('click', function(){
        });
        $('#characterVoiceButton2').bind('click', function(){ 
        });
        
        // start play game with level
        $('#level1Button').bind('click', function(){
            _self.selectLevel(1);
        });
        $('#level2Button').bind('click', function(){
            _self.selectLevel(2);
        });
        $('#level3Button').bind('click', function(){
            _self.selectLevel(3);
        });
        $('#level4Button').bind('click', function(){
            _self.selectLevel(4);
        });
        $('#level5Button').bind('click', function(){
            _self.selectLevel(5);
        });
        $('#levelMenuButton').bind('click', function(){
            _self.hideLeveLScreen();
            _self.showListLetter();
        });
        $('#levelMenuButton2').bind('click', function(){
           _self.showLevelScreen();
        });
        $('#finishMenu').bind('click', function(){
            if(_self.currentLevel < 5){
                _self.hideFinishScreen();
                _self.showLevelScreen();
            }
            else{
                if(GameData.isAndroid){
                    _self.openWeb(GameData.linkGooglePlay);
                }
                else if(GameData.isIOS){
                    _self.openWeb(GameData.linkAppleStore);
                }
            }
        });
        $('#finishReplay').bind('click', function(){
            _self.hideFinishScreen();
            _self.start();
        });
        $('#finishNextLevel').bind('click', function(){
            if(_self.currentLevel < 5){
                _self.hideFinishScreen() ;
                _self.currentLevel++;
                if(_self.currentLevel <=5){
                    _self.start();
                }
            }
            else{
                _self.openWeb(GameData.linkWebsite)
            }
        });
        $('#finishFacebook').bind("click", function(){
            _self.openWeb(GameData.linkFacebook)
        });
        
        // generate list letters
        this.level = new Array();
        var item = "";
        var url = "";
        for(var i=0;i<GameData.letter.length;i++){
            this.level.push({
                letter: GameData.letter[i].letter,
                level: 1
            });
        }
        
        this.currentIndex = 0;
        for(var i=0;i<GameData.letter.length;i++){
            if(GameData.letter[i].isSelected){
                this.currentIndex = i;
                break;
            }
        }
        this.currentLetter = GameData.letter[this.currentIndex].letter;
        this.currentLevel = 1;
        this.numberPoint = 0;
        
        if(GameData.isAndroid){
            this.audioTing = new Media(GameData.getBaseUrlAudio()+'action/ting.m4a');
        }
        else{
            this.audioTing = new buzz.sound(GameData.getBaseUrlAudio()+'action/ting', {
                formats: ['m4a','mp3','ogg'],
                preload: true
            });
        }
        
        
        if(GameData.isAndroid){
            this.audioWord = new Media(GameData.getBaseUrlAudio()+GameData.level1.directory+'/'+GameData.letter[this.currentIndex].letter+'/'+GameData.letter[this.currentIndex].audio+'.m4a');
        }
        else{
            this.audioWord = new buzz.sound(GameData.getBaseUrlAudio()+GameData.level1.directory+'/'+GameData.letter[this.currentIndex].letter+'/'+GameData.letter[this.currentIndex].audio, {
                formats: ['m4a','mp3','ogg'],
                preload: true
            });
        }
    },

    openWeb: function(link){
        window.open(link,"_system");
    },
    
    showLevelScreen: function(){
        var currentLevel = this.level[this.currentIndex].level;
        for(var i=1;i<=5;i++){
            if(i===currentLevel)
                $('#level'+i+'Button').removeClass('nonactive-level-button');
            else
                $('#level'+i+'Button').addClass('nonactive-level-button');
        }
        $('#gameLevelScreen').fadeIn(500);
    },
    hideLeveLScreen: function(){
        $('#gameLevelScreen').fadeOut(200);
    },
    showStartScreen: function(){
        $('#gameStartScreen').fadeIn(500);
    },
    hideStartScreen: function(){
        $('#gameStartScreen').fadeOut(200);
    },
    showListLetter: function(){
        $('#gameLetterList').fadeIn(500);
    },
    hideListLetter: function(){
        $('#gameLetterList').fadeOut(200);
    },
    showFinishScreen: function(){
        if(this.currentLevel >=5){
            $('#finishFacebook').css('display','block');
        }

        $('#gameFinishScreen').fadeIn(500, function(){
            $('#finishStar').addClass('active');
            setTimeout(function(){
                $('#finishStar').removeClass('active');
            }, 1000);
        });
    },
    hideFinishScreen: function(){
        $('#gameFinishScreen').fadeOut(200);
    },
    
    hoverLetter: function(letter){
        for(var i=0;i<this.level.length;i++){
            if(this.level[i].letter === letter){
                this.level[i].audioletter.play();
                return;
            }
        }
    },
    
    selectLevel: function(level){
        if(this.level[this.currentIndex].level !== level)
            return;
        
        this.currentLevel = level;
        this.hideLeveLScreen();
        this.start();
    },
    
    start: function(){
        this.width = 960;
        this.height = 640;
        this.partId = 'clip_item_';
        this.parts = new Array();
        this.numberPartDone = 1;
        
        this.loadImage();
        this.loadImagePart();
        
        $('#playBoard').fadeIn(1000);
    },
    loadImage: function(){
        var url = GameData.baseUrl+GameData.level1.directory+'/'+GameData.letter[this.currentIndex].letter+'/'+GameData.letter[this.currentIndex].word+'.png';
        $('#playBoardImage').css('background','url('+url+') no-repeat center center');
    },
    loadImagePart: function(){
        var imageUrls = new Array();
        for(var i=1;i<=GameData['level'+this.currentLevel].numberPart;i++){
            imageUrls.push(GameData.baseUrl+GameData['level'+this.currentLevel].directory+'/'+ GameData.letter[this.currentIndex].letter + '/' +
                            GameData.letter[this.currentIndex].word+'_'+GameData['level'+this.currentLevel].name+'_'+i+'.png');
        }
        
        this.images = new Array();
        var countLoaded = 0;
        var _self = this;
        for(var i=0;i<imageUrls.length;i++){
            var image = new Image();
            image.onload = function(){
                countLoaded++;
                if(countLoaded >= imageUrls.length){
                    _self.addImagePart();
                    _self.setPartPosition();
                    _self.makeDragDrop();
                }
            };
            image.src = imageUrls[i];
            this.images.push(image);
        }
    },
    
    addImagePart: function(){
        if(!this.images || this.images.length === 0)
            return;
        
        $('#playBoardImageContainer canvas').remove();
        
        var width = this.width;
        var height = this.height;
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        var ctx = canvas.getContext('2d');
        for(var i=0;i<this.images.length;i++){
            // draw new image on canvas
            canvas.width = width;
            ctx.drawImage(this.images[i],0,0);
            
            // --- clip content to other canvas ---
            var imageData = ctx.getImageData(0,0,width,height);
            imageData = imageData.data;
            var x = 0;
            var y = 0;
            var minX = width;
            var maxX = 0;
            var minY = height;
            var maxY = 0;
            // select rectangle to clip
            for(var j = 0; j < imageData.length; j += 4) {
                if(imageData[j+3] > 100){
                    y = Math.floor((j / 4) / width);
                    x = (j/4) - (y * width);
                    if(minX > x)
                        minX = x;
                    if(maxX < x)
                        maxX = x;
                    if(minY > y)
                        minY = y;
                    if(maxY < y)
                        maxY = y;
                }
            }
            // clip content
            if(minX >= maxX || minY >= maxY){
                continue;
            }
            
            var canvasClip = document.createElement('canvas');
            canvasClip.id = this.partId +i;
            canvasClip.width = maxX - minX;
            canvasClip.height = maxY - minY;
            var ctxClip = canvasClip.getContext('2d');
            ctxClip.translate(-minX,-minY);
            ctxClip.beginPath();
            ctxClip.moveTo(minX,minY);
            ctxClip.lineTo(maxX,minY);
            ctxClip.lineTo(maxX,maxY);
            ctxClip.lineTo(minX,maxY);
            ctxClip.closePath();
            ctxClip.clip();
            ctxClip.drawImage(this.images[i],0,0);
            
            $('#playBoardImageContainer').append($(canvasClip));
            this.parts.push({
                id: this.partId +i,
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY
            });
        }
        
        this.images = null;
    },
    
    setPartPosition: function(){
        if(!this.parts || this.parts.length === 0){
            return;
        }
        
        var maxHeight = 0;
        for(var i=0;i<this.parts.length;i++){
            if(maxHeight < this.parts[i].height){
                maxHeight = this.parts[i].height;
            }
        }
        
        var availableHeight = this.height - maxHeight;
        var stepTop = availableHeight/this.parts.length;
        for(var i=0;i<this.parts.length-1;i++){
            $('#'+this.parts[i].id).css('top',(stepTop*i)+'px');
            $('#'+this.parts[i].id).addClass('draggable-item');
        }
        
        $('#'+this.parts[this.parts.length-1].id).css({
            'top': this.parts[this.parts.length-1].y+'px',
            'left': this.parts[this.parts.length-1].x+'px'
        });
    },
    
    makeDragDrop: function(){
        if(!this.parts || this.parts.length === 0){
            return;
        }
        
        var _self = this;
        for(var i=0;i<this.parts.length-1;i++){
            (
                function(i){
                    $('#'+_self.parts[i].id).draggable({
                        start: function( event, ui ) {
                            /* fix for parent scale */
                            ui.position.left = 0;
                            ui.position.top = 0;
                            /* end fix for parent scale */
                            
                            $('#'+_self.parts[i].id).css('z-index','5');
                        },
                        drag: function(event, ui){
                            /* fix for parent scale */
                            var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
                            var newLeft = ui.originalPosition.left + changeLeft / SceneHome.ratio; // adjust new left by our zoomScale

                            var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
                            var newTop = ui.originalPosition.top + changeTop / SceneHome.ratio; // adjust new top by our zoomScale
                            /* end fix for parent scale */
                            
                            ui.position.left = newLeft;
                            ui.position.top = newTop;
                        },
                        stop: function( event, ui ){
                            var delta = 50;
                            $('#'+_self.parts[i].id).css('z-index','1');
                            if(ui.position.top >= _self.parts[i].y - delta && ui.position.top <= _self.parts[i].y + delta &&
                               ui.position.left >= _self.parts[i].x - delta && ui.position.left <= _self.parts[i].x + delta){
                               $('#'+_self.parts[i].id).draggable("disable" );
                               $('#'+_self.parts[i].id).css({
                                   top:  _self.parts[i].y+'px',
                                   left: _self.parts[i].x+'px',
                                   zIndex: 0
                               });
                               
                               _self.numberPartDone++;
                               if(!_self.checkFinishLetter()){
                                    _self.playRightAudio();
                               }
                            }
                        }
                    });
                }
            )(i);
        }
    },
    
    playRightAudio: function(){
        this.audioTing.play();
    },
    
    playWordAudio: function(){
        this.audioWord.play();
    },
    
    addPointStar: function(){
        var height = 29;
        var margin = 10;
        var bottom = 35;
        for(var i=0;i<this.numberPoint;i++){
            bottom += height + margin;
        }
        bottom += margin;
        var html = "<div style='bottom: "+bottom+"px;' class='point-star'></div>";
        $('#SceneHome').append(html);
        
        $('#finishStar').css('opacity','1');
        this.numberPoint++;
    },
    
    checkFinishLetter: function(){
        if(GameData['level'+this.currentLevel].numberPart === this.numberPartDone){
            var _self = this;
            _self.playWordAudio();
            SceneHome.playBirdAnimation();
            SceneHome.playAnimationEnd(function(){
                /*
                var timeout = setTimeout(function(){
                    clearTimeout(timeout);
                    _self.playWordAudio();
                    SceneHome.playBirdAnimation();
                }, 500);
                */

                var timeout1 = setTimeout(function(){
                    clearTimeout(timeout1);
                    if(_self.currentLevel === _self.level[_self.currentIndex].level){
                        _self.level[_self.currentIndex].level++;
                        _self.addPointStar();
                    }
                    else{
                        $('#finishStar').css('opacity','0');
                    }
                    _self.showFinishScreen();
                }, 3000); 
            });

            return true;
        }

        return false;
    }
};