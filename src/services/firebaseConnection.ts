import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpSVISQKXk2OLUl1QsJnmqQ7bSzDz5GRo",
  authDomain: "reactlinks-aab75.firebaseapp.com",
  projectId: "reactlinks-aab75",
  storageBucket: "reactlinks-aab75.appspot.com",
  messagingSenderId: "654378733692",
  appId: "1:654378733692:web:8f977a14867461d646f9f9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};