import React, { useState } from 'react'
import { TextInput } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { Toggle, ToggleItem } from '@tremor/react'
import { Button } from '@tremor/react'
import './search.scss'

import { CheckIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline'
import { employmentTypesData } from '../../utils'

const Search = ({
  setIsOpened,
  setEmploymentTypes,
  employmentTypes,
  datePosted,
  remote,
  experience,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const [value, setValue] = useState(1)
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    navigate(`/search`, {
      state: {
        id: searchTerm,
        employmentTypes: employmentTypes,
        remote_jobs_only: remote,
        date_posted: datePosted,
        job_requirements: experience,
      },
    })

    setSearchTerm('')
  }
  return (
    <header className="search-container ">
      {/* <img src={background} alt="img" /> */}
      <Link to={'/'} className="absolute w-[60px] p-2">
        <img src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" />
      </Link>
      <div className="h-[60%] w-full flex justify-center items-end p-2 ">
        <form className="flex bg-[#ebf8ff] p-2 rounded-md gap-3  " onSubmit={handleSubmit}>
          <TextInput
            className=" text-teal-500 bg-transparent outline-none focus:outline-none border-0 "
            icon={MagnifyingGlassIcon}
            required
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button className="bg-teal-500 text-teal-100 p-1 rounded-md">Search</button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <Toggle className=" hidden lg:flex" value={value} onValueChange={setValue}>
          {employmentTypesData.map((el, i) => (
            <ToggleItem
              className=""
              key={i}
              value={i + 1}
              text={el}
              icon={CheckIcon}
              onClick={() => setEmploymentTypes(el)}
            />
          ))}
        </Toggle>
        <Button
          size="xs"
          className="ml-[5px]"
          icon={AdjustmentsVerticalIcon}
          onClick={() => setIsOpened(true)}>
          More Filters
        </Button>
      </div>
    </header>
  )
}

export default Search
