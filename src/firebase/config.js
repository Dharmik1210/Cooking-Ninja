import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBaIDMTZZhoIJ1KEBfemlkAqYedDwu2ooI",
    authDomain: "jethiyas-kitchen-site.firebaseapp.com",
    projectId: "jethiyas-kitchen-site",
    storageBucket: "jethiyas-kitchen-site.appspot.com",
    messagingSenderId: "218124542677",
    appId: "1:218124542677:web:6cab9d33347cd48006b85c"
  };

  //initiliaze firebase 
  firebase.initializeApp(firebaseConfig)
  //init services
  const projectFirestore=firebase.firestore()
  export {projectFirestore}