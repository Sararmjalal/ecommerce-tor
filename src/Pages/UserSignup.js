import axios from "axios"
import { useState, useEffect } from "react"
import { DOMAIN } from "../config/constants"
import {useNavigate} from "react-router-dom"
import Timer from "../Components/Timer"
import { useSelector } from 'react-redux'
import { current_user, current_admin, setUser } from "../Global State/Slice"
import Cookies from "universal-cookie"
import { useDispatch } from "react-redux"

export default function UserSignup() {
  const navigate = useNavigate()
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const thisUser = useSelector(current_user)
  const thisAdmin = useSelector(current_admin)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [showNext, setShowNext] = useState(false)
  const [invalid1, setInvalid1] = useState('')
  const [invalid2, setInvalid2] = useState('')

  useEffect(() => {
    if (thisUser) return navigate('/user/dashboard/')
    if (thisAdmin) return navigate('/admin/dashboard')
  }, [])

  const next = () => {
    axios.post(`${DOMAIN}/user/sign-up-one`, {
        name,
        phone,
    }).then(res => {
      console.log(res)
      setShowNext(true)
    })
      .catch(err => {
        console.log(err)
        if (err.response.data.msg === "Provided value is not a valid Phone Number")
          return setInvalid1("Please enter a valid phone number!")
        if (err.response.data.msg === 'bad request: bad inputs')
          return setInvalid1("Please check you're entered fields!")
        if (err.response.data.msg === "this user already exists in the database")
          return setInvalid1("You've already registered. Please login!")
    })
  }

  const signUp = () => {
    axios.post(`${DOMAIN}/user/sign-up-two`,{
      phone,
      code
    }).then(res => {
      console.log(res)
      cookies.set('ut', res.data.token, { path: '/' })
    })
      .then(() => {
        axios.post(`${DOMAIN}/user/me`, {}, {
          headers: {
            auth: `ut ${cookies.get('ut')}`
          }
        })
      .then(data => dispatch(setUser(data.data)))
      .then(() => navigate('/user/dashboard'))
      })
      .catch(err => {
        console.log(err)
        if (err.response.data.msg === 'bad request')
          return setInvalid2("Please enter the code!")
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
        className="my-4 mx-4 w-max bg-violet-700 hover:bg-violet-600 px-4 py-2 rounded-xl text-white cursor-pointer text-sm">
        Go Back
      </p>
      {
        showNext ?
        <div
            onKeyDown={(e) => {
              if (e.key === 'Enter') return signUp()
            }}
            className="shadow-md	shadow-gray-700/10 p-5 rounded-xl sm:w-[30rem] h-64 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)]">
             <h1 className="text-violet-700 mt-5 font-semibold	text-xl	">Sign up</h1>
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
              className="w-full mt-3 mb-12 py-3 text-white bg-violet-700 outline-none hover:bg-violet-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
              onClick={signUp}
            >
              Register
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
            className="shadow-md	shadow-gray-700/10 p-5 rounded-xl sm:w-[30rem] h-64 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)]">
        <h1 className="text-violet-700 mt-5 font-semibold	text-xl	">Sign up</h1>
            <div className="h-8 mt-2 text-sm text-gray-600">{invalid1}</div>
        <div className="flex mt-2">
        <div className="w-1/3">
            <input
              placeholder="Name"
              className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="w-2/3 ml-2">
            <input
              placeholder="Phone Number"
              className="text-gray-600 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        </div>
        <div>
          <button
            className="w-full mt-3 mb-12 py-3 text-white bg-violet-700 outline-none hover:bg-violet-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
            onClick={next}
          >
            Next Step
          </button>
          <p className="h-8 mt-2 text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-violet-700 hover:text-violet-600"> Login </a>
          </p>
            </div>
      </div>
      }
    </div>
  )
}