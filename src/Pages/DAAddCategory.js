import { useState } from "react"
import OptionRows from "../Components/AddCatOptionsRows"

export default function DAAddCategory() {
  const [catName, setCatName] = useState('')
  const [varRows, setVarRows] = useState([1])
  const [optRows, setOptRows] = useState([[1]])
  const [vars, setVars] = useState([[]])

  const addVarRows = () => {
    const clone = [...varRows]
    const clone2 = [...vars]
    const clone3 = [...optRows]
    clone.push(varRows.length + 1)
    clone2.push([])
    clone3.push([1])
    setVarRows(clone)
    setVars(clone2)
    setOptRows(clone3)
  }

  const addOptRows = (number) => {
    const clone = [...optRows]
    const thisRow = clone[number]
    thisRow.push(thisRow.length + 1)
    setOptRows(clone)
  }

  return (
    <div className="sm:mt-9 sm:ml-80 lg:mr-80 m-8"> 
      <h1 className="text-lg text-gray-700 font-semibold mb-4">Add new category</h1>
        <div>
        <label className="ml-1">Name:</label>
              <input
                placeholder="Enter category name"
                className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
        />
        <label className=" ml-1">Variables:</label>
        {
          varRows.map((varRow, varIndex) => {
            return (
              <div className="flex mt-4 w-full" key={`var${varIndex}`}>
                  <div className="md:w-1/3 md:mr-4" >
                    <label className="ml-1 font-light text-sm">Name:</label>
                        <input
                          placeholder="Enter variable name"
                          className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
                          onChange={(e) => {
                            const clone = [...vars]
                            clone[varIndex].push(e.target.value)
                            setVars(clone)
                            console.log(vars)
                          }}
                    />
                    </div>
                    <div className="md:w-1/3 md:mr-4">
                    <label className="ml-1 font-light text-sm">Type:</label>
                        <input
                          placeholder="Enter variable name"
                          className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
                    />
                    </div>
                    <div className="md:w-1/3 md:mr-4">
                    <label className="ml-1 font-light text-sm">Options:</label>
                       {
                          optRows[varIndex].map((optRow, optIndex) => {
                            return (
                              <input
                              key={optIndex}
                              placeholder="Enter option name"
                              className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
                            />
                            )
                          })
                  }
                  <p
                    onClick={() => addOptRows(varIndex)}
                    className="text-sm cursor-pointer ml-1 text-gray-900 hover:text-violet-700 font-semibold"
                  >
                  Add More Options</p>
                </div>  
          </div>
                )
              })
            }
        <p
          onClick={addVarRows}
          className="cursor-pointer ml-1 text-gray-900 hover:text-violet-700 font-semibold"
        >
        Add More Variables</p>
        </div>
    </div>
  )
}