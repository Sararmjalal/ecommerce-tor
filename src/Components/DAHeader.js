import { Link } from "react-router-dom"
import { current_admin } from "../Global State/Slice"
import { useSelector } from "react-redux"
import Confirm from "./Confirm"
import { useState } from "react"

export default function DAHeader() {
  const thisAdmin = useSelector(current_admin)
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {
        showModal ?
        <Confirm
        showModal={showModal}
        setShowModal={setShowModal}
        />
        :
        ""
      }
      <div className="w-full h-8 bg-gray-800 flex px-4 text-gray-100 pt-1.5 text-sm">
          <Link to="/admin/dashboard">
            <div className="w-[calc(100vw-9.5rem)]">
                  Hello <span className="font-semibold text-white">{thisAdmin.name}</span>
            </div>
          </Link>
          <Link to="/">
            <div className="w-18 mr-3 text-gray-300 hover:text-white">View Site</div>
          </Link>     
            <div
                className="w-11 text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setShowModal(true)}
            >
              Logout
            </div>
        </div>
      </div>
  )
}