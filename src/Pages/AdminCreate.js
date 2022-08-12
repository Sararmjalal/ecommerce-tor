import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DOMAIN } from "../config/constants"

export default function AdminCreate() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const create = () => {
    axios.post(`${DOMAIN}/admin/create`, {
      name,
      phone
    })
      .then(() => {
        setMessage("You've created admin successfully!")
      })
      .catch(err => {
        console.log(err)
        if (err.response.data.msg === 'bad input')
          return setMessage("Please check you're entered fields!")
        if (err.response.data.msg === "Provided value is not a valid Phone Number")
          return setMessage("Please enter a valid phone number!")
        if (err.response.data.msg === 'bad request: this phonenumber already exists in the database')
          return setMessage("This user already exists!")
    })
  }

  return (
    <div>
      <p
        onClick={() => navigate(-1)}
        className="my-4 mx-4 w-max bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-xl text-white cursor-pointer text-sm">
        Go Back
      </p>
      <div
          onKeyDown={(e) => {
            if(e.key === 'Enter') return create()
            }}
            className="shadow-md	shadow-gray-900/10 p-5 rounded-xl sm:w-[30rem] h-64 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)]">
        <h1 className="text-gray-900 mt-5 font-semibold	text-xl	">Create Admin</h1>
            <div className="h-8 mt-2 text-sm text-gray-800">{message}</div>
            {
              message === "You've created admin successfully!" ?
                <div className="flex mt-2">
                 <div className="w-1/3">
                      <input
                        disabled
                        placeholder="Name"
                        className="text-gray-400 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className="w-2/3 ml-2">
                      <input
                        disabled
                        placeholder="Phone Number"
                        className="text-gray-400 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                  </div>
                </div>
                :
                <div className="flex mt-2">
                  <div className="w-1/3">
                    <input
                      placeholder="Name"
                      className="text-gray-800 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="w-2/3 ml-2">
                    <input
                      placeholder="Phone Number"
                      className="text-gray-800 w-full py-3 pl-2 bg-gray-100 rounded-xl outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
              </div>
        }
        {
          message === "You've created admin successfully!" ?
              <div>
                  <button
                    className="w-full mt-3 mb-12 py-3 text-white bg-gray-700 outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
                    onClick={create}
                    disabled
                  >
                    Create
                  </button>
                </div>
          :
              <div>
                  <button
                    className="w-full mt-3 mb-12 py-3 text-white bg-gray-900 outline-none hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
                    onClick={create}
                  >
                    Create
                  </button>
                </div>
        }

</div>
    </div>
  )
}