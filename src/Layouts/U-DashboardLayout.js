import { Outlet } from "react-router-dom"
import DUMenu from "../Components/DUMenu"
import Header from "../Components/Header"

export default function UDashboardLayout() {
  
  return (
    <div>
      <Header />
      <DUMenu />
      <Outlet />
    </div>
  )
}