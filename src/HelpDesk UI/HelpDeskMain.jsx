import { useState } from 'react'
import SearchBarGlobal from '../SearchBarGlobal'
import Button from '../Projects UI/Button'
import HelpDeskTabs from './HelpDeskTabs'
import HelpDeskBody from './HelpDeskBody'
import plusIcon from '../../public/images/plusIcon';

const HelpDeskMain = ({ tickets, setTicket, setFullPageOverlay }) => {

  const [searchTicket, setSearchTicket] = useState('');
  const [activeHelpDeskTab, setActiveHelpDeskTab] = useState(0);
  const [pendingDeleteTicket, setPendingDeleteTicket] = useState(null);
  const [clickedDeleteTicket, setClickedDeleteTicket] = useState(false);
  const [openTicketOptions, setOpenTicketOptions] = useState(false);

  //get number of tickets with a status of open
  const getOpenedTickets = tickets.filter((ticket) => ticket.status === "Opened");

  //get number of tickets with a status of in progress
  const getInProgressTickets = tickets.filter((ticket) => ticket.status === "In Progress");

  //get number of tickets with a status of closed
  const getClosedTickets = tickets.filter((ticket) => ticket.status === "Closed");

  //filtered all tickets array based on search box input
  const filteredSearch = tickets.filter((ticket) => (ticket.subject.toLowerCase()).includes(searchTicket.toLowerCase()));

  //filtered opened tickets array based on search box input
  const filteredOpenedSearch = getOpenedTickets.filter((ticket) => (ticket.subject.toLowerCase()).includes(searchTicket.toLowerCase()));

  //filtered in progress projects array based on search box input
  const filteredInProgressSearch = getInProgressTickets.filter((ticket) => (ticket.subject.toLowerCase()).includes(searchTicket.toLowerCase()));

  //filtered testing projects array based on search box input
  const filteredClosedSearch = getClosedTickets.filter((ticket) => (ticket.subject.toLowerCase()).includes(searchTicket.toLowerCase()));

  //change active class tab
  const handleHelpDeskTabChange = (tabIndex) => {

    setActiveHelpDeskTab(tabIndex);

  }

  //if delete a ticked button is clicked
  const clickedOnDeleteTicket = (ticket) => {

    setClickedDeleteTicket(true);
    setFullPageOverlay(true);
    setPendingDeleteTicket(ticket);
    
  };

  //if confirm delete project button is clicked
  const confirmDeleteProject = () => {

      if(pendingDeleteTicket) {
        setTicket(tickets.filter((ticket) => ticket.id !== pendingDeleteTicket.id));
      }

      setPendingDeleteTicket(null);
      setFullPageOverlay(false);
      setClickedDeleteTicket(false);
      setOpenTicketOptions(false);
      setSearchTicket('');

  }

  //if cancel delete user button is clicked
  const cancelDeleteProject = () => {

    setPendingDeleteTicket(null);
    setFullPageOverlay(false);
    setClickedDeleteTicket(false);

  };

  return (

    <section>

      <div className="confirm_delete_modal" style={{display: clickedDeleteTicket ? "block" : "none"}}>
        <div className="confirm_delete_cont">
          <p className="confirm_delete_txt">Delete Ticket?</p>
          <div className="yes_cancel_delete">
            <button className="delete_btn cancel_delete" onClick={() => cancelDeleteProject()}>Cancel</button>
            <button className="delete_btn yes_delete" onClick={() => confirmDeleteProject()}>Confirm</button>
          </div>
        </div>
      </div>

      <div className="helpdesk_top">

        <SearchBarGlobal 
          searchBar={searchTicket}
          setSearchBar={setSearchTicket}
          placeholder={"Search tickets"}
        />

        {/* <Button 
          label={"Create Ticket"}
          icon={<span className='plus_icon'>{plusIcon}</span>}
          backgroundColour={{backgroundColor: "#6C63FF", color: "#FFFFFF"}}
          // linkto={"createticket"}
        /> */}

      </div>

      <div className="helpdesk_middle">

        <HelpDeskTabs 
          tickets={tickets}
          activeHelpDeskTab={activeHelpDeskTab}
          handleHelpDeskTabChange={handleHelpDeskTabChange}
          getOpenedTickets={getOpenedTickets}
          getInProgressTickets={getInProgressTickets}
          getClosedTickets={getClosedTickets}
        />

        <HelpDeskBody 
          filteredSearch={filteredSearch}
          activeHelpDeskTab={activeHelpDeskTab}
          filteredOpenedSearch={filteredOpenedSearch}
          filteredInProgressSearch={filteredInProgressSearch}
          filteredClosedSearch={filteredClosedSearch}
          clickedOnDeleteTicket={clickedOnDeleteTicket}
          openTicketOptions={openTicketOptions}
          setOpenTicketOptions={setOpenTicketOptions}
          tickets={tickets}
        />

      </div>

    </section>

  )

}

export default HelpDeskMain