import React, { Suspense } from 'react'
import ProfileData from '../profile-data'
// import { SkeletonLoading } from './SkeletonLoading'
// import { ErrorBoundary } from './ErrorBoundary'

const ProfileContainer = () => (
  <Suspense fallback="loading...">
    <ProfileData />
  </Suspense>
)

export default ProfileContainer