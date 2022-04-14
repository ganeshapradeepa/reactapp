import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBdekU9zaGwv1OAMbwC0wqVZYqfWyb3OI",
  authDomain: "j-shop-4d135.firebaseapp.com",
  projectId: "j-shop-4d135",
  storageBucket: "j-shop-4d135.appspot.com",
  messagingSenderId: "344743451722",
  appId: "1:344743451722:web:0c284d0e9c3d2813951ab3",
  measurementId: "G-54CXED4LRK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth}; 