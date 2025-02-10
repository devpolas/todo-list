import Button from "./UI/Button";
function ProjectSidebar({ handelClick, projects, handelSelectProject, id }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-20">
        Your Projects
      </h2>
      <div>
        <Button onClick={() => handelClick()}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((el) => {
          let classes =
            "w-full  px-2 py-1 rounded-md my-1  hover:text-stone-200 hover:bg-stone-800 text-left";

          if (id === el.id) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-300";
          }

          return (
            <li key={el.id}>
              <button
                onClick={() => handelSelectProject(el.id)}
                className={classes}
              >
                {el.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
