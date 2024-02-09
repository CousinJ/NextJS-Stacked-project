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
export async function getUserProjects() {
  const {userId} = auth();
  connectDB()
const userProjectArr: any  = []
const userProjects = await Project.find({user_id: userId})

// Iterate over each matching project and construct the desired object
userProjects.forEach(project => {
  
  userProjectArr.push(project);
});
console.log(userProjectArr)
return userProjectArr

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
async function InitializeProject(user_info:Object, projectInfo: Object, ) {
//FIXED the duplication error by deleting the collection in mongo compass then restarting it 
const {userId} = auth()
  //pass in PROJECT CONTENT OBJECT here
  //this is where we change the project content object
const projectContentObject = {
  features: [],
  

}
//submit the userId to the project document

//create new project instance 
const project = await Project.create({

  user_id: userId,
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

async function SearchProjectCollection(searchTerm: string) {
  try {
    // Search for projects based on the name property in the project_info object
    const projectResults = await Project.find({
      'project_info.name': { $regex: searchTerm, $options: 'i' }
    });
    
    // Create an array to store search results
    const searchResults: {_id: any, user_info: any, project_info: any}[] = []

    // Iterate over each matching project and construct the desired object
    projectResults.forEach(project => {
      const resultObject = {
        _id : project._id,
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
//======================================================================================================
async function searchUserCollection(searchTerm: string) {
  try {
    const userResults = await User.find({
      'user_data.name': {$regex: searchTerm, $options: 'i'},
      
      
    })

     // Create an array to store search results
     const searchResults: {user_data: any}[] = []

     // Iterate over each matching project and construct the desired object
     userResults.forEach(user => {
       const resultObject = {
        _id : user._id,
         user_data: user.user_data,
         
       };
       searchResults.push(resultObject);
     });
     console.log(searchResults)
     return searchResults;
   } 
  catch(error) {
    console.error('Error searching users:', error);
    throw error;
  }
}
//======================================================================================================
//I got the function working where it returns an array of all matching results containing the search term
//it filters the data through a couple of different components from explore join as search results (declare type there for an array or it breaks)
//then to explore result sector, project interaction then lastly the projectCard.

export async function exploreSearchFunction(searchTerm: string, userOrProject: string) {
    let searchResults: any = null
    if(userOrProject == 'users') {
      //return empty array and create a conditional in the explore join component to return "no results found " if the array is empty.
      searchResults = searchUserCollection(searchTerm)
    }
    else {
      
      searchResults = SearchProjectCollection(searchTerm)
    }

    return searchResults
}
//======================================================================================================

export async function GetProjectPageData(projectId: string) {
  const projectPageData = await Project.findOne({_id: projectId})
  const returnableObject = {
    _id: projectPageData._id,
    user_id: projectPageData.user_id,
    user_info: projectPageData.user_info,
    project_info: projectPageData.project_info,
    project_content: projectPageData.project_content
    
  }

  return returnableObject
}

//======================================================================================================
export async function createNewFeature(formData: FormData) {

  try {
    const projectId = formData.get('projectId')
   //set taks to empty array
    const featureData = {
      name: formData.get('name'),
      description: formData.get('description'),
      tasks: []
    }
    const projectData = await Project.findOneAndUpdate(
      { _id: projectId }, // Filter criteria
      { $push: { "project_content.features": featureData } }, // Update operation
      { new: true } // Options to return the updated document
    );
    console.log(projectData.project_content.features)
    //revalidate the path of the project (dynamic)
     revalidatePath(`/project/${projectId}`)
  }
  catch(e) {
    console.log('error creating new feature ')
  }
  
}
//======================================================================================================
//function
export async function createNewTask(formData: FormData) {
  try {
   const  feature_index = formData.get('feature_index');
   console.log(feature_index)
    const projectId = formData.get('projectId');

    const taskObject = {
      name: formData.get('name'),
      details: formData.get('details'),
    };

    const taskData = await Project.findOneAndUpdate(
      { 
        _id: projectId
      },
      { 
        $push: { [`project_content.features.${feature_index}.tasks`]: taskObject } // Push taskObject into the tasks array of the feature at feature_index
      },
      { 
        new: true 
      }
    );
    
    // Revalidate the path of the project (dynamic)
    revalidatePath(`/project/${projectId}`);
  } catch(e) {
   console.log('error making task' + e)
  }
}
