const ProjectTabs = ({ tickets, activeHelpDeskTab, handleHelpDeskTabChange, getOpenedTickets, getInProgressTickets, getClosedTickets }) => {

  return (

    <div className="project_tabs">

        <div className={`tabchange ${activeHelpDeskTab === 0 ? "active_user_tab" : ""}`} onClick={() => handleHelpDeskTabChange(0)}>
            <p className="tabchange_txt">Tickets</p>
            <span className={`tab_number ${activeHelpDeskTab === 0 ? "active_tabNo" : ""}`}>{tickets.length}</span>
        </div>

        <div className={`tabchange ${activeHelpDeskTab === 1 ? "active_user_tab" : ""}`} onClick={() => handleHelpDeskTabChange(1)}>
            <p className="tabchange_txt">Opened</p>
            <span className={`tab_number ${activeHelpDeskTab === 1 ? "active_tabNo" : ""}`}>{getOpenedTickets.length}</span>
        </div>

        <div className={`tabchange ${activeHelpDeskTab === 2 ? "active_user_tab" : ""}`} onClick={() => handleHelpDeskTabChange(2)}>
            <p className="tabchange_txt">In Progess</p>
            <span className={`tab_number ${activeHelpDeskTab === 2 ? "active_tabNo" : ""}`}>{getInProgressTickets.length}</span>
        </div>

        <div className={`tabchange ${activeHelpDeskTab === 3 ? "active_user_tab" : ""}`} onClick={() => handleHelpDeskTabChange(3)}>
            <p className="tabchange_txt">Closed</p>
            <span className={`tab_number ${activeHelpDeskTab === 3 ? "active_tabNo" : ""}`}>{getClosedTickets.length}</span>
        </div>

    </div>

  )

}

export default ProjectTabs