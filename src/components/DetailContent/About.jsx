import React from 'react'

const About = ({ info }) => {
  return (
    <div className="m-3 p-2">
      <h2 className="font-bold text-center">About the job</h2>
      <div>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default About
