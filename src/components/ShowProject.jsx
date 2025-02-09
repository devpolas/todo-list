import Button from "./UI/Button";

function ShowProject({ project, handelDeleteTask }) {
  function formateDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  }
  return (
    <div className="w-[35rem] mt-4">
      <header className="pb-4 mb-4border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-600 mb-2">
            {project.title}
          </h2>
          <Button onClick={handelDeleteTask} type="danger">
            Delete
          </Button>
        </div>
      </header>
      <p className="mb-4 text-stone-400 border-b-2 ">
        {formateDate(project.issueDate)}
      </p>
      <p className="text-stone-400 mb-4 whitespace-pre-wrap">
        {project.description}
      </p>
    </div>
  );
}

export default ShowProject;
