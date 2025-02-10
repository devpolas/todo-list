import NewTask from "./NewTask";

function Task({
  handelAddTask,
  handelDeleteTask,
  tasks,
  projectID,
  handelChange,
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask handelAddTask={handelAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) =>
            task.projectID !== projectID ? (
              "This project does not have any tasks yet"
            ) : (
              <li
                key={task.id}
                className="flex justify-between p-4 bg-stone-50 m-1"
              >
                <span>
                  <input
                    type="checkbox"
                    value={task.checked}
                    onChange={() => handelChange(task.id)}
                  />
                  <span
                    className={`ml-4 ${
                      task.checked ? "line-through decoration-red-700" : ""
                    }`}
                  >
                    {task.task}
                  </span>
                </span>
                <span>
                  <span>
                    <button
                      className="text-orange-800 hover:text-orange-500 rounded"
                      onClick={() => handelDeleteTask(task.id)}
                    >
                      Clear
                    </button>
                  </span>
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
}

export default Task;
