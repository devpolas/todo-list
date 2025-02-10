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
    tasks: [],
  });

  function handelAddTask(test) {
    setProjectedState((prevState) => {
      const task = {
        id: Math.ceil(Math.random() * 10101010 + Math.random() * 11110000),
        projectID: prevState.selectedProject,
        task: test,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, task],
      };
    });
  }
  function handelDeleteTask(id) {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handelSelectProject(id) {
    setProjectedState((prevState) => {
      return {
        ...prevState,
        show: "show",
        selectedProject: id,
      };
    });
  }

  function handelDeleteProject() {
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
        show: "",
      };
    });
  }

  function handelAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.ceil(Math.random() * 10101010 + Math.random() * 11110000),
    };
    setProjectedState((prevState) => {
      return {
        ...prevState,
        selectedProject: "noProject",
        projects: [...prevState.projects, newProject],
      };
    });
    handelSelectProject(newProject.id);
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
        handelSelectProject={handelSelectProject}
        id={projectState.selectedProject}
      />
      {projectState.selectedProject === "newProject" && (
        <NewProject
          handelAddProject={handelAddProject}
          handelCancel={handelCancel}
        />
      )}
      {projectState.selectedProject === "noProject" && (
        <EmptyScreen handelClick={handelClick} />
      )}
      {projectState.show === "show" && (
        <ShowProject
          project={content}
          handelDeleteProject={handelDeleteProject}
          handelAddTask={handelAddTask}
          handelDeleteTask={handelDeleteTask}
          tasks={projectState.tasks}
          projectID={projectState.selectedProject}
        />
      )}
    </main>
  );
}

export default App;
