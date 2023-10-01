import { useState } from "react";
import { Outlet } from "react-router-dom"
import TopNav from "./TopNav";
import Sidebar from "./MainSideBar/SideBar";
import NotificationMain from "./Notifications UI/NotificationMain";

const Layout = ({ notifications, setNotifications, fullPageOverlay, setFullPageOverlay }) => {

  const [showNotificationsBar, setShowNotificationsBar] = useState(false);

  //open the notification bar
  const openNotificationsBar = () => {
    setFullPageOverlay(!fullPageOverlay);
    setShowNotificationsBar(true);
    document.body.classList.add('no_scroll')
  }

  //close notifications bar and remove overlay
  const closeNotificationBar = () => {
    setShowNotificationsBar(false);
    setFullPageOverlay(false);
    document.body.classList.remove('no_scroll')
  }

  return (

    <main>

        <div className="add_user_modal_overlay" style={{display: fullPageOverlay ? "block" : "none"}}></div>

        <Sidebar />

        {showNotificationsBar ? 

            <NotificationMain 
                notifications={notifications}
                setNotifications={setNotifications}
                closeNotificationBar={closeNotificationBar}
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