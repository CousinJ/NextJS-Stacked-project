"use server";
import { readFile } from "fs";
import { auth } from "@clerk/nextjs";
import mongoose from "mongoose";
import User from "./db/models/user";
import { revalidatePath } from "next/cache";
import { connectDB } from "./db/connect";




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



export async function createUserProject(formData: FormData) {
  const { userId } = auth();
  const newProjectObject = {
    name: formData.get("name"),
    description: formData.get("description"),
    stack: formData.get("stack"),
    
  };

  const updatedUser = await User.findOneAndUpdate(
    { user_id: userId }, // Query to find the document with the specified ID
    { $push: { project_data: newProjectObject } },
    { new: true } // Return the modified document
  );

    revalidatePath('/dashboard')
}


export async function exploreSearchFunction(searchTerm: string) {
 // the explore join component uses this function

 //it needs to return the search for users and projects. 

 //I am going to make a private and public setting to search a new model called public_projects.
}

