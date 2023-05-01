// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChLZK62wxR_oeQ4aMzjp7V2_x1qA5bUlU",
  authDomain: "fastest-food-service.firebaseapp.com",
  projectId: "fastest-food-service",
  storageBucket: "fastest-food-service.appspot.com",
  messagingSenderId: "428305838617",
  appId: "1:428305838617:web:2bef1dbf9e4a0ca785b088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;