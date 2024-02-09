"use client"
import React,{useState, useEffect} from 'react'

import { createNewTask } from '../actions'



function TaskForm(props: any) {


   
console.log(props.feature_index)



const handleClose = () => {
    props.setModalBool(false)
}

    return( 
        <form onSubmit={handleClose} action={createNewTask}> <div>
        {props.modalBool &&       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        
        <div className='" border w-full h-auto bg-gray-800 text-white p-8  rounded-lg m-8  overflow-y-auto"'>
        <h1 className='text-2xl'> New Task</h1>
    {/* name */}
               <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                
               <div className='w-20 h-full items-center '>
                   <h3>Name</h3>
                   </div>
               <input  name="name" type="text"  className="input input-bordered input-primary w-full max-w-xs m-2 text-sm" />
               </div>


   {/* Details */}
               <div className="w-full h-32 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Details</h3>
                   </div>
                   
               <textarea   name='details' maxLength={250}   className="input input-bordered input-primary w-full max-w-xl m-4 h-full text-sm p-2" />
               </div>
 
 
        <input name='projectId' type='hidden' value={props.projectId} />
        <input name='feature_index' type='hidden' value={props.feature_index} />
  
   {/*Create*/}
   <div className=" w-full h-32 text-white p-4 rounded-lg m-4 flex items-center">
     {/* Other content goes here */}
     <button onClick={handleClose} className="btn btn-neutral m-1 ml-auto">Cancel</button>
     <button  type="submit" className="btn btn-primary m-1 ">Create</button>
     
   </div>
   
   
   {/* end of form */}
           </div>
    </div>}
      
    </div></form>
   

    )
}

export default TaskForm