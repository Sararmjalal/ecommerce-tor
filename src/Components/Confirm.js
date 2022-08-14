import { current_admin, logout, adminLogout } from "../Global State/Slice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Confirm(props) {
  const thisAdmin = useSelector(current_admin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
          <>
            <div
            className="bg-black fixed top-0 left-0 w-screen h-screen opacity-50 z-10"
            onClick={() => props.setShowModal(false)}
            ></div>
            <div
              onKeyDown={(e) => {
                if (e.key === 'Enter') return 
              }}
              className="bg-white shadow-md	shadow-gray-700/10 p-5 rounded-xl sm:w-[30rem] h-48 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)] z-20">
              <h1 className="text-violet-700 mb-5 font-semibold	text-xl	">Logout</h1>
              <div className="h-8 mt-2 text-gray-600">Are you sure you want to logout?</div>
              <div className="flex">
                <div className="w-1/2">
                  <button
                    className="w-full mt-3 mb-12 py-3 text-white bg-violet-700 outline-none hover:bg-violet-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
                    onClick={() => props.setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 pl-2">
                  {
                    thisAdmin ?
                      <button
                        className="w-full mt-3 mb-12 py-3 text-gray-500 bg-gray-100 outline-none hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
                        onClick={() => {
                          props.setShowModal(false)
                          dispatch(adminLogout())
                          navigate('/')
                        }}
                      >
                        Yes
                      </button>
                      :
                      <button
                        className="w-full mt-3 mb-12 py-3 text-gray-500 bg-gray-100 outline-none hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
                        onClick={() => {
                          props.setShowModal(false)
                          dispatch(logout())
                          navigate('/')
                        }}
                      >
                        Yes
                      </button>
                  }

                </div>
              </div>
            </div>
          </>
  )
}