import React from 'react'
import useSWR from 'swr'
// import { Link } from 'react-router-dom'

import './index.css'
import { API_ROUTE, PROFILE_URL } from '../../constant'

import SpinnerLoader from '../spinner-loader'
import AlertIcon from '../alert-icon'

const FallbackInitial = () => {
  const { data, error, isValidating, mutate } = useSWR(API_ROUTE + '123123')

  React.useEffect(() => {
    console.log(data)
  }, [data ])

  React.useEffect(() => {
    console.log(error)
  }, [error ])


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

      {error && (
        <div className="spinner">
          <AlertIcon />
        </div>
      )}

      <button onClick={() => mutate()} disabled={isValidating}>
        refetch data 
      </button>
    </div>
  )
}

export default FallbackInitial 