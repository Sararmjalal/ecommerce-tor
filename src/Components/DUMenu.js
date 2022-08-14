import Avatar from "../Uploads/Avatar.jpg"
import { current_user } from "../Global State/Slice"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import Confirm from "./Confirm"

export default function DUMenu() {
  const thisUser = useSelector(current_user)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className=" h-max absolute top-24 left-8 w-64 rounded-xl shadow-md	shadow-gray-700/10 overflow-hidden">
      <Link to="/user/dashboard/">
      <div className="flex bg-gray-100 w-full">
        <div className="w-1/4 p-3">
          <img src={Avatar} className="rounded-full aspect-square object-cover"></img>
        </div>
        <div className="w-3/4">
          <p className=" text-black text-sm font-light pt-6">{thisUser.name}</p>
        </div>
      </div>
      </Link>
        <ul className="flex flex-col">
          <NavLink to="/user/dashboard/orders" style={({ isActive }) => isActive ? { color: "#6d28d9", fontWeight:"700" } : { color: "#545454" }}>
            <li className="p-4 font-light hover:text-violet-700">Orders</li>
          </NavLink>
          <NavLink to="/user/dashboard/addresses" style={({ isActive }) => isActive ? { color: "#6d28d9" } : { color: "#545454" }}>
            <li className="p-4 font-light hover:text-violet-700">Addresses</li>
          </NavLink>
          <NavLink to="/user/dashboard/profile/edit" style={({ isActive }) => isActive ? { color: "#6d28d9" } : { color: "#545454" }}>
            <li className="pl-4 pr-4 pt-4 pb-6 font-light hover:text-violet-700">Edit Profile</li>
          </NavLink>
          <li
            className="pl-4 pr-4 pt-4 pb-6 font-light hover:text-violet-700 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Logout
          </li>
        </ul>
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