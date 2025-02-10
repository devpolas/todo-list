import { useState } from "react";

function NewTask({ handelAddTask }) {
  const [task, setTask] = useState("");
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 py-1 rounded-sm bg-stone-200"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        className="text-stone-700 bg-stone-300 hover:text-stone-950 hover:bg-stone-200 rounded-sm p-1"
        onClick={() => {
          if (task.trim() === "") {
            return;
          }
          handelAddTask(task);
          setTask("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
