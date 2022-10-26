// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChN5F08hCncKZIX6tgy4OYDbjyxWjVIDs",
  authDomain: "dragon-news-5fbe6.firebaseapp.com",
  projectId: "dragon-news-5fbe6",
  storageBucket: "dragon-news-5fbe6.appspot.com",
  messagingSenderId: "351504370577",
  appId: "1:351504370577:web:d22ba916ebf697ff352830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;