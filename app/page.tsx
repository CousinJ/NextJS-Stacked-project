import Image from 'next/image'
import LandingPage from './components/LandingPage'
import { auth } from '@clerk/nextjs'
import {redirect} from 'next/navigation'


export default function Home() {
  const {userId} = auth()

  if(userId) {
    redirect('/dashboard')
  }

  return (
    <div>
      <LandingPage />
    </div>
  )
}
