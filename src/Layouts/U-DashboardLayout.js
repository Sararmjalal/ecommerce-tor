import { Outlet, useNavigate } from "react-router-dom"
import DUMenu from "../Components/DUMenu"
import Header from "../Components/Header"
import { useSelector } from 'react-redux'
import { current_user, current_admin } from "../Global State/Slice"
import { useEffect } from "react"

export default function UDashboardLayout() {
  const thisUser = useSelector(current_user)
  const thisAdmin = useSelector(current_admin)
  const navigate = useNavigate()

  useEffect(() => {
    if (thisAdmin) return navigate('/admin/dashboard')
    if (!thisUser) return navigate('/login')
  }, [])

  return (
    <div>
      <Header />
      <DUMenu />
      <Outlet />
    </div>
  )
}