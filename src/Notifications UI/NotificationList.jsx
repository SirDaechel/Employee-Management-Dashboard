import groupUsersIcon from "../../public/images/groupUsersIcon";

const NotificationList = ({ image, subject, notification, department, time, request }) => {

  return (

    <div className="notification_list">

        <img className="user_image_notification" src={image} alt=""/>

        <div className="notification_msg_cont">

          <p className="notification_msg">
            <span className="subject_of_notification">{subject}</span> {notification}
          </p>

          <div className="notification_dept_cont">
            <div className="dept_icon">{groupUsersIcon}</div>
            <p className="notification_dept">{department}</p>
          </div>

          {request ? 

            <div className="notification_dept_request">
                <button className="notification_request_decline">Decline</button>
                <button className="notification_request_approve">Approve</button>
            </div>

           : null}

        </div>

        <div className="notification_time">{time}</div>

    </div>

  )

}

export default NotificationList