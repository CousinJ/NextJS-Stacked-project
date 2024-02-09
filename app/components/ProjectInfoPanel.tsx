"use client"
import React, {useState, useEffect} from 'react'
import ProjectForm from './ProjectForm'
function ProjectInfoPanel(props: any) {






    const [modal, setModal] = useState(false)
    useEffect(() => {setModal(false)}, [])
    
    const handleClick = () => {setModal(true)}





    return(
    <div className='flex flex-col'>
        <div className="w-full h-auto flex items-center justify-center bg-base-200 rounded-xl">


    {/* title name */}
    <div className='w-1/2 h-80 flex flex-col '>
        <h1 className='p-12 text-4xl'>{props.data.project_info.name}</h1>
        
    </div>
    {/* description area */}
    <div className='w-1/2 h-80  flex flex-col'>
        <h2 className='m-4 text-lg'>Description</h2>
        <p className='p-8'>{props.data.project_info.description}</p>
    </div>



</div>
{/* add feature button */}
<div onClick={handleClick} className='w-1/6 h-16 rounded-xl flex bg-primary bg-opacity-50 hover:bg-opacity-100  items-center justify-center mt-8 transition duration-300 ease-in-out'>
    <h3 className='m-4 text-xl text-base-300'>Add Feature</h3>
<div
     className="w-5 h-5  rounded-full   overflow-hidden"
            style={{
              backgroundImage: `url('/whiteplus.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
</div>


{/* add the featureForm modal here */}


 {/* Blurred overlay */}
 {modal && (
        <div className="fixed inset-0 z-10 bg-black opacity-50 backdrop-filter backdrop-blur-sm" />
      )}

      {/* feature Form */}
      {modal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <ProjectForm setModalBool={setModal} modalBool={modal} />
        </div>
      )}

</div>
    )
}

export default ProjectInfoPanel
