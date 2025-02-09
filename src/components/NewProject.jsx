import { useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Model from "./Model";

function NewProject({ handelProjects, handelCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const issueDate = useRef();

  function handelSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredIssueDate = issueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredIssueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    handelProjects({
      title: enteredTitle,
      description: enteredDescription,
      issueDate: enteredIssueDate,
    });
  }

  function handelClear() {
    title.current.value = null;
    description.current.value = null;
    issueDate.current.value = null;
  }
  return (
    <>
      <Model ref={modal} buttonCaption={"Close"}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Please Provide Value</p>
      </Model>
      <div className="w-[35rem] mt-4">
        <menu className="flex gap-2 flex-row items-center justify-end">
          <li>
            <Button type={"danger"} onClick={handelCancel}>
              Cancel
            </Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} title="Title" />
          <Input type="text" ref={description} title="Description" isTextArea />
          <Input type="date" ref={issueDate} title="Issue Date" />
        </div>
        <menu className="flex gap-2 flex-row items-center justify-end">
          <li>
            <Button type="clear" onClick={handelClear}>
              Clear
            </Button>
          </li>
          <li>
            <Button onClick={handelSave}>Save</Button>
          </li>
        </menu>
      </div>
    </>
  );
}

export default NewProject;
