import React, { forwardRef } from "react";

const Modal = forwardRef(({ handleClose }, ref) => {
  return (
    <dialog ref={ref}>
      <p>Alert!!</p>
      <button onClick={handleClose}>close</button>
    </dialog>
  );
});

export default Modal;
