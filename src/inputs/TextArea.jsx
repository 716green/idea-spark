import { CheckIcon } from "@heroicons/react/solid";
import { useState, useContext } from "react";
import { addNoteToDb } from "../firebase/firestore";
import StoreContext from "../context/StoreContext";
import { v4 as uuidv4 } from "uuid";

const TextArea = () => {
  const { store, setStore } = useContext(StoreContext);
  const [textInput, setTextInput] = useState("");

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      note: textInput,
      status: "uncategorized",
      timestamp: new Date(),
    };

    addNoteToDb(store.user.email, newNote);
    setTextInput("");
    const s = store;
    s.notes.push(newNote);
    console.log({ s });
    setStore(s);
  };

  return (
    <section>
      <div>
        <hr className="my-2" />
        <label
          htmlFor="textarea"
          className="block text-sm font-medium text-gray-700"
        >
          Add note
        </label>
        <div className="mt-1">
          <textarea
            onChange={({ target: { value } }) => setTextInput(value)}
            rows={4}
            name="textarea"
            id="textarea"
            className="border-2 shadow-sm text-xl p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            defaultValue={textInput}
          />
        </div>
      </div>
      <button
        onClick={addNote}
        className="mx-auto my-2 bg-black text-white p-4 rounded-full flex"
      >
        <CheckIcon className="w-8" />
      </button>
    </section>
  );
};

export default TextArea;
