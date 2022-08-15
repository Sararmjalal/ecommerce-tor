import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Confirm from "./Confirm"

export default function DAMenu() {
  const [showModal, setShowModal] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showAddPro, setShowAddPro] = useState(false)
  const [showAddCat, setShowAddCat] = useState(false)

  return (
    <div className="h-max m-6 sm:absolute sm:mt-0 sm:top-24 sm:left-8 sm:w-64 rounded-xl shadow-md	shadow-gray-700/10 overflow-hidden">
      <div className="flex w-full bg-gray-800 text-white">
        <div className="w-[calc(75%-10px)]">
          <Link to="/admin/dashboard/">
            <p className="text-white p-4 font-light">Dashboard</p>
          </Link>
        </div>
        <div className="w-1/4 text-right">
          <button onClick={() => setMobileMenu(!mobileMenu)}
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:bg-gray-900 hover:bg-gray-900 mt-2"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          >
            <svg className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </div>
      
        <ul className={`${mobileMenu ? "block" : "sm:block hidden"} flex flex-col bg-gray-700`}>
          <NavLink to="/admin/dashboard/products" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
            <li
            className="p-4 font-light hover:text-white hover:bg-gray-800"
            onClick={() => setShowAddPro(!showAddPro)}
            >
              Products
            </li>
          </NavLink>
          {
            showAddPro ?
            <ul>
              <NavLink to="/admin/dashboard/products" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
                <li className="text-sm px-6 py-3 bg-gray-800">Products</li>
              </NavLink>
              <li className="text-sm px-6 py-3 text-[#afafaf] bg-gray-800">Add Product</li>
            </ul>
            :
            ""
          }
          <NavLink to="/admin/dashboard/categories" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
            <li
            className="p-4 font-light hover:text-white hover:bg-gray-800"
            onClick={() => setMobileMenu(false)}
            >Categories</li>
          </NavLink>
          <NavLink to="/admin/dashboard/users" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
            <li
            className="p-4 font-light hover:text-white hover:bg-gray-800"
            onClick={() => setMobileMenu(false)}
            >Users</li>
          </NavLink>
          <li
            className="pl-4 pr-4 pt-4 pb-6 font-light hover:text-white cursor-pointer text-[#afafaf] hover:bg-gray-800"
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