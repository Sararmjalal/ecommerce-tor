import axios from "axios"
import { useState } from "react"
import Cookies from "universal-cookie"
import TypesMenu from "../Components/AddCatTypesMenu"
import { DOMAIN } from "../config/constants"
import * as MdIcons from "react-icons/md"
import * as IOIcons from "react-icons/io5"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import SmallLoading from "../Components/SmallLoading"

import { sleep } from '../lib'

export default function DAAddCategory() {
  const [catName, setCatName] = useState('')
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [vars, setVars] = useState([{
    name: '',
    type: '',
    options: [""],
    errorMessage: ''
  },])
  
  const [showLoading, setShowLoading] = useState(false)

  const addVarRows = () => {
    const clone = [...vars]
    clone.push({
      name: '',
      type: '',
      options: ['']
    })
    setVars(clone)
  }

  const removeVarRows = (outerIndex) => {
    const clone = [...vars]
    clone.splice(outerIndex, 1)
    setVars(clone)
  }

  const addOptRows = (index) => {
    const clone = [...vars]
    clone[index].options.push("")
    setVars(clone)
  }

  const removeOptRows = (outerIndex, innerIndex) => {
    const clone = [...vars]
    clone[outerIndex].options.splice(innerIndex, 1)
    setVars(clone)
  }

  const addTypes = (type, index) => {
    const clone = [...vars]
    clone[index].type = type
    clone[index].errorMessage = ''
    setVars(clone)
  }

  const addCategory = async (e) => {
    e.preventDefault()

    const obj = {}
    const TypeIsValid = vars.every(variable => variable.type)
    const wrongTypes = vars.filter(variable => !variable.type)

    if (!TypeIsValid) return wrongTypes.forEach((wrongType, i, ref) => {
      const clone = [...vars]
      wrongType.errorMessage = "Please select a type!"
      setVars(clone)
      if (i === ref.length - 1) setShowLoading(false)
    })

    vars.forEach(item => {
      return obj[item.name] = item.type === 'text' ? {
          type: item.type
        } :
        {
          type: item.type,
          options: item.options
        }
    })

    try {

      await sleep(1500)

      await axios.post(`${DOMAIN}/category/create`, {
        name: catName,
        variables: obj
      }, {
        headers: {
          a_auth: `at ${cookies.get('at')}`
        }
      });

      toast.success("New category added successfully!")
      navigate('/admin/dashboard/categories')

    } catch (err) {
      console.log(err)
      toast.error("Something went wrong. Please try again.")
      setShowLoading(false)
    }

  }

  
  return (
    <div className="sm:mt-9 sm:ml-80 xl:mr-80 m-8"> 
      <h1 className="text-lg text-gray-700 font-semibold mb-4">Add New Category</h1>
      <form onSubmit={(e) => {
        setShowLoading(true)
        addCategory(e)
      }}>
        <div>
          <label className="ml-1">Name:</label>
          <input
            required
            placeholder="Enter category name"
            className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 lg:mb-4 mb-8"
            value={catName}
            onChange={(e) => setCatName(e.target.value.trimStart())}
          />
          <label className=" ml-1">Variables:</label>
          {
            vars.map((row, outerIndex) => {
              return (
                <div className="lg:flex lg:mt-4 w-full" key={`var${outerIndex}`}>
                    <div
                    className={`mb-5 cursor-pointer mt-9 mr-2 flex hover:text-violet-700 ${vars.length > 1 ? "block" : "hidden"}`}
                    onClick={() => removeVarRows(outerIndex)}
                      >
                      <div className="w-max lg:w-full lg:mr-0 text-2xl mr-1">
                      <MdIcons.MdRemoveCircle
                      />
                      </div>
                      <div className="font-semibold lg:hidden">Remove Variable</div>
                      </div>
                    <div className="lg:w-1/3 md:mr-4" >
                      <label className="ml-1 font-light text-sm">Name:</label>
                          <input
                           required
                            placeholder="Enter variable name"
                            className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
                            onChange={(e) => {
                              const clone = [...vars]
                              clone[outerIndex].name = (e.target.value.trimStart())
                              setVars(clone)
                      }}
                            value={row.name}
                      />
                      </div>
                      <div className="lg:w-1/3 md:mr-4">
                      <TypesMenu
                        addTypes={addTypes}
                      index={outerIndex}
                      errorMessage={row.errorMessage}
                    />
                    <div className="text-red-400 text-sm font-semibold ml-1">{row.errorMessage}</div>
                      </div>
                  <div className="lg:w-1/3">
                    {
                      vars[outerIndex].type === 'text' ?
                        ""
                        :
                        <>
                        <label className="ml-1 font-light text-sm">Options:</label>
                          {
                            row.options.map((optRow, innerIndex) => {
                            return (
                              <>
                                {
                                  vars[outerIndex].type === 'text' ?
                                    <div className="h-16" key={`div${innerIndex}`}> </div>
                                    :
                                    <div className="flex items-end">
                                      <input
                                        required
                                        key={`optInput${innerIndex}`}
                                        placeholder="Enter option name"
                                        className="mr-2 text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
                                        onChange={(e) => {
                                          const clone = [...vars]
                                          clone[outerIndex].options[innerIndex] = (e.target.value.trimStart())
                                          setVars(clone)
                                        }}
                                        value={vars[outerIndex].options[innerIndex]}
                                      />
                                      <div
                                        className={`mb-5 w-max cursor-pointer ${row.options.length > 1 ? "block" : "hidden"}`}
                                        onClick={() => removeOptRows(outerIndex, innerIndex)}
                                      >
                                          <MdIcons.MdRemoveCircle
                                          />
                                          </div>
                                      </div>
                                }
                              </>
                            )
                          })
                          }
                          <div
                            key={`addOpt${outerIndex}`}
                            onClick={() => addOptRows(outerIndex)}
                            className="text-sm cursor-pointer ml-1 text-gray-900 hover:text-violet-700 font-semibold flex"
                          >
                            <div className="w-max flex items-center gap-1">
                              <IOIcons.IoAddCircle
                              />
                              <div>
                              Add More Options
                              </div>
                            </div>
                          </div>
                          </>
                    }
                  </div>  
            </div>
                  )
                })
              }
          <div
            onClick={addVarRows}
            className="flex cursor-pointer ml-1 text-gray-900 hover:text-violet-700 font-semibold w-min"
          >
            
            <div className="w-max flex items-center mt-10 gap-1">
              <div className="text-2xl">
              <IOIcons.IoAddCircle
              />
              </div>
              <div>
              Add Variable
              </div>
            </div>
          </div>
        </div>
        <div className="text-right w-full mt-8">
          {
            showLoading ?
              <SmallLoading
              />
              :
              ""
          }
        <button
          className="text-white bg-gray-900 outline-none hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2"
            type="submit"
          >
            Add Category
        </button>
        </div>
      </form>
    </div>
  )

}