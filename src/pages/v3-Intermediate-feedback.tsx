
import React, { Suspense } from 'react'

import FallbackIntermediate from '../components/profile-data/fallback-intermediate'
import SkeletonLoading from '../components/skeleton-loading'

const V3 = () => { 
  
  return (
    <div className="App">
      <h1>Profile - v3 Intermediate feedback</h1>
      <Suspense fallback={<SkeletonLoading />}>
        <FallbackIntermediate />
      </Suspense>
    </div>
  )
}

export default V3