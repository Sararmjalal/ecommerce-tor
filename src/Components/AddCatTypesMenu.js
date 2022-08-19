import { useState } from "react"

export default function TypesMenu(props) {
  const [showTypesMenu, setShowTypesMenu] = useState(false)
  const [type, setType] = useState('Click')

  return (
    <>
      <label className="ml-1 font-light text-sm">Type:</label>
      <h1
        className={`${props.errorMessage ? "border-2 border-red-400" : ""} ${type === 'Click' ? "text-gray-400" : "text-gray-600"} w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-2 text-sm cursor-pointer`}
        
        onClick={() => setShowTypesMenu(!showTypesMenu)}>{type}</h1>
                  {
                    showTypesMenu ?
                    <ul className="w-full bg-gray-100 overflow-hidden rounded-xl">
                        <li
                          className="w-full py-4 pl-2  text-gray-600 outline-none text-sm cursor-pointer hover:bg-gray-700 hover:text-white"
                          onClick={() => {
                          setType('Text')
                          setShowTypesMenu(false)
                          props.addTypes('text', props.index)
                        }}>Text</li>
                        <li 
                          className="w-full py-4  pl-2  text-gray-600 outline-none text-sm cursor-pointer hover:bg-gray-700 hover:text-white"
                          onClick={() => {
                          setType('Select')
                          setShowTypesMenu(false)
                          props.addTypes('select', props.index)
                        }}>Select</li>
                        <li 
                          className="w-full pt-4 pb-5 pl-2  text-gray-600 outline-none text-sm cursor-pointer hover:bg-gray-700 hover:text-white"
                          onClick={() => {
                          setType('Multi Select')
                          setShowTypesMenu(false)
                          props.addTypes('multiselect', props.index)
                        }}>Multi Select</li>
                    </ul>
                      :
                      ""
                  }
      
    </>
  )
}