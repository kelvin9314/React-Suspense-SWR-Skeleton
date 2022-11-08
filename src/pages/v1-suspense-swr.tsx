
import React, { Suspense } from 'react'
import ProfileData from '../components/profile-data'


const V1Suspense = () => { 
  
  return (
    <div className="App">
      <h1>Profile - v1-suspense-swr</h1>
      <Suspense fallback="loading...">
        <ProfileData />
      </Suspense>
    </div>
  )
}

export default V1Suspense