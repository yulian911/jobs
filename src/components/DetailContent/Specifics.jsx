import React from 'react'

const Specifics = ({ points, title }) => {
  return (
    <div className="flex flex-col justify-center items-center m-3 ">
      <h2 className="font-bold">{title}</h2>
      <div className="flex flex-col justify-center ">
        {points.map((el, i) => (
          <div key={el + i} className="flex flex-row justify-start items-center">
            <div className="w-[6px] h-[6px] rounded-[50%] bg-gray-600 " />
            <p className="text-[14px] ml-[10px] text-black">{el}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Specifics
