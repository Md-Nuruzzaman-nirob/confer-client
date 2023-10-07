import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDEuucMTHEwBdRO_1iuhM2T0HFWnb3mJNs",
    authDomain: "confer-42442.firebaseapp.com",
    projectId: "confer-42442",
    storageBucket: "confer-42442.appspot.com",
    messagingSenderId: "545270458539",
    appId: "1:545270458539:web:97d6f384090b6186f96fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);