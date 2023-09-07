import ProjectsMetricNo from "./ProjectsMetricNo";
import arrowup2 from "../../public/images/arrowup2"
import arrowdown2 from "../../public/images/arrowdown2"
import BarChart from "./BarChart";
import HeadCountPieChart from "./HeadCountPieChart";
import ProjectCompletionChart from "./ProjectCompletionChart";
import ProjectDeadlineTable from "./ProjectDeadlineTable";

const OverviewMain = ({ users, projects }) => {

  return (
    
    <section>

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
            topText={"Total stipend payout"}
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

        </div>

        <div className="third_lvl_overview">

          <ProjectCompletionChart />

          <ProjectDeadlineTable 
            projects={projects}
          />

        </div>

      </div>

    
    </section>

  )

}

export default OverviewMain