import { current_user } from "../Global State/Slice"
import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { DOMAIN } from "../config/constants"
import Cookies from "universal-cookie"

export default function DUEditProfile() {
  const thisUser = useSelector(current_user)
  const cookies = new Cookies()
  const [name, setName] = useState(thisUser.name)
  const [message, setMessage] = useState('')

  const edit = () => {
    axios.post(`${DOMAIN}/user/edit`, {
      name,
    }, {
      headers: {
        auth: `ut ${cookies.get('ut')}`
      }
    })
      .then(() => setMessage("Changes applied successfully!"))
      .catch(err => {
        if (err.response.data.msg === 'bad input')
        setMessage("Field cannot be empty!")
    })
  }

  return (
    <div className="mt-9 ml-80 mr-10">  
      <h1 className="text-lg text-gray-700 font-semibold mb-4">Edit Profile</h1>
      <div
        className="flex md:w-[500px]"
        onKeyDown={(e) => {
          if(e.key === 'Enter') return edit()
        }}
      >
        <div className="w-1/3">
          <label className="font-light ml-1">Name:</label>
              <input
                placeholder="Enter your name"
                className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
        </div>
        <div className="w-2/3 ml-2">
        <label className="font-light ml-1">Phone Number:</label>
              <input
                disabled
                placeholder="Phone Number"
                className="text-gray-400 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none mt-1"
                value={thisUser.phone}
          />
          </div>
      </div>
      <div className="text-sm ml-1 mt-4 text-gray-600 font-light">
          {message}
        </div>
      <div className="text-right md:w-[500px]">
      <button
        className="text-white bg-violet-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2"
        onClick={edit}
      >
        Edit
      </button>
      </div>
    </div>
  )
}