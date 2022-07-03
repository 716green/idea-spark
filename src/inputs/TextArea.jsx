import { useState } from "react";

const TextArea = () => {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      {/* <span>{textInput}</span> */}
      <label
        htmlFor="textarea"
        className="block text-sm font-medium text-gray-700"
      >
        Add your note
      </label>
      <div className="mt-1">
        <textarea
          onChange={({ target: { value } }) => setTextInput(value)}
          rows={4}
          name="textarea"
          id="textarea"
          overflowX="none"
          className=" border-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue={textInput}
        />
      </div>
    </div>
  );
};

export default TextArea;
