"use client"
import React,{useState, useEffect} from 'react'

import ProjectInteraction from './ProjectInteraction'


function ExploreResultsSector(props: any) {

    

    return(<div className='w-full p-8'>

<div className='flex flex-col' >
          {/* iterate with map here  */}
          
          {props.userOrProject == 'projects' && props.active && props.data.map((item: any) => (<ProjectInteraction key={item.user_info.name} data={item} />))}
        </div>

    </div>)
}

export default ExploreResultsSector