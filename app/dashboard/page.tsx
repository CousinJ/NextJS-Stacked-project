
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NewProjectComp from '../components/NewProjectComp';
import { auth } from '@clerk/nextjs';
import { connectDB } from '../db/connect';
import User from '../db/models/user';
import { thisUserData } from '../actions';


//adding a public or private setting
interface ProjectItem {
  name: string,
  description: string,
  stack: string,
  public: boolean
}


async function Dashboard() {
  const userDb = await thisUserData()
  const projectData = userDb.project_data
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
      <div className="w-full h-96  text-white p-4 rounded-lg m-8 ">
        <div className='w-full h-32'>
        <h2 className='text-2xl font-bold mb-4'>My Projects</h2>
         <NewProjectComp />
        </div>
      
        <div className='flex flex-wrap gap-2'>
          {/* iterate with map here  */}
          {projectData.map((item: ProjectItem) => (<ProjectCard key={item.name} data={item} />))}
        
        </div>
       
     
      </div>
    </div>
  );
}

export default Dashboard;
