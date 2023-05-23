import React, { useState } from 'react'
import { JobBoardComponent, NearbyJobCard, Slider, Spinner } from '../components'

import useFetch from '../hook/useFetch'

const Home = () => {
  const [query, setQuery] = useState('React')

  const { data, isLoading, error, refetch } = useFetch('search', {
    query: query,
    num_pages: '1',
    // remote_jobs_only: true,
    // employment_types: employmentTypes,
  })

  return (
    <div className="App  ">
      <div className=" m-10">
        <Slider className="slick-hero" autoplay={true} slidesToShow={5} slidesToScroll={1}>
          {data?.map(job => (
            <NearbyJobCard key={job.job_id} job={job} />
          ))}
        </Slider>
      </div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Something went wrong...</p>
      ) : (
        <div className="flex flex-col items-center">
          {data?.map(job => (
            <JobBoardComponent key={job.job_id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
