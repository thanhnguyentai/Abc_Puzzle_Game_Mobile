CommonUtils = {
    random: function(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    },
    randomExceptList: function(a, min, max) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        while (this.contains(a, rand)) {
            rand = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return rand;
    },
    randomFloat: function(low, high)
    {
        return low + Math.random() * (high - low);
    },
    shuffle: function(o) {//v1.0
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            ;
        return o;
    },
    contains: function(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    },
    decmical2: function(num) {
        var temp = Math.round(num * 100);
        return temp / 100;
    },
    supportCSS3: function() {
        var style = document.documentElement.style;
        if (
                style.webkitTransition !== undefined ||
                style.MozTransition !== undefined ||
                style.OTransition !== undefined ||
                style.MsTransition !== undefined ||
                style.transition !== undefined
                )
        {
            return true;
        }
        return false;
    },
    checkios: function() {
        var iOS = false;
        var iDevice = ['iPad', 'iPhone', 'iPod'];
        for (var i = 0; i < iDevice.length; i++) {
            if (navigator.platform === iDevice[i]) {
                iOS = true;
                break;
            }
        }
        return iOS;
    },
    checkBrowser: function() {
        var browser = '';
        navigator.sayswho = (function() {
            var ua = navigator.userAgent, tem,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/([\.\d]+)/i)) != null)
                M[2] = tem[1];
            browser = M[0];
        })();
        return browser.toLowerCase();
    },
    checkWebkit: function() {
        $.browser.chrome = $.browser.webkit && !!window.chrome;
        $.browser.safari = $.browser.webkit && !window.chrome;
        if ($.browser.chrome || $.browser.safari)
            return true;
        return false;
    },
    checkMobile: function() {
        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
            return true;
        return false;
    }
};