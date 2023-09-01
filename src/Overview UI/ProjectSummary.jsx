const ProjectSummary = () => {

  const overallprojects = 135;
  const overallprojectsCompleted = 85;

  return (

    <div className="project_summary">

        <h4 className="project_summary_title">Projects Information</h4>

        <div className="project_numbers">
            <div className="all_projects_completed">{overallprojectsCompleted}</div>
            <div className="all_projects_line">/</div>
            <div className="all_projects">{overallprojects} <span className="all_projects_txt">Projects completed</span></div>
        </div>

        <div className="projects_columns">

            <div className="project_col project_col1">
                <div className="project_col_no">{overallprojects - overallprojectsCompleted}</div>
                <div className="project_col_txt">Projects <br/> left</div>
            </div>

            <div className="project_col project_col2">
                <div className="project_col_no">23</div>
                <div className="project_col_txt">Active <br/> projects</div>
            </div>

            <div className="project_col project_col3">
                <div className="project_col_no">10</div>
                <div className="project_col_txt">Pending <br/> projects</div>
            </div>

            <div className="project_col project_col4">
                <div className="project_col_no">17</div>
                <div className="project_col_txt">Completed <br/> projects</div>
            </div>

        </div>
    
    </div>

  )

}

export default ProjectSummary