import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./UI/Button";

function Model({ ref, children, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md m-auto"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button type="danger">{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default Model;
