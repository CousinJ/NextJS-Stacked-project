import React from "react";
import ProjectCard from "./ProjectCard";

// this function is designed to seperate concern and filter data. 
//iterathe through the searchResults on the explore join which is an array of objects and pass each object to the corresponding component
//interaction takes user_info as data prop
//Card takes user_project as data prop

//props are an indnex of an array with two objects in each index.
function ProjectInteraction(props: any) {

  

  return (
    <div className="h-96 w-96 m-10 flex flex-col border items-center justify-center">
      <ProjectCard data={props.data.project_info} />
      {/* other stuff you want to have render on the user (following user link user to see profile etc.) */}
    </div>
  );
}

export default ProjectInteraction;
