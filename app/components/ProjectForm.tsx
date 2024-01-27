"use client"
import React from 'react'
import { createUserProject } from '../actions'
function ProjectForm(props: any) {

const handleClose = () => {
    props.setModalBool(false)
}

    return( 
        <form onSubmit={handleClose} action={createUserProject}> <div>
        {props.modalBool &&       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='" border w-full h-auto bg-gray-800 text-white p-8  rounded-lg m-8  overflow-y-auto"'>
    {/* name */}
               <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
               <div className='w-20 h-full items-center '>
                   <h3>Name</h3>
                   </div>
               <input  name="name" type="text"  className="input input-bordered input-primary w-full max-w-xs m-2 text-sm" />
               </div>


   {/* Description */}
               <div className="w-full h-32 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Description</h3>
                   </div>
                   
               <textarea   name='description' maxLength={250}   className="input input-bordered input-primary w-full max-w-xl m-4 h-full text-sm p-2" />
               </div>
   {/* Stack */}
   <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Stack</h3>
                   </div>
                   <input  name="stack" type="text"  className="input input-bordered input-primary w-full max-w-xs m-2 text-sm" />         
               </div>
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

export default ProjectForm