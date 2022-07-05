import React from "react";
import TextArea from "../inputs/TextArea";
import AllNotes from "../notes/AllNotes";

const Workspace = () => {
  return (
    <div className="mt-14">
      <AllNotes />
      <TextArea />
    </div>
  );
};

export default Workspace;
