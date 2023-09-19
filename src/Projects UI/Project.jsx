import horizontalDots from '../../public/images/horizontalDots';
import deleteIcon from "../../public/images/trashIcon";

const Project = ({ id, category, title, subtitle, startdate, enddate, bgcolourcode, txtcolourcode, status, theProjectID, openProjectOptions, clickedProjectIcon, clickedOnDeleteProject, users }) => {

  const slicedUsers = users.slice(0, 4);

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
            <div className="project_timeline project_start_date">Start: {startdate}</div>
            <div className="project_timeline project_end_date">End: {enddate}</div>
       </div>

       <div className="project_team_project_status">
            <div className="project_team">
               {slicedUsers.map((user) => (

                    <img key={user.id} className='project_team_avatar' src={user.photo} alt="" />
                
               ))}
               <p className="remaining_team_on_project">+2</p>
            </div>

            <p className="project_status" style={{backgroundColor: status === "pending" ? "#F0F0F0" : status === "In Progress" ? "#E5D283" : status === "Testing" ? "#FFC7EA" : status === "Completed" ? "#A6FF96" : "#F0F0F0"}}>
                {status}
            </p>

       </div>


       <div className="project_options_cont" style={{display: theProjectID === id && openProjectOptions ? "flex" : "none"}} onClick={() => clickedOnDeleteProject()}>
            <span className="delete_project_icon">{deleteIcon}</span>
            <p className="project_option" onClick={clickedOnDeleteProject}>Delete Project</p>
       </div>

    </div>

  )

}

export default Project