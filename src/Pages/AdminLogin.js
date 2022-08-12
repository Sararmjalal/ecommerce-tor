import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { DOMAIN } from "../config/constants"
import Cookies from "universal-cookie"
import { setAdmin, current_admin } from "../Global State/Slice"
import Timer from "../Components/Timer"

export default function AdminLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cookies = new Cookies()
  const thisAdmin = useSelector(current_admin)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [invalid1, setInvalid1] = useState('')
  const [invalid2, setInvalid2] = useState('')
  const [showNext, setShowNext] = useState(false)

  useEffect(() => {
    if(thisAdmin) return navigate('/admin/dashboard')
  }, [])

  const next = () => {
    axios.post(`${DOMAIN}/admin/login-step-one`, {
      phone,
    })
      .then(() => setShowNext(true))
      .catch(err => {
        console.log(err)
        if (err.response.data.msg === 'Provided value is not a valid Phone Number')
          return setInvalid1("Please enter a valid phone number!")
        if (err.response.data.msg === 'bad request: no such admin exists in our database')
          return setInvalid1("This admin doesn't exist. Please try again!")
        
      })
  }

  const login = () => {
    axios.post(`${DOMAIN}/admin/login-step-two`, {
      phone,
      code
    })
      .then(res => cookies.set('at', res.data.token, { path: '/' }))
      .then(() => axios.post(`${DOMAIN}/admin/me`, {
        data: JSON.stringify({})
      },
        {
          headers: {
          a_auth: `at ${cookies.get(`at`)}` 
        }
        })
        .then(res => dispatch(setAdmin(res.data)))
        .then(() => navigate('/admin/dashboard'))
        .catch(err => console.log(err))
    )
      .catch(err => {
        console.log(err)
        if (err.response.data.msg === 'wrong code')
          return setInvalid2("The code is wrong. Please try again!")
        if (err.response.data.msg === "time's up")
          return setInvalid2("The code has been expired. Please try again!")
      })
  }

  return (
    <div>
          <p
            onClick={() => navigate(-1)}
            className="my-4 mx-4 w-max bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-xl text-white cursor-pointer text-sm">
            Go Back
          </p>
      {
        showNext ?
        <div
            onKeyDown={(e) => {
              if (e.key === 'Enter') return login()
            }}
            className="shadow-md	shadow-gray-900/10 p-5 rounded-xl sm:w-[30rem] h-64 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)]">
        <h1 className="text-gray-900 mt-5 font-semibold	text-xl	">Admin Login</h1>
            <div className="h-8 mt-2 text-sm text-gray-600">{invalid2}</div>
            <div className="flex mt-2">
            <div className="w-2/3">
              <input
                disabled
                placeholder="Phone Number"
                className="text-gray-400 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
          </div>
          <div className="w-1/3 ml-2">
              <input
                placeholder="Code"
                className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
          </div>
          </div>
          <div className="flex">
              <div className="w-1/2">
              <button
              className="w-full mt-3 mb-12 py-3 text-gray-500 bg-gray-100 outline-none hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
              onClick={() => setShowNext(false)}
            >
              Previous Step
            </button>
              </div>
              <div className="w-1/2 pl-2">
              <button
              className="w-full mt-3 mb-12 py-3 text-white bg-gray-900 outline-none hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
              onClick={login}
            >
              Sign in
                </button>
                </div>
            </div>
            <Timer />
        </div>
          :
       <div
          onKeyDown={(e) => {
            if(e.key === 'Enter') return next()
            }}
            className="shadow-md	shadow-gray-900/10 p-5 rounded-xl sm:w-[30rem] h-64 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)]">
        <h1 className="text-gray-900 mt-5 font-semibold	text-xl	">Admin Login</h1>
            <div className="h-8 mt-2 text-sm text-gray-600">{invalid1}</div>
        <div className="mt-2">
            <input
              placeholder="Phone Number"
              className="text-gray-600 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div>
          <button
            className="w-full mt-3 mb-12 py-3 text-white bg-gray-900 outline-none hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
            onClick={next}
          >
            Next Step
          </button>
        </div>
      </div>
      }
    </div>
  )
}