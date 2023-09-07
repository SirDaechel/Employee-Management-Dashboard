import NotificationList from "./NotificationList";

const NotificationMain = ({ notifications, setNotifications }) => {

  const deleteAllNotifications = () => {
    setNotifications([]);
  }

  return (

    <div className="notification_cont">

      <div className="notification_data">

        <div className="notification_header">
          <p className="notification_title">Notifications</p>
          <div className="delete_all_notifications" onClick={() => deleteAllNotifications()}>Delete all</div>
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

        </div>

      </div>
        
    </div>

  )
  
}

export default NotificationMain