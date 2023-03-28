import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBynK66UCJtGREzLADq8YsrRvCfYRQgj7k",
  authDomain: "store-ae981.firebaseapp.com",
  projectId: "store-ae981",
  storageBucket: "store-ae981.appspot.com",
  messagingSenderId: "986750315455",
  appId: "1:986750315455:web:ba71f7fbc2f38b29ebcf0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
