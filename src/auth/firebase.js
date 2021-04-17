import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUFGLxaU1ouwR_7TxdUH8Ggz_ocN3Ipt8",
  authDomain: "quote-pocket.firebaseapp.com",
  projectId: "quote-pocket",
  storageBucket: "quote-pocket.appspot.com",
  messagingSenderId: "566367654744",
  appId: "1:566367654744:web:c4c31f0bab6497d13d4b2d",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
