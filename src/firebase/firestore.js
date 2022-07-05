import { db } from ".";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";

export const getUserNotes = async (userEmail) => {
  const docRef = doc(db, "users", userEmail);
  const d = await getDoc(docRef);
  const currentNotes = d.data()?.notes || [];
  return currentNotes;
};

export const addNoteToDb = async (userEmail, newNote) => {
  if (!userEmail || !newNote) {
    return console.error("Missing userEmail or note");
  }

  // const newNote = {
  //   id: uuidv4(),
  //   note,
  //   status: "uncategorized",
  //   timestamp: new Date(),
  // };

  const docRef = doc(db, "users", userEmail);
  const d = await getDoc(docRef);
  const currentNotes = d.data()?.notes || [];

  if (!d.exists()) {
    //* Add document with notes if user document notes don't exist
    console.log("no document");
    const colRef = collection(db, "users", userEmail, "notes");
    const document = doc(db, "notes", { notes: [newNote] });

    addDoc(colRef, document);
  } else if (d.exists() && currentNotes.length) {
    //* Add newNote to notes arr if notes exist
    await updateDoc(docRef, {
      notes: [...currentNotes, newNote],
    });
  } else if (d.exists() && !currentNotes.length) {
    //* Create if document exists but notes are empty
    await setDoc(docRef, {
      notes: [noteObj],
    });
  }
};
