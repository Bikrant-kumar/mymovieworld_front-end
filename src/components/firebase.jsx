import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBkF-112mg-KAxxLGh_jAFXvLH3oUFiZDQ",
    authDomain: "mymovieworld-a0b61.firebaseapp.com",
    databaseURL: "https://mymovieworld-a0b61.firebaseio.com",
    projectId: "mymovieworld-a0b61",
    storageBucket: "mymovieworld-a0b61.appspot.com",
    messagingSenderId: "140200052823",
    appId: "1:140200052823:web:14018e684980bbdc59fb12",
    measurementId: "G-MCW6R33R0L"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  export default fire;