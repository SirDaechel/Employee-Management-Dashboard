import React from 'react'

const PayrollMetricCard = ({ topText, icon ,figure ,arrow, percentage, percent }) => {

  return (

    <div className="metric_cont metric1">

        <div className="metric_cont_title">
            <p className="metric_cont_top_txt">{topText}</p>
            <span className="metric_cont_top_txt">{icon}</span>
        </div>

        <div className="metric_cont_bottom">
            <p className="metric_cont_spend">{figure}</p>
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

export default PayrollMetricCard