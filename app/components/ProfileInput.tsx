"use client"
import React from 'react'
import { useState, ChangeEvent, useEffect } from 'react'


function ProfileInput(props: any) {

    const loadedUserData = {
        name: props.userData.name,
        title: props.userData.title,
        description: props.userData.description
    }

    const [currentUserData, setCurrentUserData] = useState(loadedUserData)
// Refrsh the page and set database Data as the client data
    useEffect(() => {setCurrentUserData(loadedUserData)}, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Destructure 'name' and 'value' from the event target
        const { name, value } = e.target;
      
        // Update state with the new value for the specific field
        setCurrentUserData((prevFormData) => ({
          ...prevFormData, // Spread the previous state
          [name]: value,   // Update the specific field with the new value
        }));
      };

    return( 
        
        
        <div className='"w-full h-auto bg-gray-800 text-white p-8  rounded-lg m-8  overflow-y-auto"'>
    {/* name */}
               <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
               <div className='w-20 h-full items-center '>
                   <h3>Name</h3>
                   </div>
               <input value={currentUserData.name} onChange={handleChange}  name="name" type="text"  className="input input-bordered input-primary w-full max-w-xs m-2 text-sm" />
               </div>
   {/* Title */}
               <div  className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Title</h3>
                   </div>
                   
               <input value={currentUserData.title} onChange={handleChange} name="title" type="text"  className="input input-bordered input-primary w-full max-w-xs m-2 text-sm" />
               </div>
   {/* Description */}
               <div className="w-full h-32 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Description</h3>
                   </div>
                   
               <textarea value={currentUserData.description} onChange={handleChange}   name='description' maxLength={250}   className="input input-bordered input-primary w-full max-w-xl m-4 h-full text-sm p-2" />
               </div>
   {/* Stack */}
   <div className="w-full h-16 bg-gray-800 text-white p-4 rounded-lg m-4 flex items-center">
                   <div className='w-20 h-full items-center '>
                   <h3>Stack</h3>
                   </div>
                   <button className="btn btn-neutral">Select Languages</button>
               
               </div>
   {/*Update Data Button*/}
   <div className="w-full h-16 text-white p-4 rounded-lg m-4 flex items-center">
     {/* Other content goes here */}
   
     <button type="submit" className="btn btn-primary ml-auto">Save Changes</button>
   </div>
   
   
   {/* end of form */}
           </div>)
}

export default ProfileInput