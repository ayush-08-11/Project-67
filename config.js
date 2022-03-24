import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAviIOsQ8C5DylqXf6ZqEPc8usGiaSklOs",
  authDomain: "project-67-779db.firebaseapp.com",
  projectId: "project-67-779db",
  storageBucket: "project-67-779db.appspot.com",
  messagingSenderId: "402517359267",
  appId: "1:402517359267:web:252ac7e8c804d4da219d16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();