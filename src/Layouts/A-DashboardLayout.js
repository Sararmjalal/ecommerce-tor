import { Outlet } from "react-router-dom"
import DAHeader from "../Components/DAHeader"
import DAMenu from "../Components/DAMenu"

export default function WebLayout() {
  return (
    <div>
      <DAHeader />
      <DAMenu />
      <Outlet />
    </div>
  )
}