import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios"
import { DOMAIN } from '../config/constants';
import { useNavigate } from "react-router-dom";
import * as ReactIconsBS from "react-icons/bs/index"
import CatList from '../Components/AddProductCatList';
import VarList from '../Components/AddProductVarList';
import UploadBox from '../Components/AddProductUploadBox';

export default function DAAddProduct() {
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [isAvailable, setIsAvailable] = useState(false)
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [catList, setCatList] = useState([])
  const [category, setCategory] = useState('')
  const [variables, setVariables] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [formImages, setFormImages] = useState([])


  const editorRef = useRef(null);
  const navigate = useNavigate()

  console.log(variables)
  useEffect(() => {
  const getCats = async () => {
    try {
      const res = await axios.get(`${DOMAIN}/category`)
      const clone = res.data.map(cat => {
        return {...cat, isSelected: false}
      })
      setCatList(clone)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
    }
    getCats()
    
  }, [])

  console.log(category)

  const selectCategory = (index) => {
    const clone = [...catList]
    
    clone.forEach(item => {
      return item.isSelected = false
    })
    clone[index].isSelected = true
    setCatList(clone)
    setCategory(clone[index])
    
    const vars = Object.values(clone[index].variables)
    const names = Object.keys(clone[index].variables)
    const newVars = vars.map((item, i) => {
      if(item.type !== "text") 
        return {
          ...item,
          name: names[i],
          options: item.options.map(option => {
            return {name:option, isSelected:false}
          })
        }
      return {
        ...item,
        name: names[i]
      }
    })
    setVariables(newVars)
  }

  const selectVariables = (varIndex, optIndex) => {
    const clone = [...variables]
    const myVar = clone[varIndex]
    const myOpt = clone[varIndex].options[optIndex]

    console.log(myVar.type)

    if (myVar.type === "text") return console.log("hello text")

    if (myVar.type === "multiselect") {
      myOpt.isSelected = !myOpt.isSelected
      return setVariables(clone)
    }
    
    myVar.options.forEach(option => {
      option.isSelected = false
    })
    myOpt.isSelected = true
    setVariables(clone)
  }

  // اخر سر وقتی میخوای کتگوری رو بفرستی ایز سکلتد رو پاک کن

  if (loading) return <h1>Loading...</h1>
  return (
    <div className="sm:mt-9 sm:ml-80 xl:mr-80 m-8 text-gray-700"> 
      <h1 className="text-lg font-semibold mb-4">Add New Product</h1>
      {
        catList.length === 0 ? 
          <div>
          <p className="font-light">You must first add a category to add a product.</p>
          <button
          className="mt-4 text-white bg-gray-900 outline-none hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2"
          onClick={() => navigate("/admin/dashboard/category/create")}
          >
            Add New Category
        </button>
            </div>
          :
      <form>
      <div>
        <input placeholder="Product Title..."
          required
          className="text-gray-600 w-full py-3 pl-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200	rounded-xl outline-none mt-1 lg:mb-4 mb-8"
          value={title}
          onChange={(e) => setTitle(e.target.value.trimStart())}
        />
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
          placeholder:"Product Description...",
          height: 500
         }}
       />
      </div>
      <div className='xl:flex mt-4'>
        <div className='xl:w-[calc(66.7%-1rem)] border-[1px] border-gray-200 rounded-xl xl:mr-[1rem] sm:pb-6 pb-2'>
            <p className="m-4 font-semibold">Product Details:</p>
            <div className='sm:mx-8 mx-4'>
              <div className='flex gap-2 items-center'>
                    <div className='mr-1'>Is Available?</div>
                    <div
                      className={` w-5 h-5 cursor-pointer rounded-md p-[1.5px] 
                      ${isAvailable ? "bg-gray-700" : "bg-white border-2 border-gray-200"}`}
                      onClick={() => setIsAvailable(!isAvailable)}
                    >
                      {isAvailable ? <ReactIconsBS.BsCheck fill='white' size="18px" /> : " "}
                    </div>
              </div>
              <div className="my-4">
              {
                isAvailable ?
                    <div>
                      <div className='flex'>
                        <div className="lg:w-1/3 sm:w-1/2 w-1/3">
                           <input
                            required
                            placeholder="Quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="outline-none text-gray-600 w-full py-3 pl-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200	rounded-xl mt-1"
                            />
                        </div>
                        <div className="lg:w-2/3 sm:w-1/2 w-2/3 ml-2">
                          <input
                            required
                            placeholder="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="text-gray-600 w-full py-3 pl-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded-xl outline-none mt-1"
                          />
                          </div>
                      </div>
                      </div>
                  :
                  ""
                }
              </div>
              <div className='my-6 lg:flex'>
                <div className='lg:w-1/2'>
                      <p className='mr-1 mb-4'>Category:</p>
                      <ul className='overflow-y-auto flex flex-col h-64 border-[1px] border-gray-200 rounded-xl p-4 lg:mr-4'>
                      {
                        catList.map((cat, i) => {
                          return (
                            <CatList
                              i={i}
                              cat={cat}
                              selectCategory={selectCategory}
                              variables={variables}
                            />
                          )
                        })
                        }
                        </ul>
                </div>
                <div className='lg:w-1/2 lg:mt-0 mt-6'>
                  {
                    category ?
                          <div>
                            <p className='mr-1 mb-4'>Variables:</p>
                            <ul
                              className="overflow-y-auto flex flex-col h-64 border-[1px] border-gray-200 rounded-xl p-4 lg:ml-4"
                            >
                              {
                                variables.map((varr, outerIndex) => {
                                  return (
                                    <VarList
                                      varr={varr}
                                      outerIndex={outerIndex}
                                      variables={variables}
                                      selectVariables={selectVariables}
                                    />
                                  )
                                })
                              }
                            </ul>
                            </div>
                      :
                      ""
                  }
                </div>
              </div>
            </div>
        </div>
              <div className='xl:w-1/3 xl:mt-0 mt-6 border-[1px] border-gray-200 rounded-xl p-4'>
                <div className='flex flex-col gap-4'>
                  <p className="font-semibold">Product Gallery:</p>
                  <div
                    className='flex flex-col items-center py-24 cursor-pointer bg-gray-100 hover:bg-gray-200 focus:bg-grat-200 w-full rounded-xl'
                    onClick={() => setShowModal(true)}
                  >
                    <div>
                      <ReactIconsBS.BsPlusSquareDotted />
                    </div>
                  </div>
                </div>
        </div>
      </div>
          </form>
      }
      {
        showModal ?
      <div className="fadeAnimte">
           <UploadBox 
            uploadUrl={`${DOMAIN}/file/upload-reserve`}
            setFormImages={setFormImages}
            showModal={showModal}
           setShowModal={setShowModal}
            />
            </div>
          :
          ""
      }
    </div> 
  )
}