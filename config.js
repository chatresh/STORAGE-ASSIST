import firebase from 'firebase';
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbgfkgOmEwnGy9yH4NRqAaboxQtBu_7wQ",
  authDomain: "storage-assist-cddf7.firebaseapp.com",
  projectId: "storage-assist-cddf7",
  storageBucket: "storage-assist-cddf7.appspot.com",
  messagingSenderId: "947916101058",
  appId: "1:947916101058:web:debf182aa3c1bb6844725b",
  measurementId: "G-HYLP60DRE0"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
