// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCoRJm6bvAowFPahfEWyrvuV7u5nsLgPMw",
//     authDomain: "recipe-app-4be44.firebaseapp.com",
//     projectId: "recipe-app-4be44",
//     storageBucket: "recipe-app-4be44.appspot.com",
//     messagingSenderId: "257440177828",
//     appId: "1:257440177828:web:a4e4ccef34bdd91dd55031"
// };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);