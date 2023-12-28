import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-rausxh3tlJNHYY6Kq7GVhyYVaphOvFY",
    authDomain: "teccomerce-coder.firebaseapp.com",
    projectId: "teccomerce-coder",
    storageBucket: "teccomerce-coder.appspot.com",
    messagingSenderId: "606312368537",
    appId: "1:606312368537:web:50360a11224fb97f48ab08"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);