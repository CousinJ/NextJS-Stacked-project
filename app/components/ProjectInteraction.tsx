import React from "react";
import ProjectCard from "./ProjectCard";

// this function is designed to seperate concern and filter data. 
//iterathe through the searchResults on the explore join which is an array of objects and pass each object to the corresponding component
//interaction takes user_info as data prop
//Card takes user_project as data prop

//props are an indnex of an array with two objects in each index.
function ProjectInteraction(props: any) {

  
//add logic for selecting project 
  return (
    <div className="w-full  m-2 ">
      <ProjectCard data={props.data.project_info} />
      {/* other stuff you want to have render on the user (following user link user to see profile etc.) */}
    </div>
  );
}

export default ProjectInteraction;
