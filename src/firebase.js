import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqO48cIpu39A0gYZjfir1qioo0BdzFfls",
  authDomain: "zinder-b4e05.firebaseapp.com",
  databaseURL: "https://zinder-b4e05.firebaseio.com",
  projectId: "zinder-b4e05",
  storageBucket: "zinder-b4e05.appspot.com",
  messagingSenderId: "382691482575",
  appId: "1:382691482575:web:4543117feac83a5bcbd0ba",
  measurementId: "G-V8ER99P6VD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database;