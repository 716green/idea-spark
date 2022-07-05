import React, { useEffect, useState, useContext } from "react";
import StoreContext from "../context/StoreContext";
import { getUserNotes } from "../firebase/firestore";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const { store, setStore } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      const n = await getUserNotes("bob@bbass.co");
      setNotes(n);
    })();
  }, [store]);

  useEffect(() => {
    setStore({ ...store, notes });
  }, [notes]);

  return (
    <section className="xl:mx-14 lg:mx-14 md:mx-14">
      {!store.notes ? (
        <p>No Notes</p>
      ) : (
        store?.notes?.map(({ id, note, status, timestamp }) => {
          return (
            <div key={id}>
              <hr />
              <ul>
                <li>{id}</li>
                <li>{note}</li>
                <li>{status}</li>
                <li>{JSON.stringify(timestamp.seconds)}</li>
              </ul>
            </div>
          );
        })
      )}
    </section>
  );
};

export default AllNotes;
