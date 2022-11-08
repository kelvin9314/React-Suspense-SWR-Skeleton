
import React, { Suspense } from 'react'

import FallbackInitial from '../components/profile-data/fallback-initial'
import SkeletonLoading from '../components/skeleton-loading'

const V4 = () => { 
  
  return (
    <div className="App">
      <h1>Profile - v4-initial-fallback</h1>
      <Suspense fallback={<SkeletonLoading />}>
        <FallbackInitial />
      </Suspense>
    </div>
  )
}

export default V4