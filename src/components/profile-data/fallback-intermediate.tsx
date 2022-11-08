import React from 'react'
import useSWR from 'swr'
// import { Link } from 'react-router-dom'

import './index.css'
import { API_ROUTE, PROFILE_URL } from '../../constant'

import SpinnerLoader from '../skeleton-loading'

const FallbackIntermediate = () => {
  const { data, isValidating, mutate } = useSWR(API_ROUTE)


  return (
    <div className="ProfileData">
      <a href={PROFILE_URL} target="_github_profile" >
        <img
          alt={data?.name}
          src={data?.avatar_url}
          style={{ height: 260, width: 260 }}
        />
      </a>
      <h2>
        {data?.name}
        <br />
        <a href={PROFILE_URL} target="_github_profile" >
          <small>{data?.login}</small>
        </a>
      </h2>
      <p>{data?.bio}</p>

      {isValidating && (
        <div className="spinner">
          <SpinnerLoader />
        </div>
      )}

      <button onClick={() => mutate()} disabled={isValidating}>
        refetch data 
      </button>
    </div>
  )
}

export default FallbackIntermediate 