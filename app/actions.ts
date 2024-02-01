"use server";
import { readFile } from "fs";
import { auth } from "@clerk/nextjs";
import mongoose from "mongoose";
import User from "./db/models/user";
import Project from "./db/models/project"
import { revalidatePath } from "next/cache";
import { connectDB } from "./db/connect";


//======================================================================================================


export async function updateUserData( formData: FormData) {
  const { userId } = auth();
  console.log(userId);
  
  
  await User.findOneAndUpdate(
    { user_id: userId }, // Query to find the document with the specified ID
    {
      $set: {
        user_data: {
          name: formData.get("name"),
          title: formData.get("title"),
          description: formData.get("description"),
          image: formData.get("imageUrl")
        },
      },
    }, // Update the 'userData' property with new data
    { new: true } // Return the modified document
  );
}

//======================================================================================================


export async function thisUserData() {
    //kept getting an error saying "operation findOne buffering timed out"
    // it seems that it was working before because the connectDB was running 
    //but we need it here to ensure the user is always connected
    connectDB()
  const { userId } = auth();
  const currentUser = await User.findOne({ user_id: userId });

  const userDataObject = currentUser;
  return userDataObject;
}

//======================================================================================================

//function used to set project up in createUserProject
async function InitializeProject(user_info:Object, projectInfo: Object ) {
//FIXED the duplication error by deleting the collection in mongo compass then restarting it 

  //pass in PROJECT CONTENT OBJECT here
  //this is where we change the project content object
const projectContentObject = {
  tasks: [],
  followers: [],

}//make userID a different string 
 
//create new project instance 
const project = await Project.create({
  user_info: user_info,
  project_info: projectInfo,
  project_content: projectContentObject,
});

console.log(`${project} INSERTED INTO DB`)
}

//======================================================================================================
export async function createUserProject(formData: FormData) {
  //you need to make sure you connect db or you get timeout buffering errors
  connectDB()
  const { userId } = auth();
  const newProjectObject = {
    name: formData.get("name"),
    description: formData.get("description"),
    stack: formData.get("stack"),
    public: formData.get("public")
    
  };

  const updatedUser = await User.findOneAndUpdate(
    { user_id: userId }, // Query to find the document with the specified ID
    { $push: { project_data: newProjectObject } },
    { new: true } // Return the modified document
  );

  //create new project in project collection
  console.log(updatedUser)
  await InitializeProject(updatedUser.user_data, newProjectObject)
    revalidatePath('/dashboard')

    
}

//======================================================================================================

//I got the function working where it returns an array of all matching results containing the search term
//it filters the data through a couple of different components from explore join as search results (declare type there for an array or it breaks)
//then to explore result sector, project interaction then lastly the projectCard.

export async function exploreSearchFunction(searchTerm: string) {
  try {
    // Search for projects based on the name property in the project_info object
    const projectResults = await Project.find({
      'project_info.name': { $regex: searchTerm, $options: 'i' }
    });
    
    // Create an array to store search results
    const searchResults: {user_info: any, project_info: any}[] = []

    // Iterate over each matching project and construct the desired object
    projectResults.forEach(project => {
      const resultObject = {
        user_info: project.user_info,
        project_info: project.project_info
      };
      searchResults.push(resultObject);
    });

    return searchResults;
  } catch (error) {
    console.error('Error searching projects:', error);
    throw error;
  }
}
