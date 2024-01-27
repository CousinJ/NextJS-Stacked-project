"use client"
import React from 'react'
import ProjectForm from './ProjectForm'
import { useState, useEffect } from 'react'

function NewProjectComp() {
//close out of modal on refresh

const [modal, setModal] = useState(false)
useEffect(() => {setModal(false)}, [])

const handleClick = () => {setModal(true)}

    return(
    <div>
        <button onClick={handleClick} className="btn btn-primary">Create New</button>
        
       {/* Blurred overlay */}
       {modal && (
        <div className="fixed inset-0 z-10 bg-black opacity-50 backdrop-filter backdrop-blur-sm" />
      )}

      {/* ProjectForm */}
      {modal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <ProjectForm setModalBool={setModal} modalBool={modal} />
        </div>
      )}

    </div>
    )
}

export default NewProjectComp