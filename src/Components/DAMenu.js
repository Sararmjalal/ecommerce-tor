import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Confirm from "./Confirm"

export default function DAMenu() {
  const [showModal, setShowModal] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showAddPro, setShowAddPro] = useState(false)
  const [showAddCat, setShowAddCat] = useState(false)

  return (
    <div className="h-max m-6 sm:absolute sm:mt-0 sm:top-[calc(5rem-10px)] sm:left-5 sm:w-64 rounded-xl shadow-md	shadow-gray-700/10 overflow-hidden">
      <div className="flex w-full bg-gray-800 text-white">
        <div className="w-[calc(75%-10px)]">
          <Link to="/admin/dashboard/">
            <p
              className="text-white p-4 font-light"
              onClick={() => {
                setShowAddPro(false)
                setShowAddCat(false)
                setMobileMenu(false)
              }}
            >Dashboard</p>
          </Link>
        </div>
        <div className="w-1/4 text-right">
          <button onClick={() => setMobileMenu(!mobileMenu)}
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:bg-gray-900 hover:bg-gray-900 mt-2"
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
            onClick={() => {
              setShowAddPro(!showAddPro)
              setShowAddCat(false)
            }}
            >
              Products
            </li>
          </NavLink>
          {
            showAddPro ?
            <ul className="bg-gray-800 ">
              <NavLink to="/admin/dashboard/products" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
                <li
                  className="text-sm px-6 py-3"
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Products</li>
              </NavLink>
              <NavLink to="/admin/dashboard/product/create" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
                <li
                  className="text-sm px-6 py-3 text-[#afafaf]"
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Add Product</li>
               </NavLink> 
            </ul>
            :
            ""
          }
          <NavLink to="/admin/dashboard/categories" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
            <li
            className="p-4 font-light hover:text-white hover:bg-gray-800"
            onClick={() => {
              setShowAddCat(!showAddCat)
              setShowAddPro(false)
            }}>
            Categories
          </li>
          </NavLink>
          {
            showAddCat ?
            <ul className="bg-gray-800">
              <NavLink to="/admin/dashboard/categories" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
                <li
                  className="text-sm px-6 py-3"
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Categories</li>
              </NavLink>
              <NavLink to="/admin/dashboard/category/create" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
                <li
                  className="text-sm px-6 py-3 text-[#afafaf]"
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Add Category</li>
               </NavLink> 
            </ul>
            :
            ""
          }
          <NavLink to="/admin/dashboard/users" style={({ isActive }) => isActive ? { color: "white", background:"red" } : { color: "#afafaf" }}>
            <li
            className="p-4 font-light hover:text-white hover:bg-gray-800"
            onClick={() => {
              setShowAddPro(false)
              setShowAddCat(false)
              setMobileMenu(false)
            }}>
            Users
          </li>
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