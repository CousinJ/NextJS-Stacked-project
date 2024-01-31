"use client"
import { exploreSearchFunction } from '../actions'
import React,{useState, useEffect, MouseEvent} from 'react'


function ExploreJoin() {



//useState vars
const [searchQuery, setSearchQuery] = useState('')
const [searchResults, setSearchResults] = useState()
const [userOrProject, setUserOrProject] = useState('users')
const [buttonStyle, setButtonStyle] = useState({
  users: 'primary',
  projects: 'neutral'
})


//you can put this type in here to be more precise (I cant find the type)
const handleSelectClick = (e: any) => {
  const button = e.target.name
  if(userOrProject == button){
    
  }
  else {
    if(button == 'users') {
      setButtonStyle({
        users: 'primary',
        projects: 'neutral'
      })
      setUserOrProject('users')
    }
    if(button == 'projects'){
      setButtonStyle({
        users: 'neutral',
        projects: 'primary'
      })
      setUserOrProject('projects')
    }
  }
  
  }

//you can put this type in here to be more precise (I cant find the type)
const handleQueryChange = (e: any) => {
  setSearchQuery(e.target.value)
} 

const  handleSearchSubmit = async () => {
console.log(searchQuery)

  //get do the search and await the results
 const results = await exploreSearchFunction(searchQuery)
console.log(results)
 //setsearch results


}


    return(
    
    <div className='flex flex-col items-center w-full '>
         <div className="join m-4">
         <button onClick={handleSelectClick}name="users" className={`btn btn-${buttonStyle.users}`}>Users</button>
         <button onClick={handleSelectClick} name="projects" className={`btn btn-${buttonStyle.projects}`}>Projects</button>
   
    
  </div>
  <form className='flex items-center justify-center w-full '>
  <input  onChange={handleQueryChange} value={searchQuery}  type="text" placeholder="type here" className="input input-bordered w-1/2 " />
  <button onClick={handleSearchSubmit} type="submit" className='btn btn-primary'>search</button>
  </form>
  
  
  
  
    </div>
    
   )
    }

export default ExploreJoin