import { Outlet, useNavigate } from "react-router-dom"
import DUMenu from "../Components/DUMenu"
import Header from "../Components/Header"
import { useSelector } from 'react-redux'
import { current_user, current_admin } from "../Global State/Slice"
import { useEffect, useState } from "react"

export default function UDashboardLayout() {
  const thisUser = useSelector(current_user)
  const thisAdmin = useSelector(current_admin)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (thisAdmin) return navigate('/admin/dashboard')
    if (!thisUser) return navigate('/login')
    setLoading(false)
  }, [])

  if(loading) return <h1>Loading...</h1>
  return ( 
    <div>
      <Header />
      <DUMenu />
      <Outlet />
    </div>
  )
}