import SideTab from "./SideTab"
import dashboardicon from "../../public/images/dashboardicon"
import usersicon from "../../public/images/usersicon"
import notificationsicon from "../../public/images/notificationsicon"
import projecticon from "../../public/images/projecticon"
import settingsicon from "../../public/images/settingsicon"

const AllSideBarTabs = () => {

  return (

    <div className="sideBarContainer">

      <div className="sidebartabs">

        <SideTab 
            icon={<div className="sidetab_icon_boxixon">{dashboardicon}</div>}
            label={"Dashboard"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/"}
        />

        <SideTab 
            icon={<div className="sidetab_icon_boxixon">{usersicon}</div>}
            label={"Staffs"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/staffs"}
        />

        <SideTab 
            icon={<div className="sidetab_icon_boxixon">{notificationsicon}</div>}
            label={"Notifications"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/notifications"}
        />

        <SideTab
            icon={<div className="sidetab_icon_boxixon">{projecticon}</div>}
            label={"Projects"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/projects"}
        />

        <SideTab 
            icon={<div className="sidetab_icon_boxixon">{settingsicon}</div>}
            label={"Settings"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/settings"}
        />

      </div>

    </div>

  )
}

export default AllSideBarTabs