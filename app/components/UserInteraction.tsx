import React from "react";
import UserCard from "./UserCard";

// this function is designed to seperate concern and filter data. 
//iterathe through the searchResults on the explore join which is an array of objects and pass each object to the corresponding component
//interaction takes user_info as data prop
//Card takes user_project as data prop
function UserInteraction(props: any) {



  return (
    <div className="w-full  m-2 ">
    <UserCard data={props.data}  />
    {/* other stuff you want to have render on the user (following user link user to see profile etc.) */}
  </div>
  );
}

export default UserInteraction;
