import NewProject from "./components/NewProject";
import EmptyScreen from "./components/EmptyScreen";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import ShowProject from "./components/ShowProject";

function App() {
  const [projectState, setProjectedState] = useState({
    selectedProject: "noProject",
    show: "",
    projects: [],
  });

  function handelSelectTask(id) {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        show: "show",
        selectedProject: id,
      };
    });
  }

  function handelDeleteTask() {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        show: "",
        selectedProject: "noProject",
        projects: prevState.projects.filter(
          (pro) => pro.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handelClick() {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedProject: "newProject",
      };
    });
  }

  function handelProjects(projectData) {
    setProjectedState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.ceil(Math.random() * 10101010 + Math.random() * 11110000),
      };
      return {
        ...prevState,
        selectedProject: "noProject",

        projects: [...prevState.projects, newProject],
      };
    });
  }

  const content = projectState.projects.find(
    (pro) => projectState.selectedProject === pro.id
  );

  function handelCancel() {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedProject: "noProject",
      };
    });
  }
  return (
    <main className="h-screen flex gap-8 my-8">
      <ProjectSidebar
        handelClick={handelClick}
        projects={projectState.projects}
        handelSelectTask={handelSelectTask}
      />
      {projectState.selectedProject === "newProject" && (
        <NewProject
          handelProjects={handelProjects}
          handelCancel={handelCancel}
        />
      )}
      {projectState.selectedProject === "noProject" && (
        <EmptyScreen handelClick={handelClick} />
      )}
      {projectState.show === "show" && (
        <ShowProject project={content} handelDeleteTask={handelDeleteTask} />
      )}
    </main>
  );
}

export default App;
