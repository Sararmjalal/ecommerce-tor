import axios from "axios"
import { useEffect } from "react"
import Cookies from "universal-cookie"
import { DOMAIN } from "../config/constants"

export default function About() {
  const cook = new Cookies()
  const token = cook.get('ut')
  
  useEffect(() => {
    axios.post(`${DOMAIN}/user/me`, {
      body: JSON.stringify({})
    }, {
      headers: {
        auth: `ut ${token}`
      }
    }).then(res => console.log(res))
  }, [])

  return (
    <h1>This is About</h1>
  )
}