import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwqG6xtF_GBqRleIyfrJDX1-Wx_1acfMA",
  authDomain: "ideaspark-app.firebaseapp.com",
  projectId: "ideaspark-app",
  storageBucket: "ideaspark-app.appspot.com",
  messagingSenderId: "167479572208",
  appId: "1:167479572208:web:94474b5f7536cdae1b7435",
  measurementId: "G-TV14QS4FT0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log({ db });
