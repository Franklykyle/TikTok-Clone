import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7w0gQG_MIGgJya4h3I6P-lbyFsuodZt0",
    authDomain: "tik-tok-clone-9ca71.firebaseapp.com",
    projectId: "tik-tok-clone-9ca71",
    storageBucket: "tik-tok-clone-9ca71.appspot.com",
    messagingSenderId: "287209012899",
    appId: "1:287209012899:web:15006d5a63385640d6c916",
    measurementId: "G-DTBVRB4XZJ"
  };
  
  const firebaseapp = 
  firebase.initializeApp(firebaseConfig);
  
  const db = firebaseapp.firestore();
  
  export default db;