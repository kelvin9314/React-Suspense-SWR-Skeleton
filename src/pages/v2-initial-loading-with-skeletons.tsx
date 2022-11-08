
import React, { Suspense } from 'react'

import ProfileData from '../components/profile-data'
import SkeletonLoading from '../components/skeleton-loading'

const V2 = () => { 
  
  return (
    <div className="App">
      <h1>Profile - v2-initial-loading-with-skeletons</h1>
      <Suspense fallback={<SkeletonLoading />}>
        <ProfileData />
      </Suspense>
    </div>
  )
}

export default V2