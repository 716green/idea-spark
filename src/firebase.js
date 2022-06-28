import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
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

// TODO
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log({ status: "signed in", user, uid });
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    console.log({ status: "signed out" });
  }
});

// TODO
signOut(auth)
  .then(() => {
    console.log("signed out");
    // Sign-out successful.
  })
  .catch((error) => {
    console.error(error);
    // An error happened.
  });

const provider = new GoogleAuthProvider();

// TODO
// OPTION 1
export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;

      // console.log({ credential, token, user });
      // return { credential, token, user };
      return result;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    });
};

// TODO is this needed?
// // OPTION 2
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
