import axios from "axios"
import { useEffect, useState } from "react"
import { DOMAIN } from "../config/constants"
import Cookies from "universal-cookie"

export default function DUOrders() {
  const cookies = new Cookies()
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    axios.get(`${DOMAIN}/order/my-orders`, {
      headers: {
        auth: `ut ${cookies.get('ut')}`
      }
    })
      .then(res => setOrders(res.data))
      .then(() => setLoading(false))
      .catch(err => console.log(err))
  }, [])

  console.log(orders)

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="mt-9 ml-80 mr-10">  
      <h1 className="text-lg text-gray-700 font-semibold mb-4">Orders</h1>
      {
        orders.length === 0 ?
        <p className="font-light">You have no orders yet.</p>
          :
          ""
      }
  </div>
  )
}