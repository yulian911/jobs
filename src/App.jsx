import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import SearchPage from './pages/SearchPage'
import { Modal, Search } from './components'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [employmentTypes, setEmploymentTypes] = useState('FULLTIME')
  const [datePosted, setDatePosted] = useState('all')
  const [remote, setRemote] = useState(false)
  const [experience, setExperience] = useState('no_experience')
  const ref = useRef(null)

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal()
      document.body.classList.add('modal-open') // prevent bg scroll
    } else {
      ref.current?.close()
      document.body.classList.remove('modal-open')
    }
  }, [isOpened])

  return (
    <div>
      <Search
        setIsOpened={setIsOpened}
        setEmploymentTypes={setEmploymentTypes}
        employmentTypes={employmentTypes}
        datePosted={datePosted}
        remote={remote}
        experience={experience}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>

      <Modal
        setIsOpened={setIsOpened}
        ref={ref}
        setEmploymentTypes={setEmploymentTypes}
        setDatePosted={setDatePosted}
        setRemote={setRemote}
        setExperience={setExperience}
      />
    </div>
  )
}

export default App
