
import React from 'react'
import { updateUserData } from '../actions'
import { thisUserData } from '../actions'
import ProfileInput from '../components/ProfileInput'
async function Profile() {
   

const userDb =  await thisUserData()
const userData = userDb.user_data



const propsObject = {
    name: userData?.name ?? '',
    title: userData?.title ?? '',
    description: userData?.description ?? '',
    image: userData?.image ?? '',
}
   
    return(<form action={updateUserData} className='text-m'>
        
       <ProfileInput userData={propsObject}></ProfileInput>
      
    </form>)
}

export default Profile