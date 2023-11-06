import moneyIcon from "../../public/images/moneyIcon";

const ProjectsMetricNo = ({ topText, spend, percentage, arrow, percent }) => {

  return (

    <div className="metric_cont">

        <div className="metric_cont_title">
            <p className="metric_cont_top_txt">{topText}</p>
            <span className="metric_cont_top_txt">{moneyIcon}</span>
        </div>

        <div className="metric_cont_bottom">
            <p className="metric_cont_spend">{spend}</p>
            <div className="metric_cont_percentage">
                <div className="percentage_txt_arrow">
                    <span className="percentage_arrow" style={{color: percent}}>{arrow}</span>
                    <p className="percentage_txt" style={{color: percent}}>{percentage}</p>
                </div>
                <p className="percentage_txt_month"> vs previous month</p>
            </div>
        </div>

    </div>

  )

}

export default ProjectsMetricNo