import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { JobBoardComponent } from '../components'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Spinner from '../components/Spinner/Spiner'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchLoader, setSearchLoader] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [page, setPage] = useState(1)
  const { state } = useLocation()
  const { id, employmentTypes, remote_jobs_only, date_posted, job_requirements } = state

  // remote_jobs_only: remote,
  // date_posted: datePosted,
  // job_requirements: experience,
  // const { state } = useParams()
  const handleSearch = async () => {
    setSearchLoader(true)
    setSearchResult([])

    try {
      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: id,
          remote_jobs_only: remote_jobs_only,
          date_posted: date_posted,
          job_requirements: job_requirements,
          employment_types: employmentTypes,
          page: page.toString(),
        },
      }

      const response = await axios.request(options)
      setSearchResult(response.data.data)
    } catch (error) {
      setSearchError(error)
      console.log(error)
    } finally {
      setSearchLoader(false)
    }
  }
  console.log(id, employmentTypes)

  useEffect(() => {
    handleSearch()
  }, [id, employmentTypes])

  // onPress={() => handlePagination('left')}

  const handlePagination = direction => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1)
      handleSearch()
    } else if (direction === 'right') {
      setPage(page + 1)
      handleSearch()
    }
  }

  return (
    <div>
      {searchLoader ? (
        <Spinner />
      ) : searchError ? (
        <p>Coś poszło nie tak...</p>
      ) : (
        <div className="flex flex-col items-center ">
          {searchResult.length > 0 ? (
            searchResult.map(job => <JobBoardComponent key={job.job_id} job={job} />)
          ) : (
            <p className="text-teal-500 font-bold">Searching data no exist. Change params!</p>
          )}
        </div>
      )}
      {searchResult.length > 0 ? (
        <div className="flex justify-center items-center gap-2 mb-2">
          <div
            className="w-[30px] h-[30px] shadow-sm bg-white hover:border-[2px] hover:border-teal-500 cursor-pointer"
            onClick={() => handlePagination('left')}>
            <ChevronLeftIcon />
          </div>
          <div className="w-[30px] h-[30px] shadow-sm bg-white flex justify-center items-center">
            {page}
          </div>
          <div
            className="w-[30px] h-[30px] shadow-sm bg-white hover:border-[2px] hover:border-teal-500 cursor-pointer"
            onClick={() => handlePagination('right')}>
            <ChevronRightIcon />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SearchPage
