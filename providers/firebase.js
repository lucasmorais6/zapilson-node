const firebase = require('firebase')

firebase.initializeApp({
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "zapy-53486.firebaseapp.com",
    databaseURL: "https://zapy-53486.firebaseio.com",
    projectId: "zapy-53486",
    storageBucket: "",
    messagingSenderId: "862867251067",
    appId: "1:862867251067:web:d6898a6cef5aeaae"
  });

module.exports=firebase.database()