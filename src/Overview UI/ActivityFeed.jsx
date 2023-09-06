

const ActivityFeed = ({ avatar, activity, time }) => {

  return (

    <div className="activity">

        <img className="activity_avatar" src={avatar} alt="" />

        <p className="activity_txt">{activity}</p>

        <p className="acivity_time">{time}</p>

    </div>

  )
}

export default ActivityFeed