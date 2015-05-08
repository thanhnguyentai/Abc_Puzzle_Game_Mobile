CamelMoving = {
    create: function(spriteData, framerate, canvas_ctx, canvas_width, canvas_height){
        var CamelAnimationMoving = function(spriteData, framerate, canvas_ctx, canvas_width, canvas_height){
            this.spriteData = spriteData;
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
        
        CamelAnimationMoving.prototype.play = function(){
            if(this.isstop)
                return;
            
            this.ctx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.ctx.stroke();
            this.tmpCtx.clearRect(0,0,this.canvas_width, this.canvas_height);
            this.tmpCtx.stroke();
            this.tmpCtx.drawImage(this.spriteData.sprite[this.spriteData.index],
                               0,0,this.spriteData.img_width, this.spriteData.img_height, 
                               this.spriteData.x - this.spriteData.step*this.spriteData.stepWidth, this.spriteData.y, 
                               this.spriteData.width, this.spriteData.height);
            this.ctx.drawImage(this.tmpCanvas,0,0);
                               
            this.spriteData.index++;
            if(this.spriteData.index >= this.spriteData.sprite.length){
                this.spriteData.index = 0; 
                this.spriteData.step++;
                if(this.spriteData.x - this.spriteData.step*this.spriteData.stepWidth < -this.spriteData.width/2)
                    this.spriteData.step = 0;
            }
            
            if(!this.interval){
                var _self = this;
                this.interval = setInterval(function(){
                    _self.play();
                }, 1000/this.framerate);
            }
        };
        
        CamelAnimationMoving.prototype.stop = function(){
            this.isstop = true;
            if(this.interval){
                clearInterval(this.interval);
                this.interval = null;
            }
        };
        
        CamelAnimationMoving.prototype.resume = function(){
            this.isstop = false;
            this.play();
        };
        
        CamelAnimationMoving.prototype.resize = function(newWidth,newHeight, newX, newY){
            this.isstop = false;
            this.canvas_width = newWidth;
            this.canvas_height = newHeight;
            this.tmpCanvas.width = newWidth;
            this.tmpCanvas.height = newHeight;
            this.spriteData.index = 0;
            this.spriteData.step = 0;
            this.spriteData.x = newX;
            this.spriteData.y = newY;
            
            this.play();
        };
        
        return new CamelAnimationMoving(spriteData, framerate, canvas_ctx, canvas_width, canvas_height);
    }
};


