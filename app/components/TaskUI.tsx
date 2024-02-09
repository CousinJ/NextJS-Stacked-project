
"use client"

import React from 'react'

function TaskUI(props: any) {
    return(<div className="collapse bg-base-200 m-1">
    <input type="checkbox" className="peer " /> 
    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      {props.data.name}
    </div>
    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
      <p>{props.data.details}</p>
    </div>
  </div>)
}


export default TaskUI