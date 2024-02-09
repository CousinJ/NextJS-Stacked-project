
"use client"

import React from 'react'
import TaskUI from './TaskUI'


function FeatureUI() {











    return(<div className='w-96 h-auto flex flex-col items-center  rounded-xl bg-base-300 shadow-xl p-4 m-8'>

{/* feature name */}
<div className='w-full h-20 rounded-lg flex items-center bg-base-200 justify-center mb-4  '>
    <h2 className='text-xl'>Feature 1</h2>
</div>
{/* all of the TASKS of that feature */} 
<TaskUI />
<TaskUI />
<TaskUI />
<TaskUI />

{/* add task button */}
<div className='w-full h-16 rounded-xl flex bg-primary bg-opacity-30 hover:bg-opacity-80  items-center justify-center mt-8 transition duration-300 ease-in-out'>
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

    </div>)
}


export default FeatureUI