import { Outlet } from "react-router-dom"
import DUMenu from "../Components/DUMenu"
import Header from "../Components/Header"
import { useSelector } from 'react-redux'
import { current_user } from "../Global State/Slice"
import AccessDenied from "../Pages/AccessDenied"

export default function UDashboardLayout() {
  const thisUser = useSelector(current_user)

  if(!thisUser) return <AccessDenied />
  return (
    <div>
      <Header />
      <DUMenu />
      <Outlet />
    </div>
  )
}