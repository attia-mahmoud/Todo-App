import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "@firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0u_bNg4cQX2JdDyq1QuQjq1ScgzFEid4",
  authDomain: "todo-app-4321.firebaseapp.com",
  projectId: "todo-app-4321",
  storageBucket: "todo-app-4321.appspot.com",
  messagingSenderId: "1028190104916",
  appId: "1:1028190104916:web:f863b0be2240755c9b2cc1",
  measurementId: "G-5H8LBVMG24",
};

const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutWithGoogle = () => signOut(auth);

export const db = getFirestore(app);
export const CollectionRef = collection(db, "tasks_records");
