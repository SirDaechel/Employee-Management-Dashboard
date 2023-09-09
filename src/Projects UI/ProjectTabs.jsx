import React from 'react'

const ProjectTabs = ({ projects, activeProjectTab, handleProjectTabChange, getPendingProjects, getInProgressProjects, getTestingProjects, getCompletedProjects }) => {

  return (

    <div className="project_tabs">

        <div className={`tabchange ${activeProjectTab === 0 ? "active_user_tab" : ""}`} onClick={() => handleProjectTabChange(0)}>
            <p className="tabchange_txt">Projects</p>
            <span className={`tab_number ${activeProjectTab === 0 ? "active_tabNo" : ""}`}>{projects.length}</span>
        </div>

        <div className={`tabchange ${activeProjectTab === 1 ? "active_user_tab" : ""}`} onClick={() => handleProjectTabChange(1)}>
            <p className="tabchange_txt">Pending</p>
            <span className={`tab_number ${activeProjectTab === 1 ? "active_tabNo" : ""}`}>{getPendingProjects.length}</span>
        </div>

        <div className={`tabchange ${activeProjectTab === 2 ? "active_user_tab" : ""}`} onClick={() => handleProjectTabChange(2)}>
            <p className="tabchange_txt">In Progess</p>
            <span className={`tab_number ${activeProjectTab === 2 ? "active_tabNo" : ""}`}>{getInProgressProjects.length}</span>
        </div>

        <div className={`tabchange ${activeProjectTab === 3 ? "active_user_tab" : ""}`} onClick={() => handleProjectTabChange(3)}>
            <p className="tabchange_txt">Testing</p>
            <span className={`tab_number ${activeProjectTab === 3 ? "active_tabNo" : ""}`}>{getTestingProjects.length}</span>
        </div>

        <div className={`tabchange ${activeProjectTab === 4 ? "active_user_tab" : ""}`} onClick={() => handleProjectTabChange(4)}>
            <p className="tabchange_txt">Completed</p>
            <span className={`tab_number ${activeProjectTab === 4 ? "active_tabNo" : ""}`}>{getCompletedProjects.length}</span>
        </div>

    </div>

  )

}

export default ProjectTabs