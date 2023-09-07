import { Doughnut } from "react-chartjs-2"
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from "chart.js"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const ProjectCompletionChart = () => {

  const data = {

      labels: ["Completed", "In Progress", "Pending"],
  
      datasets: [
  
        {
          label: "Rate",
          data: [56, 29, 15],
          backgroundColor: ["#6C63FF", "#F1C93B", "grey"],
          type: 'doughnut',
          hoverOffset: 4,
          spacing: 0
        },
  
      ]
    
    };
  
    const options = {
    
      plugins: {
        legend: false,
        tooltip: true,
      },
    
      responsive: true,
    
      maintainAspectRatio: true,
    
      aspectRatio: .99,
    
      scales: {
    
        x: {
  
            border: {
              display: false,
            },
    
            grid: {
              display: false,
            },
    
            ticks: {
              display: false,
            },
    
        },
    
        y: {
  
            border: {
              display: false,
            },
    
            ticks: {
              display: false,
            },
    
            grid: {
                display: false,
            },
    
        }
    
      },
    
    };

  return (

    <div className="project_completion_chart">

      <p className="project_completion_title">Project Completion Rate</p>

      <Doughnut data={data} options={options}></Doughnut>

      <div className="project_completion_labels">

        <div className="completed_projects_label">
            <div className="completed_projects_label_colour"></div>
            <div className="completed_projects_label_text">Completed</div>
        </div>

        <div className="inprogress_projects_label">
            <div className="inprogress_projects_label_colour"></div>
            <div className="inprogress_projects_label_text">In Progress</div>
        </div>

        <div className="pending_projects_label">
            <div className="pending_projects_label_colour"></div>
            <div className="pending_projects_label_text">Pending</div>
        </div>

      </div>

    </div>

  )

}

export default ProjectCompletionChart