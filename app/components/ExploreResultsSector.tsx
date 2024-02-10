"use client"
import React,{useState, useEffect} from 'react'
import { connectDB } from '../db/connect'
import ProjectInteraction from './ProjectInteraction'
import UserInteraction from './UserInteraction'


function ExploreResultsSector(props: any) {

    

    return(<div className='w-full p-8'>

<div className='flex flex-col' >
          {/* iterate with map here  */}
          {/* PROJECT */}
          {props.userOrProject === 'projects'  && props.projectSearchData.map((item: any) => (
  item.user_info && <ProjectInteraction key={item.user_info.name} id={item._id} user_info={item.user_info} project_info={item.project_info} />
))}
{/* iterate with map here  */}
          {/* USER */}
{props.userOrProject === 'users' &&  props.userSearchData.map((item: any) => (
  item.user_data.name && <UserInteraction key={item.user_id}  data={item.user_data} id={item.user_id}/>
  ))}

        </div>

    </div>)
}

export default ExploreResultsSector