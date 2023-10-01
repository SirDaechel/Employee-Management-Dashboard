import notificationsicon from "../public/images/notificationsicon";

const TopNav = ({ openNotificationsBar, notifications }) => {

  //greeting with respect to time of the day
  const getGreeting = () => {

    const currentTime = new Date().getHours();

    if(currentTime >= 0 && currentTime < 12) {
      return "Good morning, David!";
    } else if(currentTime >= 12 && currentTime < 18) {
      return "Good afternoon, David!"
    } else{
      return "Good evening, David!"
    };

  }

  const greeting = getGreeting();

  //get day and date
  const formatDate = (date) => {

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);

  };

  const formattedDate = formatDate(Date.now());

  

  return (

    <div className="top_nav">

      <div className="welcome_user">
        <p className="dashboard_greeting">{greeting}</p>
        <div className="dashboard_date">{formattedDate}</div>
      </div>

      <div className="top_nav_utilities">

        <div className="notifications" onClick={() => openNotificationsBar()}>

          <p className="number_of_notifications">{notifications.length}</p>

          <div className="notification_icon">
            {notificationsicon}
          </div>

        </div>

        <div className="user_profile">

          <img className="user_photo" src="../public/images/adminPhoto.png" alt="user photo" />

          <div className="user_name_role">
            <p className="user_name">David Okpala</p>
            <p className="userrole">Administrator</p>
          </div>

        </div>


      </div>
      
    </div>

  )
}

export default TopNav