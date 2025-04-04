import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdYOwEK7Bexd9nQIbTtJGccpoJtel817A",
  authDomain: "ecommerce-react-621cb.firebaseapp.com",
  projectId: "ecommerce-react-621cb",
  storageBucket: "ecommerce-react-621cb.appspot.com",
  messagingSenderId: "726786797432",
  appId: "1:726786797432:web:228f33acaf07df2a70628d",
  measurementId: "G-DZMGYH5MHN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
