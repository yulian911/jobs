import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import { Toggle, ToggleItem } from '@tremor/react'

import { AcademicCapIcon, BookmarkIcon, UserIcon } from '@heroicons/react/24/outline'

import Spinner from '../components/Spinner/Spiner'
import { About, Company, Specifics } from '../components'

const DetailsPage = () => {
  const { id } = useParams()
  const [view, setView] = useState('qualifications')
  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: id,
  })

  const Views = useMemo(() => {
    switch (view) {
      case 'qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
          />
        )
      case 'about':
        return <About info={data[0]?.job_description ?? 'No data provided'} />
      case 'responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        )
      default:
        return ''
    }
  }, [view])

  console.log(data)

  return (
    <div className="flex justify-center  ">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Something went wrong...</p>
      ) : (
        <div className="max-w-[1280px] flex flex-col justify-between  m-4 shadow-lg bg-white md:h-[calc(100vh-250px)]">
          <div>
            <Company
              companyLogo={data[0]?.employer_logo}
              jobTitle={data[0]?.job_title}
              companyName={data[0]?.employer_name}
              location={data[0]?.job_country}
            />
            <div className="flex justify-center ">
              <Toggle
                className="flex-col sm:flex-row"
                defaultValue={view}
                onValueChange={value => setView(value)}>
                <ToggleItem
                  value="qualifications"
                  text="Qualifications"
                  icon={AcademicCapIcon}
                  onClick={() => setView('qualifications')}
                />
                <ToggleItem
                  value="about"
                  text="About"
                  icon={UserIcon}
                  onClick={() => setView('about')}
                />
                <ToggleItem
                  value="responsibilities"
                  text="Responsibilities"
                  icon={BookmarkIcon}
                  onClick={() => setView('responsibilities')}
                />
              </Toggle>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">{Views}</div>
            </div>
          </div>

          <div className="flex  justify-center items-center mb-5">
            <Link
              to={data[0]?.job_apply_link}
              target="_blank"
              className="bg-teal-100 hover:bg-teal-200 w-[100px] h-[50px] rounded-lg shadow-lg flex justify-center items-center text-teal-500 font-bold">
              Aplly
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsPage
