import React, { useRef, useState } from "react";

const Sample = () => {
  const fileRef = useRef();
  const [count, setCount] = useState(0);
  const [sub, setSub] = useState(50);

  //   const [id, setId] = useState(null);
  const idRef = useRef();
  //   let sub = 50;
  console.log("subtracted value ", sub);
  console.log("File ref");
  console.log(fileRef);
  const handleFileOpen = () => {
    fileRef.current.click();
  };
  function dataCall() {
    console.log("printed with delay!!");
  }

  //   const meth = () => {
  //     sub = sub - 1;
  //   };

  const startTimer = () => {
    idRef.current = setTimeout(() => {
      console.log("Time edded");
      setSub("Edded");
    }, 10000);
  };
  const stopTimer = () => {
    clearTimeout(idRef.current);
    setSub("Stopped!!");
  };

  return (
    <div>
      Sampl
      <button onClick={startTimer}>Start </button>
      <button onClick={stopTimer}>Stop {sub}</button>
      <button onClick={handleFileOpen}>Open file</button>
      <br></br>
      <input type="file" ref={fileRef} style={{ display: "none" }}></input>
    </div>
  );
};

export default Sample;
