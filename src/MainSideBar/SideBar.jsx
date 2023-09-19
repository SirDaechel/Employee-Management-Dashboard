import SideTab from "./SideTab"
import dashboardicon from "../../public/images/dashboardicon"
import usersicon from "../../public/images/usersicon"
import cashIcon from '../../public/images/cashIcon'
import helpIcon from '../../public/images/helpIcon'
import projecticon from "../../public/images/projecticon"

const Sidebar = () => {

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
            icon={<div className="sidetab_icon_boxixon">{projecticon}</div>}
            label={"Projects"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/projects"}
        />

        <SideTab
            icon={<div className="sidetab_icon_boxixon">{cashIcon}</div>}
            label={"Payroll"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/payroll"}
        />

        <SideTab
            icon={<div className="sidetab_icon_boxixon">{helpIcon}</div>}
            label={"Help Desk"}
            theClass={({ isActive }) => isActive ? "active" : ""}
            theLink={"/helpdesk"}
        />

      </div>

    </div>
    
  )
}

export default Sidebar