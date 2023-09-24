import { useState } from "react";
import Ticket from './Ticket'

const HelpDeskBody = ({ filteredSearch, activeHelpDeskTab, filteredOpenedSearch, filteredInProgressSearch, filteredClosedSearch, clickedOnDeleteTicket, openTicketOptions, setOpenTicketOptions, tickets }) => {

  const [theTicketID, setTheTicketID] = useState(null);

  //toggle project options
  const clickedTicketIcon = (ID) => {

    if(theTicketID === ID) {

      // If the clicked ticket is the same as the stored ticketID, toggle the openOptions state
      setOpenTicketOptions(!openTicketOptions);

    } else {

      // If a different ticket is clicked, update the ticketID and show options
      setTheTicketID(ID);
      setOpenTicketOptions(true);

    }

  };
  
  return (

    <div className="tickets">

        {(activeHelpDeskTab === 0 ? filteredSearch : activeHelpDeskTab === 1 ? filteredOpenedSearch : activeHelpDeskTab === 2 ? filteredInProgressSearch : activeHelpDeskTab === 3 ? filteredClosedSearch : "No data to display").map((ticket) => (

            <Ticket
                key={ticket.id}
                id={ticket.id}
                name={ticket.name}
                subject={(ticket.subject).length > 25 ? (ticket.subject).slice(0, 27) + '...' : ticket.subject}
                status={ticket.status}
                priority={ticket.priority}
                date={ticket.createddate}
                theTicketID={theTicketID}
                openTicketOptions={openTicketOptions}
                clickedTicketIcon={clickedTicketIcon}
                clickedOnDeleteTicket={() => clickedOnDeleteTicket(ticket)}
            />

        ))}

    </div>

  )
}

export default HelpDeskBody