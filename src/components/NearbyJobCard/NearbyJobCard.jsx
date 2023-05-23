import React from 'react'
import { checkImageURL } from '../../utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link, useNavigate } from 'react-router-dom'
dayjs.extend(relativeTime)

const NearbyJobCard = ({ job }) => {
  const navigate = useNavigate()
  return (
    <div
      className="m-2 mt-5  rounded-md h-[200px]  bg-white shadow-lg cursor-pointer "
      onClick={() => navigate(`/details/${job.job_id}`)}>
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" overflow-hidden  w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]  rounded-[50%] flex border-[2px] bg-white border-blue-100 ">
          <img
            className="w-full object-contain"
            src={
              checkImageURL(job.employer_logo)
                ? job.employer_logo
                : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
            }
            alt=""
          />
        </div>
        <h2 className="text-[13px] text-center font-bold text-teal-500">{job?.employer_name}</h2>
      </div>

      <div className="flex flex-col pt-2">
        <h3 className="text-[12px] text-center font-bold text-black">{job?.job_title}</h3>
        <p className="text-gray-700 text-[8px] md:text-[9px] lg:text-[11px] xl:text-[13px] text-center">
          {dayjs(job.job_posted_at_datetime_utc).fromNow()} · {job.job_employment_type} ·
          {job.job_country}
        </p>
      </div>
    </div>
  )
}

export default NearbyJobCard
// checkImageURL(job.employer_logo)
//               ? job.employer_logo
//               : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
