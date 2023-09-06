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

const HeadCountPieChart = ({ users }) => {
  
  const roleCounts = {};

  users.forEach(user => {
    if (roleCounts[user.role]) {
      roleCounts[user.role]++;
    } else {
      roleCounts[user.role] = 1;
    }
  });

  const roleNames =  Object.keys(roleCounts);

  const roleColours = ["#6b63ffc2", "#FF0060", "aqua", "orange", "#FFA1F5", "#016A70", "#D2DE32", "#A73121", "#96C291", "#5C5470", "#504099", "#900C3F", "#DFCCFB", "#C8AE7D", "#DFA878", "#FFCACC", "#9BCDD2", "#EF6262", "#F1C93B", "#4A55A2", "#A2FF86", "#898121"];

  const rolesWithColours = roleNames.map((role) => {

    return {
      
      role: role, 
      colour: role === "Data Analyst" && "#6b63ffc2" || 
      role === "UI/UX Designer" && "#FF0060" ||
      role === "Full Stack Developer" && "aqua" ||
      role === "Data Scientist" && "orange" ||
      role === "Product Manager" && "#FFA1F5" ||
      role === "Frontend Developer" && "#016A70" ||
      role === "Technical Writer" && "#D2DE32" ||
      role === "Innovation Specialist" && "#A73121" ||
      role === "Quality Assurance Tester" && "#96C291" ||
      role === "Billing/Invoicing Specialist" && "#5C5470" ||
      role === "Auditor" && "#504099" ||
      role === "Graphic Designer" && "#900C3F" ||
      role === "Technical Support" && "#DFCCFB" ||
      role === "Cyber Security" && "#C8AE7D" ||
      role === "Moderator" && "#DFA878" ||
      role === "Cloud Engineer" && "#FFCACC" ||
      role === "Human Resources" && "#9BCDD2" ||
      role === "Video Editor" && "#EF6262" ||
      role === "Animator" && "#F1C93B" ||
      role === "App Developer" && "#4A55A2" ||
      role === "Motion Graphics" && "#A2FF86" ||
      role === "Administrator" && "#898121"
    
    }
  })

  const thedata = {

    labels: [...roleNames],

    datasets: [

      {
        label: "Staffs",
        data: [...roleNames.map((role) => roleCounts[role])],
        backgroundColor: [...roleColours],
        type: 'doughnut',
        hoverOffset: 4,
        spacing: 0
      },

    ]
  
  };

  const theoptions = {
  
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
            tickLength: 17,
            tickColor: "transparent",
          },
  
          ticks: {
            display: false,
            stepSize: 5,
            font: {
                family: "'Poppins', sans-serif"
            },
          },
  
      },
  
      y: {

          border: {
            display: false,
          },
  
          ticks: {
            display: false,
            font: {
                family: "'Poppins', sans-serif"
            },
          },
  
          grid: {
              display: false,
              tickLength: 17,
              tickColor: "transparent",
          },
  
      }
  
    },
  
  };

  return (

    <div className="doughnut_chart">

      <div className="chart_header">

        <p className="chart_title">Employee Summary</p>

        <p className="total_staff">Total Staffs: {users.length}</p>

      </div>

      <Doughnut height="300" data={thedata} options={theoptions}></Doughnut>

      <div className="roles_for_pie">

        {rolesWithColours.map((role) =>

          <div className="role_for_pie_data" key={role.role}>
            <div className="roles_for_pie_colour" style={{backgroundColor: role.colour}}></div>
            <p className="roles_for_pie_txt">{role.role}</p>
          </div>

        )}

      </div>

    </div>

  )
}

export default HeadCountPieChart