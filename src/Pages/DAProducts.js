import { useEffect, useState } from "react"
import { DOMAIN } from "../config/constants"
import axios from "axios"

export default function DAProducts() {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${DOMAIN}/product`)
      .then(res => setProducts(res.data))
      .then(() => setLoading(false))
    .catch(err => console.error(err))
  }, [])

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="sm:mt-9 sm:ml-80 sm:mr-10 m-8"> 
    <h1 className="text-lg text-gray-700 font-semibold mb-4">All Products</h1>
    {
      products.length === 0 ?
      <p className="font-light">No products found.</p>
        :
        ""
    }
</div>
  )
}