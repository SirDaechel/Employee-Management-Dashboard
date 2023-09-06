import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from "chart.js"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const BarChart = () => {

  const data = {

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Profit",
        data: [24, 19, 13, 18, 28, 21, 34, 17, 36, 9, 18, 11],
        backgroundColor: "#6b63ffc2",
        borderRadius: 5,
        barPercentage: .8,
        barThickness: 22,
        minBarLength: 7,
        stack: 'combined',
      },

      {
        label: "Expense",
        data: [14, 9, 15, 15, 9, 11, 20, 22, 13, 31, 18, 20],
        backgroundColor: "#F7B84B",
        borderColor: "#F7B84B",
        borderRadius: 5,
        stack: 'combined',
        type: 'line',
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        pointRadius: 3, 
        tension: 0,
      }
    ]

  };

  const options = {

    interaction: {
      intersect: false,
      mode: 'index',
    },
  
    plugins: {
      legend: false,
      tooltip: true,
      intersect: true
    },

    responsive: true,

    maintainAspectRatio: true,

    aspectRatio: 2,

    // indexAxis: "y",

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
                font: {
                    family: "'Poppins', sans-serif"
                },
            },

        },

        y: {

            borderDash: [3],

            ticks: {
                callback: (value) => value + "k",
                stepSize: 5,

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

    <div style={{width: "45rem", height: "33rem", background: "#FFF", borderRadius: "3px", padding: "1rem"}}>

        <div className="chart_header">

            <p className="chart_title">Profit against Expense</p>

            <div className="time_frame">
                <p className="time_frame_txt all_time">ALL</p>
                <p className="time_frame_txt one_month">1M</p>
                <p className="time_frame_txt six_months">6M</p>
                <p className="time_frame_txt one_year">1Y</p>
            </div>

        </div>

        <Bar data={data} options={options}></Bar>

        <div className="chart_colour_labels">

            <div className="profit_colour_main">
                <div className="profit_label_colour"></div>
                <div className="profit_label_txt">Profit</div>
            </div>

            <div className="expense_colour_main">
                <div className="expense_label_colour"></div>
                <div className="expense_label_txt">Expense</div>
            </div>

        </div>

    </div>

  )
  
}

export default BarChart