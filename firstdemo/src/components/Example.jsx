import React, { useCallback, useRef, useState } from "react";
import Modal from "./Modal";

const Example = () => {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");
  const handleGreeting = useCallback(() => {
    setGreet("Hi " + name);
  }, [name]);

  const modalRef = useRef();

  //   {
  //     current:{
  //        ..
  //        ...
  //        ....
  //        ...
  //     }
  //   }

  const handleOpen = () => {
    modalRef.current.showModal();
  };
  const handleClose = () => {
    modalRef.current.close();
  };
  return (
    <div>
      Example
      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleGreeting}>Greet!</button>
      <p>{greet}</p>
      <Modal handleClose={handleClose} ref={modalRef}></Modal>
      <button onClick={handleOpen}>Open</button>
    </div>
  );
};

export default Example;
