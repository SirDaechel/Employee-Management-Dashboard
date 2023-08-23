import { useState } from "react"
import SideTab from "./SideTab"
import dashboardicon from "../../public/images/dashboardicon"
import analyticsicon from "../../public/images/analyticsicon"
import usersicon from "../../public/images/usersicon"
import notificationsicon from "../../public/images/notificationsicon"
import projecticon from "../../public/images/projecticon"
import settingsicon from "../../public/images/settingsicon"


const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  return (

    <div className="sideBarContainer">

      <div className="sidebartabs">

            <SideTab 
              icon={<div className="sidetab_icon_boxixon">{dashboardicon}</div>}
              label={"Dashboard"}
              onClick={() => handleTabChange(0)}
              theClass={activeTab === 0 ? "active" : ""}
            />

            <SideTab 
              icon={<div className="sidetab_icon_boxixon">{usersicon}</div>}
              label={"Users"}
              onClick={() => handleTabChange(1)}
              theClass={activeTab === 1 ? "active" : ""}
            />

            <SideTab 
              icon={<div className="sidetab_icon_boxixon">{notificationsicon}</div>}
              label={"Notifications"}
              onClick={() => handleTabChange(2)}
              theClass={activeTab === 2 ? "active" : ""}
            />

            <SideTab
              icon={<div className="sidetab_icon_boxixon">{projecticon}</div>}
              label={"Projects"}
              onClick={() => handleTabChange(3)}
              theClass={activeTab === 3 ? "active" : ""}
            />

            <SideTab analyticsicon
              icon={<div className="sidetab_icon_boxixon">{analyticsicon}</div>}
              label={"Analytics"}
              onClick={() => handleTabChange(4)}
              theClass={activeTab === 4 ? "active" : ""}
            />

            <SideTab 
              icon={<div className="sidetab_icon_boxixon">{settingsicon}</div>}
              label={"Settings"}
              onClick={() => handleTabChange(5)}
              theClass={activeTab === 5 ? "active" : ""}
            />

      </div>


    </div>

  )
}

export default Sidebar