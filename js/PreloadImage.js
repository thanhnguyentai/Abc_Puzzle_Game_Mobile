PreloadImage = {
    create: function(imgsrc, callback){
        var img = new Image();
        img.onload = function(){
            if(callback)
                callback();
        }
        img.src = imgsrc;
        return img;
    }
};