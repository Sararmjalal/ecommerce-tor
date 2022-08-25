import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Confirm from "./Confirm"

export default function DAMenu() {
  const [showModal, setShowModal] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showAddPro, setShowAddPro] = useState(false)
  const [showAddCat, setShowAddCat] = useState(false)
  const location = useLocation()

  console.log(location)

  return (
    <div className="h-max m-6 sm:absolute sm:mt-0 sm:top-[calc(5rem-10px)] sm:left-5 sm:w-64 rounded-xl shadow-md	shadow-gray-700/10 overflow-hidden">
      <div className={`${location.pathname === "/admin/dashboard" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-400"} flex w-full  `}>
        <div className="sm:w-full w-[calc(75%-10px)]">
          <Link to="/admin/dashboard">
            <p
              className=" p-4 font-light"
              onClick={() => {
                setShowAddPro(false)
                setShowAddCat(false)
                setMobileMenu(false)
              }}
            >Dashboard</p>
          </Link>
        </div>
        <div className="sm:w-0 w-1/4 text-right">
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
      <ul className={`${mobileMenu ? "block" : "sm:block hidden"} flex flex-col bg-gray-700 z-10`}>
            <li
            className={`${location.pathname.includes('/admin/dashboard/product') ? "bg-gray-800 text-white" : "text-gray-400"} cursor-pointer p-4 font-light hover:text-white hover:bg-gray-800`}
             onClick={() => {
              setShowAddPro(!showAddPro)
              setShowAddCat(false)
          }}
            >
              Products
            </li>
          {
            showAddPro ?
            <ul className="bg-gray-800 font-light border-b-[1px] border-gray-700 pb-2">
              <Link to="/admin/dashboard/products">
                <li
                  className={`text-sm px-6 py-3 ${location.pathname === "/admin/dashboard/products" ? "text-white" : "text-gray-400"}`}
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                  
                >
                  Products</li>
              </Link>
              <Link to="/admin/dashboard/product/create">
                <li
                  className={`text-sm px-6 py-3 ${location.pathname === "/admin/dashboard/products/create" ? "text-white" : " text-gray-400"}`}
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Add Product</li>
               </Link> 
            </ul>
            :
            ""
          }
            <li
            className={`${location.pathname.includes('/admin/dashboard/categor') ? "bg-gray-800 text-white" : " text-gray-400"} cursor-pointer p-4 font-light hover:text-white hover:bg-gray-800`}
            onClick={() => {
              setShowAddCat(!showAddCat)
              setShowAddPro(false)
            }}>
            Categories
          </li>
          {
            showAddCat ?
            <ul className="bg-gray-800 font-light text-sm border-b-[1px] border-gray-700 pb-2">
              <Link to="/admin/dashboard/categories">
                <li
                  className={`px-6 py-3 ${location.pathname === "/admin/dashboard/categories" ? "text-white" : " text-gray-400"}`}
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Categories</li>
              </Link>
              <Link to="/admin/dashboard/category/create">
                <li
                  className={`px-6 py-3 ${location.pathname === "/admin/dashboard/category/create" ? "text-white" : " text-gray-400"}`}
                  onClick={() => {
                    setShowAddPro(false)
                    setShowAddCat(false)
                    setMobileMenu(false)
                  }}
                >Add Category</li>
               </Link> 
            </ul>
            :
            ""
          }
          <Link to="/admin/dashboard/users">
            <li
            className={`${location.pathname === '/admin/dashboard/users' ? "bg-gray-800 text-white" : "text-gray-400"} cursor-pointer p-4 font-light hover:text-white hover:bg-gray-800`}
            onClick={() => {
              setShowAddPro(false)
              setShowAddCat(false)
              setMobileMenu(false)
            }}>
            Users
          </li>
          </Link>
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