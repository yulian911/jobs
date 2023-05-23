import { MapPinIcon } from '@heroicons/react/24/outline'

import React from 'react'
import { checkImageURL } from '../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <div className="mt-[16px] mb-[16px] flex flex-col lg:flex-row justify-center items-center gap-3 p-2">
      <div className="w-[80px] h-[80px] border-teal-500 border-[2px] flex justify-center items-center bg-white rounded-[20px]">
        <img
          src={
            checkImageURL(companyLogo)
              ? companyLogo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      <div className="mt-[12px]">
        <h2 className="text-center font-bold">{jobTitle}</h2>
      </div>

      <div className="mt-[12px] flex flex-row justify-center items-center">
        <p className="text-[15px] text-teal-500 font-bold">{companyName} </p>
        <div className="flex justify-center items-center">
          <MapPinIcon className="h-10 w-10 text-teal-500" />
          <span className="font-bold">{location}</span>
        </div>
      </div>
    </div>
  )
}

export default Company
