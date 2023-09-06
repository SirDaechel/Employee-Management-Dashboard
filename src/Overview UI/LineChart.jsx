import { Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const LineChart = () => {

    const data = {

        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Profit",
                data: [10, 16, 13, 18, 15, 21, 12],
                backGroungColor: "transparent",
                borderColor: "#6C63FF",
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                pointRadius: 3, 
                tension: 0,
            }
        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: true,

        aspectRatio: 1.5,

        interaction: {
          intersect: false,
          mode: 'index',
        },

        plugins: {
            legend: false,
            tooltip: true,
            intersect: true
        },

        scales: {

            x: {

                beginAtZero: true,

                grid: {
                    display: false,
                    tickLength: 22,
                    tickColor: "transparent",
                },

                ticks: {
                    font: {
                        family: "'Poppins', sans-serif"
                    },
                    
                },

                border: {
                    display: false,
                    dash: [3]
                },

            },

            y: {

                beginAtZero: true,

                grid: {
                    tickLength: 15,
                    tickColor: "transparent"
                },

                ticks: {
                    stepSize: 6,
                    callback: (value) => value + "k",
                    font: {
                        family: "'Poppins', sans-serif"
                    },
                },

                border: {
                    display: false,
                    dash: [3]
                }
            }

        }
        
    }

  return (

    <div style={{width: "23rem", height: "16rem", background: "#FFF", borderRadius: "8px", padding: "1rem"}}>
        <Line data={data} options={options}></Line>
    </div>

  )

}

export default LineChart