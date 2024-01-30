import React from "react";
import ProjectCard from "./ProjectCard";
function ProjectInteraction() {

  const dummyProjectData = {
    name: 'Project ex',
    description: 'this is an example project',
    stack: 'python, javascript'
  }

  return (
    <div className="h-96 w-96 m-10 flex flex-col border items-center justify-center">
      <ProjectCard data={dummyProjectData} />
    </div>
  );
}

export default ProjectInteraction;
