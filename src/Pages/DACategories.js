import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import RemoveModal from "../Components/RemoveModal"
import { DOMAIN } from "../config/constants"

export default function DACategories() {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    axios.get(`${DOMAIN}/category`)
      .then(res => setCategories(res.data))
      .then(() => setLoading(false))
      .catch(err => console.error(err))
  }, [])

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="sm:mt-9 sm:ml-80 sm:mr-10 m-8"> 
    <h1 className="text-lg text-gray-700 font-semibold mb-4">All Categories</h1>
    {
      categories.length === 0 ?
      <p className="font-light">No categories found.</p>
        :
            categories.map(category => {
              return (
                <div className="flex items-center bg-gray-100 py-6 my-2 px-4 rounded-xl border-[1px] border-gray-200 ">
                  <div className="w-[65%]">
                      <p className="font-light hover:text-violet-700 w-max">
                       <Link to={`/admin/dashboard/category/edit/${category._id}`}>
                        {category.name}
                        </Link>
                      </p>
                    </div>
                  <div className="font-light text-sm text-right w-[35%]">
                     <Link to={`/admin/dashboard/category/edit/${category._id}`}>
                      <button className="mr-1 hover:text-violet-700">Edit</button>
                      </Link>
                    <span>|</span>
                    <button className="ml-1 hover:text-violet-700"
                    onClick={() => setShowModal(true)}
                    >
                    Remove</button>
                    </div>
                </div>
              )
            })
      }
      {
        showModal ?
          <RemoveModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
          :
          ""
      }
</div>
  )
}