import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

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
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!!user) console.log("signed in");
  else signUserOut();
});

export const signUserOut = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
    })
    .finally(() => console.log("signed out"))
    .catch((error) => console.error(error));
};

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, provider)
    .then((result) => result)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    });
};
