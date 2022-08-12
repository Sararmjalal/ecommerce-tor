import { Outlet } from "react-router-dom"
import DAHeader from "../Components/DAHeader"
import DAMenu from "../Components/DAMenu"
import { current_admin } from "../Global State/Slice"
import { useSelector } from "react-redux"
import AccessDenied from "../Pages/AccessDenied"

export default function WebLayout() {
  const thisAdmin = useSelector(current_admin)

  if (!thisAdmin) return <AccessDenied />
  
  return (
    <div>
      <DAHeader />
      <DAMenu />
      <Outlet />
    </div>
  )
}