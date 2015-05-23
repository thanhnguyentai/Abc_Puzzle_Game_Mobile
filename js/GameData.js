GameData = {
    isAndroid: false,
    isIOS: false,
    linkGooglePlay: 'https://play.google.com/store/apps/developer?id=afkiihooyo',
    linkAppleStore: '',
    linkWebsite: 'http://afkiihooyo.com',
    linkFacebook: 'https://www.facebook.com/pages/Afkeeniihooyo/438260362989462',

    baseUrl: 'images/GameData/',

    getBaseUrlAudio: function(){
        if(this.isAndroid){
            return "/android_asset/www/"+this.baseUrl;
        }
        else{
            return this.baseUrl;
        }
    },
    letter: new Array(),
    level1: {
        directory: 'LEVEL_1',
        name: 'L1',
        numberPart: 4
    },
    level2: {
        directory: 'LEVEL_2',
        name: 'L2',
        numberPart: 6
    },
    level3: {
        directory: 'LEVEL_3',
        name: 'L3',
        numberPart: 8
    },
    level4: {
        directory: 'LEVEL_4',
        name: 'L4',
        numberPart: 12
    },
    level5: {
        directory: 'LEVEL_5',
        name: 'L5',
        numberPart: 15
    },
    init: function(){
        this.letter = new Array();
        this.letter.push({
            letter: 'B',
            word: 'Cat',
            audio: 'B BISAD',
            isSelected: true
        });
        this.letter.push({
            letter: 'C',
            word: 'Mango',
            audio: 'C CANBE'
        });
        this.letter.push({
            letter: 'D',
            word: 'Ship',
            audio: 'D DOONI'
        });
        this.letter.push({
            letter: 'DH',
            word: 'Hyena',
            audio: 'DH DHURWAA'
        });
        this.letter.push({
            letter: 'F',
            word: 'Horse',
            audio: 'F FARAS'
        });
        this.letter.push({
            letter: 'G',
            word: 'Ostrich',
            audio: 'G GOROYO'
        });
        this.letter.push({
            letter: 'H',
            word: 'Camel',
            audio: 'H HAL'
        });
        this.letter.push({
            letter: 'J',
            word: 'Jug',
            audio: 'J JEEG'
        });
        this.letter.push({
            letter: 'K',
            word: 'Bell',
            audio: 'K KOOR'
        });
        this.letter.push({
            letter: 'KH',
            word: 'Kaamiz',
            audio: 'KH KHAMIIS'
        });
        this.letter.push({
            letter: 'L',
            word: 'Lion',
            audio: 'L LIBAAX'
        });
        this.letter.push({
            letter: 'M',
            word: 'Eliphent',
            audio: 'M MAROODI'
        });
        this.letter.push({
            letter: 'N',
            word: 'Toffees',
            audio: 'N NACNAC'
        });
        this.letter.push({
            letter: 'Q',
            word: 'Sun',
            audio: 'Q QORRAX'
        });
        this.letter.push({
            letter: 'R',
            word: 'Frog',
            audio: 'R RAH'
        });
        this.letter.push({
            letter: 'S',
            word: 'Deer',
            audio: 'S SAGAARO'
        });
        this.letter.push({
            letter: 'SH',
            word: 'Cub',
            audio: 'SH SHABEEL'
        });
        this.letter.push({
            letter: 'T',
            word: 'Crow',
            audio: 'T TUKE'
        });
        this.letter.push({
            letter: 'W',
            word: 'Rhino',
            audio: 'W WIYIL'
        });
        this.letter.push({
            letter: 'X',
            word: 'Moth',
            audio: 'X XOON'
        });
        this.letter.push({
            letter: 'Y',
            word: 'Croc',
            audio: 'Y YAXAAS'
        });
    }
};

GameData.init();