import { current_user } from "../Global State/Slice"
import { useSelector } from "react-redux"
import Confirm from "../Components/Confirm"
import { useState } from "react"

export default function DUDashboard() {
  const thisUser = useSelector(current_user)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="sm:mt-9 sm:ml-80 sm:mr-10 m-8">
      <h1 className="text-lg text-gray-700 font-semibold mb-4">Dashboard</h1>
      <p className="font-light">Welcome {thisUser.name}! This is your dashboard. You can access your orders, add your addresses and edit your profile in here. </p>
      <p className="text-sm mt-2 font-light">
        (not {thisUser.name}? 
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