import horizontalDots from "../../public/images/horizontalDots"
import deleteIcon from "../../public/images/trashIcon";

const Ticket = ({ id, name, subject, status, priority, date, theTicketID, openTicketOptions, clickedTicketIcon, clickedOnDeleteTicket }) => {

  return (

    <div className="ticket_cont" id={id}>

      <div className="ticket_main">

        <div className="ticket_main_header">
          <div className="ticket_main_header_top">
            <p className="ticket_id">{id}</p>
            <p className="ticket_options" onClick={() => clickedTicketIcon(id)}>{horizontalDots}</p>
          </div>
          <p className="ticket_subject">{subject}</p>
        </div>

        <div className="ticket_main_body">

          <div className="ticket_info">
            <p className="ticket_info_title">Created On</p>
            <p className="ticket_info_txt">{date}</p>
          </div>

          <div className="ticket_info">
            <p className="ticket_info_title">Priority</p>
            <p className="ticket_info_txt">{priority}</p>
          </div>

          <div className="ticket_info">
            <p className="ticket_info_title">Status</p>
            <p className="ticket_info_txt">{status}</p>
          </div>

        </div>

      </div>

      <div className="ticket_options_cont" style={{display: theTicketID === id && openTicketOptions ? "flex" : "none"}} onClick={() => clickedOnDeleteTicket()}>
            <span className="delete_project_icon">{deleteIcon}</span>
            <p className="project_option" onClick={clickedOnDeleteTicket}>Delete Ticket</p>
       </div>
      
    </div>

  )

}

export default Ticket