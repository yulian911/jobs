import React, { useState } from 'react'
import { Toggle, ToggleItem } from '@tremor/react'
import { employmentTypesData, jobRequirements, postedDate } from '../../utils'
import { CheckIcon } from '@heroicons/react/24/outline'

const Modal = React.forwardRef((props, ref) => {
  const { setIsOpened, setEmploymentTypes, setDatePosted, setRemote, setExperience } = props

  const [valueOne, setValueOne] = useState(1)
  const [valueTwo, setValueTwo] = useState(1)
  const [valueThree, setValueThree] = useState(1)
  const [valueFour, setValueFour] = useState(1)
  const preventAutoClose = e => e.stopPropagation()
  return (
    <dialog ref={ref} onCancel={() => setIsOpened(false)} onClick={() => setIsOpened(false)}>
      <div onClick={preventAutoClose} className="flex flex-col">
        <div className="lg:hidden">
          <h3 className="text-teal-500 font-bold text-center">Employment Types</h3>
          <Toggle className="flex flex-wrap" value={valueOne} onValueChange={setValueOne}>
            {employmentTypesData.map((el, i) => (
              <ToggleItem
                key={i}
                value={i + 1}
                text={el}
                icon={CheckIcon}
                onClick={() => setEmploymentTypes(el)}
              />
            ))}
          </Toggle>
        </div>

        <h3 className="text-teal-500 font-bold text-center">Posted</h3>
        <Toggle className="flex flex-wrap" value={valueTwo} onValueChange={setValueTwo}>
          {postedDate.map((el, i) => (
            <ToggleItem
              key={i}
              value={i + 1}
              text={el}
              icon={CheckIcon}
              onClick={() => setDatePosted(el)}
            />
          ))}
        </Toggle>
        <h3 className="text-teal-500 font-bold text-center">Experience</h3>
        <Toggle className="flex flex-wrap" value={valueThree} onValueChange={setValueThree}>
          {jobRequirements.map((el, i) => (
            <ToggleItem
              key={i}
              value={i + 1}
              text={el.text}
              icon={CheckIcon}
              onClick={() => setExperience(el.name)}
            />
          ))}
        </Toggle>
        <h3 className="text-teal-500 font-bold text-center">Remote</h3>
        <Toggle className="flex justify-center" value={valueFour} onValueChange={setValueFour}>
          <ToggleItem value={1} text="false" icon={CheckIcon} onClick={() => setRemote(false)} />
          <ToggleItem value={2} text="true" icon={CheckIcon} onClick={() => setRemote(true)} />
        </Toggle>
        {/* <button onClick={() => setIsOpened(false)}>Close Modal</button> */}
      </div>
    </dialog>
  )
})

export default Modal
