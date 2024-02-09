
"use client"

import React,{useState, useEffect} from 'react'
import TaskUI from './TaskUI'
import TaskForm from './TaskForm'


function FeatureUI(props: any) {

  interface TaskItem {
    name: string,
    details: string
  }


  const [modal, setModal] = useState(false)
  useEffect(() => {setModal(false)}, [])
  
  const handleClick = () => {setModal(true)}







    return(<div className='w-96 h-auto flex flex-col items-center  rounded-xl bg-base-300 shadow-xl p-4 m-8'>

{/* feature name */}
<div className='w-full h-20 rounded-lg flex items-center bg-base-200 justify-center mb-4  '>
    <h2 className='text-xl'>{props.data.name}</h2>
</div>
{/* all of the TASKS of that feature */} 
{/* iterate through feature.tasks arr */}
{props.data.tasks.map((item: TaskItem, index: number) => (<TaskUI key={index} data={item}  />))}


{/* add task button */}
<div onClick={handleClick} className='w-full h-16 rounded-xl flex bg-primary bg-opacity-30 hover:bg-opacity-80  items-center justify-center mt-8 transition duration-300 ease-in-out'>
<div
     className="w-5 h-5  rounded-full   overflow-hidden"
            style={{
              backgroundImage: `url('/whiteplus.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
</div>

{/* add taskForm modal here */}



 {/* Blurred overlay */}
 {modal && (
        <div className="fixed inset-0 z-10 bg-black opacity-50 backdrop-filter backdrop-blur-sm" />
      )}

      {/* feature Form */}
      {modal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          
          <TaskForm projectId={props.projectId} feature_index={props.feature_index} setModalBool={setModal} modalBool={modal} />
        </div>
      )}
    </div>)
}


export default FeatureUI