SpritePlay = {
    create: function(spriteCollection, framerate, canvas_ctx, canvas_width, canvas_height){
        var SpriteAnimation = function(spriteCollection, framerate ,canvas_ctx, canvas_width, canvas_height){
            this.spriteCollection = spriteCollection;
            this.framerate = framerate;
            this.ctx = canvas_ctx;
            this.canvas_width = canvas_width;
            this.canvas_height = canvas_height;
            this.isstop = false;
            
            this.tmpCanvas = document.createElement('canvas');
            this.tmpCanvas.width = canvas_width;
            this.tmpCanvas.height = canvas_height;
            this.tmpCtx = this.tmpCanvas.getContext('2d');
        };
        SpriteAnimation.prototype.play = function(){
            if(this.isstop)
                return;
            
            this.ctx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.ctx.stroke();
            this.tmpCtx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.tmpCtx.stroke();
            for(var i=0;i<this.spriteCollection.length;i++){
                this.tmpCtx.drawImage(this.spriteCollection[i].sprite[this.spriteCollection[i].index],
                                   0,0,this.spriteCollection[i].img_width, this.spriteCollection[i].img_height, 
                                   this.spriteCollection[i].x, this.spriteCollection[i].y, this.spriteCollection[i].width, this.spriteCollection[i].height);
                this.spriteCollection[i].index++;
                if(this.spriteCollection[i].index >= this.spriteCollection[i].sprite.length){
                    this.spriteCollection[i].index = 0; 
                }
            }
            this.ctx.drawImage(this.tmpCanvas,0,0);
            
            if(!this.interval){
                var _self = this;
                this.interval = setInterval(function(){
                    //clearTimeout(timeout);
                    _self.play();
                }, 1000/this.framerate);
            }
        };
        
        SpriteAnimation.prototype.stop = function(){
            this.isstop = true;
            if(this.interval)
                clearInterval(this.interval);
        };
        
        SpriteAnimation.prototype.resume = function(){
            this.isstop = false;
            this.play();
        };
        
        return new SpriteAnimation(spriteCollection, framerate,canvas_ctx, canvas_width, canvas_height);
    }
};