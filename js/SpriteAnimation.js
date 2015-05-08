SpriteAnimation = {
    create: function(spriteCollection, framerate, canvas_ctx, canvas_width, canvas_height, callback){
        var SpriteAnimation = function(spriteCollection, framerate ,canvas_ctx, canvas_width, canvas_height, callback){
            this.spriteCollection = spriteCollection;
            this.framerate = framerate;
            this.ctx = canvas_ctx;
            this.canvas_width = canvas_width;
            this.canvas_height = canvas_height;
            
            this.tmpCanvas = document.createElement('canvas');
            this.tmpCanvas.width = canvas_width;
            this.tmpCanvas.height = canvas_height;
            this.tmpCtx = this.tmpCanvas.getContext('2d');
            
            this.callback = callback;
        };
        SpriteAnimation.prototype.play = function(){
            this.ctx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.ctx.stroke();
            this.tmpCtx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.tmpCtx.stroke();
            
            var isEnd = false;
            for(var i=0;i<this.spriteCollection.length;i++){
                this.tmpCtx.drawImage(this.spriteCollection[i].sprite[this.spriteCollection[i].index],
                                   0,0,this.spriteCollection[i].img_width, this.spriteCollection[i].img_height, 
                                   this.spriteCollection[i].x, this.spriteCollection[i].y, this.spriteCollection[i].width, this.spriteCollection[i].height);
                this.spriteCollection[i].index++;
                if(this.spriteCollection[i].index >= this.spriteCollection[i].sprite.length){
                    this.spriteCollection[i].index = 0;
                    if(this.interval){
                        clearInterval(this.interval);
                        this.interval = null;
                    }
                    if(this.callback)
                        this.callback();     
                    isEnd = true;
                }
            }
            this.ctx.drawImage(this.tmpCanvas,0,0);
            
            if(!this.interval && !isEnd){
                var _self = this;
                this.interval = setInterval(function(){
                    _self.play();
                }, 1000/this.framerate);
            }
        };
        SpriteAnimation.prototype.showFirst = function(){
            this.ctx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.ctx.stroke();
            this.tmpCtx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.tmpCtx.stroke();
            for(var i=0;i<this.spriteCollection.length;i++){
                this.tmpCtx.drawImage(this.spriteCollection[i].sprite[0],
                                   0,0,this.spriteCollection[i].img_width, this.spriteCollection[i].img_height, 
                                   this.spriteCollection[i].x, this.spriteCollection[i].y, this.spriteCollection[i].width, this.spriteCollection[i].height);
            }
            this.ctx.drawImage(this.tmpCanvas,0,0);
        };
        
        return new SpriteAnimation(spriteCollection, framerate,canvas_ctx, canvas_width, canvas_height, callback);
    }
};