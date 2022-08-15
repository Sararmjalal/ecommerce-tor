import Avatar from "../Uploads/Avatar.jpg"
import { current_user } from "../Global State/Slice"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import Confirm from "./Confirm"

export default function DUMenu() {
  const thisUser = useSelector(current_user)
  const [showModal, setShowModal] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="h-max m-6 sm:absolute sm:mt-0 sm:top-24 sm:left-8 sm:w-64 rounded-xl shadow-md	shadow-gray-700/10 overflow-hidden">
      <div className="flex bg-gray-100 w-full">
      <Link to="/user/dashboard/">
        <div className="w-16 sm:w-1/4 p-3">
          <img src={Avatar} className="rounded-full aspect-square object-cover"></img>
        </div>
      </Link>
        <div className="sm:w-1/2 w-[52%]">
          <p className=" text-black text-sm font-light pt-6">{thisUser.name}</p>
        </div>
        <div className="w-1/4 text-right">
          <button onClick={() => setMobileMenu(!mobileMenu)}
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mt-3"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      
        <ul className={`${mobileMenu ? "block" : "sm:block hidden"} flex flex-col`}>
          <NavLink to="/user/dashboard/orders" style={({ isActive }) => isActive ? { color: "#6d28d9", fontWeight:"700" } : { color: "#545454" }}>
            <li
            className="p-4 font-light hover:text-violet-700"
            onClick={() => setMobileMenu(false)}
            >Orders</li>
          </NavLink>
          <NavLink to="/user/dashboard/addresses" style={({ isActive }) => isActive ? { color: "#6d28d9" } : { color: "#545454" }}>
            <li
            className="p-4 font-light hover:text-violet-700"
            onClick={() => setMobileMenu(false)}
            >Addresses</li>
          </NavLink>
          <NavLink to="/user/dashboard/profile/edit" style={({ isActive }) => isActive ? { color: "#6d28d9" } : { color: "#545454" }}>
            <li
            className="pl-4 pr-4 pt-4 pb-6 font-light hover:text-violet-700"
            onClick={() => setMobileMenu(false)}
            >Edit Profile</li>
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