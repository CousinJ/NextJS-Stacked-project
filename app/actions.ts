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
const userIdentity = {

} 
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

export async function exploreSearchFunction(searchTerm: string) {
  //seems to be working as expected you will need to change out the 0 for other iterations.for more search results
  //needs to have a user/project search filter to change the search query.
  try {
    // Search for projects based on the name property in the project_info object
    const projectResults = await Project.find({
      'project_info.name': { $regex: searchTerm, $options: 'i' }
    });
    console.log(projectResults)
    //change to plain json 
    const returnableObject = {
      user_info: projectResults[0].user_info,
      project_info: projectResults[0].project_info

    
    }

    console.log(returnableObject)

    return returnableObject;
  } catch (error) {
    console.error('Error searching projects:', error);
    throw error;
  }
}
