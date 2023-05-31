// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA62YzjTq8Zz-ti_PASI-oA0Z_bmFdaJuU",
  authDomain: "lsmgi-7155f.firebaseapp.com",
  projectId: "lsmgi-7155f",
  storageBucket: "lsmgi-7155f.appspot.com",
  messagingSenderId: "887021934272",
  appId: "1:887021934272:web:77d53b3d25e9898e6a7f25",
  measurementId: "G-K0MT6G8YDN"
};

export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);