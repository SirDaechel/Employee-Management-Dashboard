import horizontalDots from '../../public/images/horizontalDots';

const Project = ({ id, category, title, subtitle, startdate, enddate, bgcolourcode, txtcolourcode, status, theProjectID, openProjectOptions, clickedProjectIcon }) => {

  return (

    <div className="project_cont" id={id}>

       <div className="project_top">
            <p className="project_category" style={{backgroundColor: bgcolourcode, color: txtcolourcode}}>{category}</p>
            <div className="project_options_icon" onClick={() => clickedProjectIcon(id)}>{horizontalDots}</div>
       </div>

        <div className="project_title_subtitle">
            <p className="project_title">{title}</p>
            <p className="project_subtitle">{subtitle}</p>
        </div>

       <div className="project_timeline_cont">
            <div className="project_timeline project_start_date">{startdate}</div>
            <div className="project_timeline project_end_date">{enddate}</div>
       </div>

       <div className="project_team_project_status">

            <div className="project_team">
                <img className='project_team_avatar' src="public\images\avatar (1).png" alt="" />
                <img className='project_team_avatar' src="public\images\avatar (2).png" alt="" />
                <img className='project_team_avatar' src="public\images\avatar (3).png" alt="" />
                <img className='project_team_avatar' src="public\images\avatar (4).png" alt="" />
                <p className="remaining_team_on_project">+2</p>
            </div>

            <p className="project_status" style={{backgroundColor: status === "pending" ? "#F0F0F0" : status === "In Progress" ? "#E5D283" : status === "Testing" ? "#FFC7EA" : status === "Completed" ? "#A6FF96" : "#F0F0F0"}}>
                {status}
            </p>

       </div>


       <div className="project_options_cont" style={{display: theProjectID === id && openProjectOptions ? "flex" : "none"}}>
            <p className="project_options pending_txt">Move to pending</p>
            <p className="project_options in_progress_txt">Move to in progress</p>
            <p className="project_options testing_txt">Move to Testing</p>
            <p className="project_options completed_txt">Move to completed</p>
       </div>

    </div>

  )

}

export default Project