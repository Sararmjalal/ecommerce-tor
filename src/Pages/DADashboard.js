import { useState } from "react"
import { useSelector } from "react-redux"
import { current_admin } from "../Global State/Slice"
import Confirm from "../Components/Confirm"

export default function DADashboard() {
  const thisAdmin = useSelector(current_admin)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="sm:mt-9 sm:ml-80 sm:mr-10 m-8">
    <h1 className="text-lg text-gray-700 font-semibold mb-4">Dashboard</h1>
    <p className="font-light">Welcome {thisAdmin.name}! This is your dashboard. You can access products, categories and users in here. </p>
    <p className="text-sm mt-2 font-light">
      (not {thisAdmin.name}? 
      <span
        className="font-normal hover:text-violet-700 cursor-pointer"
        onClick={() => setShowModal(true)}
      > logout</span>
      )</p>
    {
      showModal ?
        <Confirm
          showModal={showModal}
          setShowModal={setShowModal}
        />
        :
        ""
    }
  </div>
  )
}