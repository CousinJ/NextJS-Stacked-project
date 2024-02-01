"use client"
import React,{useState, useEffect} from 'react'

import ProjectInteraction from './ProjectInteraction'


function ExploreResultsSector(props: any) {

    

    return(<div>

<div className='flex flex-wrap gap-2'>
          {/* iterate with map here  */}
          
          { props.active && props.data.map((item: any) => (<ProjectInteraction key={item.user_info.name} data={item} />))}
        </div>

    </div>)
}

export default ExploreResultsSector