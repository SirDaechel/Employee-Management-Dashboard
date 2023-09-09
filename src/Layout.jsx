import { useState } from "react";
import { Outlet } from "react-router-dom"
import TopNav from "./TopNav";
import Sidebar from "./MainSideBar/SideBar";
import thecloseicon from "../public/images/thecloseicon"
import NotificationMain from "./Notifications UI/NotificationMain";

const Layout = ({ notifications, setNotifications }) => {

  const [showNotificationsBar, setShowNotificationsBar] = useState(false);
  const [fullPageOverlay, setFullPageOverlay] = useState(false);

  //open the notification bar
  const openNotificationsBar = () => {
    setFullPageOverlay(!fullPageOverlay);
    setShowNotificationsBar(true);
  }

  //close notifications bar and remove overlay
  const closeNotificationBar = () => {
    setShowNotificationsBar(false);
    setFullPageOverlay(false);
  }

  return (

    <main>

        <div className="close_notification_icon" style={{display: showNotificationsBar ? "block" : "none"}} onClick={() => closeNotificationBar()}>
        {thecloseicon}
        </div>

        <div className="add_user_modal_overlay" style={{display: fullPageOverlay ? "block" : "none"}}></div>

        <Sidebar />

        {showNotificationsBar ? 

            <NotificationMain 
                notifications={notifications}
                setNotifications={setNotifications}
            />

        : null}

        <div className="content">

            <TopNav 
                fullPageOverlay={fullPageOverlay}
                setFullPageOverlay={setFullPageOverlay}
                showNotificationsBar={showNotificationsBar}
                setShowNotificationsBar={setShowNotificationsBar}
                openNotificationsBar={() => openNotificationsBar()}
                notifications={notifications}
            />

            <Outlet />

        </div>

    </main>

  )

}

export default Layout