import axios from "axios"
import { useEffect, useState } from "react"
import { DOMAIN } from "../config/constants"

export default function DACategories() {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)

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
        ""
    }
</div>
  )
}