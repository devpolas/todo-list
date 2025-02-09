import NoProjects from "./../assets/no-projects.png";
import Button from "./UI/Button";

function EmptyScreen({ handelClick }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjects}
        alt="No project selected"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected!
      </h2>
      <p className="text-stone-400 mb-4">
        Select A Project or Create a New 📃 Project!
      </p>
      <p className="mt-8">
        <Button onClick={handelClick}>Create New Project</Button>
      </p>
    </div>
  );
}

export default EmptyScreen;
