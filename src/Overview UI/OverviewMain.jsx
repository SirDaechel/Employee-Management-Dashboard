import { useState } from "react";
import AdminProfilePic from "../adminProfilePic";
import DeptSummary from "./DeptSummary";
import ProjectSummary from "./ProjectSummary";

const OverviewMain = ({ users }) => {

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
    
    <section className="content2">
    
      <div className="dashboard_header">

        <div className="welcome_user">
          <p className="dashboard_greeting">{greeting}</p>
          <div className="dashboard_date">{formattedDate}</div>
        </div>

        <AdminProfilePic />

      </div>

      <div className="main_overview_content">

        <DeptSummary 
          users={users}
        />

        <ProjectSummary />

      </div>

    
    </section>

  )

}

export default OverviewMain