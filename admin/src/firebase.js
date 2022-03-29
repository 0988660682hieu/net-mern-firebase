import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4tYQKMd225aS39_PrtjcIL2TaQOvHzhg",
  authDomain: "net-build-941c6.firebaseapp.com",
  projectId: "net-build-941c6",
  storageBucket: "net-build-941c6.appspot.com",
  messagingSenderId: "101679103413",
  appId: "1:101679103413:web:a7e5627d71fcf4b2742dfc",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
