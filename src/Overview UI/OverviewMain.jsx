import { useState } from "react";
import TopNav from "../TopNav";
import DeptSummary from "./DeptSummary";
import ProjectSummary from "./ProjectSummary";
import RecentActivity from "./RecentActivity";
import ProjectsMetricNo from "./ProjectsMetricNo";
import arrowup2 from "../../public/images/arrowup2"
import arrowdown2 from "../../public/images/arrowdown2"
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import HeadCountPieChart from "./HeadCountPieChart";

const OverviewMain = ({ users }) => {

  return (
    
    <section className="content">
    
      <TopNav />

      <div className="main_overview_content">

        <div className="project_metrics">

          <ProjectsMetricNo
            topText={"Net spend per project"}
            spend={"₦465.5k"}
            percentage={"16.24%"}
            arrow={arrowdown2}
            percent={"red"}
          />

          <ProjectsMetricNo
            topText={"Avg. income per project"}
            spend={"₦924k"}
            percentage={"4.76%"}
            arrow={arrowup2}
            percent={"green"}
          />

          <ProjectsMetricNo
            topText={"Avg. spend per project"}
            spend={"₦101.2k"}
            percentage={"10.45%"}
            arrow={arrowdown2}
            percent={"red"}
          />

          <ProjectsMetricNo
            topText={"Total stipend payments"}
            spend={"₦189.67M"}
            percentage={"6.91%"}
            arrow={arrowup2}
            percent={"green"}
          />

          

        </div>


        <div className="second_lvl_overview">

            <BarChart />

            <HeadCountPieChart 
              users={users}
            />

            

            {/* <ProjectSummary /> */}

        </div>

        <div className="third_lvl_overview">

          {/* <DeptSummary 
              users={users}
            /> */}

          {/* <RecentActivity /> */}

          {/* <LineChart /> */}

        </div>

      </div>

    
    </section>

  )

}

export default OverviewMain