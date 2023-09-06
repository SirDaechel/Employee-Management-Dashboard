import ActivityFeed from "./ActivityFeed"

const RecentActivity = () => {

  return (

    <div className="activity_cont">

        <h4 className="activity_title">Recent activity</h4>

        {/* <div className="activity_main"> */}
            
            <div className="activity_feed">

                <div className="feed_day">Today</div>

                <div className="activity_data">

                    <ActivityFeed 
                        avatar={"../../public/images/avatar (6).jpg"}
                        activity={"Chinedu Okoro completed the Website Redesign project milestone."}
                        time={"1h"}
                    />

                    <ActivityFeed 
                        avatar={"../../public/images/avatar (2).jpg"}
                        activity={"Project Product Launch deadline extended to September 15th."}
                        time={"3h"}
                    />

                    <ActivityFeed 
                        avatar={"../../public/images/avatar(7).jpg"}
                        activity={"Welcome Chidinma Eze, our new Cloud Engineer, to the team!"}
                        time={"6h"}
                    />

                </div>

                <div className="feed_day">Yesterday</div>

                <div className="activity_data">

                    <ActivityFeed 
                        avatar={"../../public/images/avatar (4).jpg"}
                        activity={"Team meeting scheduled for Monday at 10:00 AM. "}
                        time={"17h"}
                    />

                    <ActivityFeed 
                        avatar={"../../public/images/avatar (5).jpg"}
                        activity={"Project Product Launch deadline extended to September 15th."}
                        time={"19h"}
                    />

                    <ActivityFeed 
                        avatar={"../../public/images/avatar (1).jpg"}
                        activity={"Diego Morales has been assigned to lead the upcoming Product Launch project."}
                        time={"22h"}
                    />

                </div>
            
            </div>

        {/* </div> */}

    </div>

  )

}

export default RecentActivity