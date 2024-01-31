"use client"
import React,{useState, useEffect} from 'react'
import { createUserProject } from '../actions'




function ProjectForm(props: any) {


   

    //use hidden input tp send publicProject up to the server action
const [publicProject, setPublicProject] = useState(1)

const [divStyle, setDivStyle] = useState({
    slideAmount: '12',
    color: 'bg-green-500'
  })



    const handleSelectClick = () => {
        console.log(divStyle.slideAmount)
        console.log(publicProject)
       if(publicProject) {
        setDivStyle({
            slideAmount: '0',
            color: 'bg-red-500'
        })
        setPublicProject(0)
       }
       else {
        setDivStyle({
            slideAmount: '12',
            color: 'bg-green-500'
        })
        setPublicProject(1)
       }
       
        }











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
    {/* Public? */}
   <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   
                    
                    {!publicProject && <h3>Private</h3> || publicProject && <h3>Public</h3>}
                    
                   </div>
                   <div className=" w-full h-32 text-white p-4 rounded-lg m-4 flex items-center">
                    <input type="hidden" name="public" value={publicProject}></input>
     {/* yes no buttons */}
     {/* going to redo this whole UI the values work great but the animation with translatex does not work some weird css thing */}
     <div  onClick={handleSelectClick} className={`${divStyle.color} w-24 h-8 rounded-xl`}> 
     
        <div  className={`  w-1/2 h-8 rounded-xl transition-all duration-200 ease-in-out border  bg-gray-800 `}>
            

        </div>
     </div>
     
   </div>
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