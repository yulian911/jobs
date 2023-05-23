import dayjs from 'dayjs'
import React from 'react'

import relativeTime from 'dayjs/plugin/relativeTime'
import { checkImageURL } from '../../utils'
import './job.scss'
import { useNavigate } from 'react-router-dom'

dayjs.extend(relativeTime)

const JobBoardComponent = ({ job }) => {
  const navigate = useNavigate()
  return (
    <div
      className="job-container cursor-pointer"
      onClick={() => navigate(`/details/${job.job_id}`)}>
      <div className="job-logo">
        <img
          src={
            // job.employer_logo
            checkImageURL(job.employer_logo)
              ? job.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }
          alt={job.id}
        />
      </div>
      <div className="job-contain">
        <h3 className="font-bold text-teal-500 ">
          {job?.employer_name}
          {job?.job_is_remote === true && (
            <span className="bg-teal-500 text-[10px] text-teal-100 m-2 font-bold p-1 rounded-full">
              REMOTE
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{job.job_title}</h2>
        <p className="text-gray-700">
          {dayjs(job.job_posted_at_datetime_utc).fromNow()} · {job.job_employment_type} ·
          {job.job_country}
        </p>
      </div>
      <div className="job-skill">
        {job?.job_required_skills &&
          job?.job_required_skills
            .map((skill, i) => (
              <span
                key={i}
                className="text-[10px] text-teal-500 font-bold m-3 p-2 bg-teal-100 rounded-md ">
                {skill}
              </span>
            ))
            .slice(0, 3)}
      </div>
    </div>
  )
}

export default JobBoardComponent
