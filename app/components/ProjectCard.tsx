import React from 'react'

function ProjectCard(props: any) {
    return(<div className='flex flex-col text-sm border border-gray-700  w-64 h-64  bg-gray-800  p-1 rounded-lg m-2'>
            <div className=' text-m text-center bg-zinc-900 text-leftw-full h-8 '>
                {props.data.name}
            </div>
            
            <div className='text-amber-100'>
                description
                <p className=' text-center text-white'> {props.data.description}</p>
            </div>

            <div className='text-teal-500 mt-auto'>
                Stack
                <p className=' text-white' >  {props.data.stack}</p>
            </div>
            <div className=' mt-auto'>
                {props.data.public && <p className="text-green-500">public</p>}
                {!props.data.public && <p className="text-orange-500">private</p>}
                
                
            </div>
            
    </div>)
}

export default ProjectCard