
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NewProjectComp from '../components/NewProjectComp';
import { auth } from '@clerk/nextjs';
import { connectDB } from '../db/connect';
import User from '../db/models/user';
import { thisUserData } from '../actions';
import { getUserProjects } from '../actions';


//adding a public or private setting
interface ProjectItem {
  _id: string,
  user_info: object,
  project_info: object,
  project_content: object
}


async function Dashboard() {
  const userDb = await thisUserData()
  //projectData is now one of the project documents
  const projectData = await getUserProjects()
  
  const userData = userDb.user_data
  const {userId} = auth()
  
  console.log(userId)

  async function createUserData(userId: any) {
    connectDB()
    try {
      const userExists = await User.exists({'user_id': userId});
      if(!userExists) {
        const newUserData = User.create({'user_id': userId} )
        console.log(`welcome user ${newUserData}!`)
      }
      
    }
    catch(err) {
      console.log(err, 'catch error on function GetUserData')
    }
  }





  createUserData(userId)

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full h-96  text-gray-200 p-4 rounded-lg m-8 ">
        <div className='w-full h-32'>
        <h2 className='text-2xl font-bold mb-4'>My Projects</h2>
         <NewProjectComp />
        </div>
      {/* passing in the userData because only the user projects show up in this component. in the search results it iterates through an array of users and grabs both objects off it in the map function */}
        <div className='flex flex-col gap-2'>
          {/* iterate with map here  */}
          {projectData.map((item: ProjectItem, index: number) => (<ProjectCard key={item._id} id={item._id} user_info={item.user_info} project_info={item.project_info} />))}
        
        </div>
       
     
      </div>
    </div>
  );
}

export default Dashboard;
