import { Outlet } from "react-router-dom"
import AllSideBarTabs from "./AllSideBarTabs"

const Sidebar = () => {

  return (

    <main>

      <AllSideBarTabs />

      <Outlet />

    </main>
  )
}

export default Sidebar