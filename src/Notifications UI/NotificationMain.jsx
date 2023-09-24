import NotificationList from "./NotificationList";

const NotificationMain = ({ notifications, setNotifications, closeNotificationBar }) => {

  const deleteAllNotifications = () => {
    setNotifications([]);
  }

  return (

    <div className="notification_cont">

      <div className="notification_data">

        <div className="notification_header">
          <p className="notification_title">Notifications</p>
          <button className="close_notification_button" onClick={() => closeNotificationBar()}>Close</button>
        </div>

        <div className="notification_lists_block">

          {notifications.length ? 

            notifications.map((notification) => (

              <NotificationList
                key={notification.id}
                image={notification.image}
                subject={notification.subject}
                notification={notification.notification}
                department={notification.department}
                time={notification.time}
                request={notification.request}
              />

            ))

          : <p className="no_notifications_txt">No data to display</p>}

          <div style={{display: notifications.length === 0 ? "none" : "block"}}  className="delete_all_notifications" onClick={() => deleteAllNotifications()}>Delete all</div>

        </div>

      </div>
        
    </div>

  )
  
}

export default NotificationMain