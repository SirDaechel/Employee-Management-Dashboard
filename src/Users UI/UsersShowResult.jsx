import { useState, useEffect } from "react"
import arrowdown from "../../public/images/arrowdown";
import actionsIcon from "../../public/images/actionsIcon";
import timeIcon from "../../public/images/timeIcon";
import trashIcon from "../../public/images/trashIcon";
import mailIcon from "../../public/images/mailIcon";
import restoreIcon from "../../public/images/restoreIcon";

const UserShowResult = ({ users, setUsers, archivedUsers, setArchivedUsers, currentUsers, usersPerPage, setUsersPerPage, showUsersPerPageDropdown, setShowUserPerPageDropdown, dropdownRef, actionsDropdownRef, deletedUsers, setDeletedUsers, checkedUsers, activeUserTab, setUsersAfterFilteringArchived, setUsersAfterFilteringDeleted, currentArchivedUsers, currentDeletedUsers, currentPage, setCurrentPage, pageNumbers }) => {

    const [showActions, setShowActions] = useState(false);
    const [showActionsError, setShowActionsError] = useState(false);


    const restoreSelectedUsers = () => {

        if(activeUserTab === 2) {

            const checkedArchivedUsers = currentArchivedUsers.filter((user) => user.checked);
            setUsers([...users, ...checkedArchivedUsers.map((user) => ({...user, checked: false}))]);

            //remove from archived users array
            const filteredFromArchivedUsers = archivedUsers.filter(user => !checkedArchivedUsers.includes(user));
            const setCheckedToFalse = filteredFromArchivedUsers.map((user) => ({...user, checked: false}));
            setArchivedUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);
  
            }

            setShowActions(false);

        } else if(activeUserTab === 3) {

            const checkedDeletedUsers = currentDeletedUsers.filter((user) => user.checked);
            setUsers([...users, ...checkedDeletedUsers.map((user) => ({...user, checked: false}))]);

            //remove from deleted users array
            const filteredFromArchivedUsers = deletedUsers.filter(user => !checkedDeletedUsers.includes(user));
            const setCheckedToFalse = filteredFromArchivedUsers.map((user) => ({...user, checked: false}));
            setDeletedUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);
  
            }

            setShowActions(false);
            
        };

    };

    const archiveSelectedUsers = () => {

        if(activeUserTab === 0) {
            
            //archive checked users
            const archived = currentUsers.filter((user) => user.checked);
            setArchivedUsers([...archivedUsers, ...archived.map((user) => ({...user, checked: false}))]);
    
            //remove archived users from users array
            const filterArchivedUsersFromUsers = users.filter(user => !archived.includes(user));
            setUsersAfterFilteringArchived(filterArchivedUsersFromUsers);
            const setCheckedToFalse = filterArchivedUsersFromUsers.map((user) => ({...user, checked: false}));
            setUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);

            }
    
            setShowActions(false);

        } else if(activeUserTab === 3) {

            //archive checked users
            const archived = currentDeletedUsers.filter((user) => user.checked);
            setArchivedUsers([...archivedUsers, ...archived.map((user) => ({...user, checked: false}))]);
    
            //remove archived users from users array
            const filterArchivedUsersFromUsers = deletedUsers.filter(user => !archived.includes(user));
            setUsersAfterFilteringArchived(filterArchivedUsersFromUsers);
            const setCheckedToFalse = filterArchivedUsersFromUsers.map((user) => ({...user, checked: false}));
            setDeletedUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);
  
            }
    
            setShowActions(false);
            
        }

    };

    const deleteSelectedUsers = () => {

        if(activeUserTab === 0) {

            //delete checked users
            const deleted = currentUsers.filter((user) => user.checked);
            setDeletedUsers([...deletedUsers, ...deleted.map((user) => ({...user, checked: false}))]);

            // remove deleted users from users array
            const filterDeletedUsersFromUsers = users.filter(user => !deleted.includes(user));
            setUsersAfterFilteringDeleted(filterDeletedUsersFromUsers);
            const setCheckedToFalse = filterDeletedUsersFromUsers.map((user) => ({...user, checked: false}));
            setUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);
    
            }

            setShowActions(false);


        } else if(activeUserTab === 2) {

            //delete checked users
            const deleted = currentArchivedUsers.filter((user) => user.checked);
            setDeletedUsers([...deletedUsers, ...deleted.map((user) => ({...user, checked: false}))]);

            // remove deleted users from users array
            const filterDeletedUsersFromUsers = archivedUsers.filter(user => !deleted.includes(user));
            setUsersAfterFilteringDeleted(filterDeletedUsersFromUsers);
            const setCheckedToFalse = filterDeletedUsersFromUsers.map((user) => ({...user, checked: false}));
            setArchivedUsers(setCheckedToFalse);

            if(currentPage === pageNumbers.length) {

              pageNumbers.pop();
              setCurrentPage(currentPage - 1);
    
            }

            setShowActions(false);

        }

    };

    //change the users per page
    const handleUsersPerPage = (innertext) => {

        setUsersPerPage(innertext)

        setShowUserPerPageDropdown(false)

    };


    useEffect(() => {

        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutsideDropdown);
        document.addEventListener('click', handleClickActionsDropdown);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutsideDropdown);
            document.removeEventListener('click', handleClickActionsDropdown);
        };

    }, []);

    //if click is outside users per page dropdown, hide dropdown
    const handleClickOutsideDropdown = (event) => {

        // Check if the click is outside the dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          // Close the dropdown
          setShowUserPerPageDropdown(false);
        }

    };

    //if click is outside actions dropdown, hide dropdown
    const handleClickActionsDropdown = (event) => {

        // Check if the click is outside the dropdown
        if (actionsDropdownRef.current && !actionsDropdownRef.current.contains(event.target)) {
          // Close the dropdown
          setShowActions(false);
        }

    };

    //show actions dropdown
    const showTakeActions = () => {

        //if checked users array has a length less than 2, then show actions error
        if(checkedUsers.length < 2) {
            setShowActionsError(true);
        } 
        //if it doesn't, then show actions dropdown
        else {
            setShowActions(!showActions);
        }

    };

    //if checked users array has a length greater or equal to 2, then hide actions error
    useEffect(() => {

        const noCheckedUserToFalse = () => checkedUsers.length >= 2 && setShowActionsError(false);

        noCheckedUserToFalse();

    }, [checkedUsers]);
    
  return (

    <div className="showing_results_and_filter">

        <p className="showing_results_txt">Showing {activeUserTab === 0 && !users.length ? 0 : activeUserTab === 2 && !archivedUsers.length ? 0 : activeUserTab === 3 && !deletedUsers.length ? 0 : usersPerPage}-{activeUserTab === 0 ? users.length : activeUserTab === 2 ? archivedUsers.length : activeUserTab === 3 ? deletedUsers.length : users.length} result</p>

        <div ref={actionsDropdownRef} className="actions_users_per_page">

            <div className="actions_main">

                <div className="actions_btn">
                    
                    <div className="actions_if_error">

                        <p className="actions_error" style={{display: showActionsError ? "block" : "none"}}>
                            Please check more than one user
                        </p>

                        <button className="actions" onClick={() => showTakeActions()}>
                            {actionsIcon}
                            <p>Take actions</p>
                        </button>

                    </div>

                    <div className="actions_dropdown" style={{display: showActions ? "block" : "none"}}>

                        <ul className="actions_dropdown_main">

                          <li className="actions_dropdown_item" style={{display: activeUserTab === 2 || activeUserTab === 3 ? "flex" : "none"}} onClick={restoreSelectedUsers}>
                            <div className="actions_icon restore_icon">{restoreIcon}</div>
                            <p>Restore all</p>
                          </li>

                          <li className="actions_dropdown_item" style={{display: activeUserTab === 2 ? "none" : "flex"}} onClick={archiveSelectedUsers}>
                            <div className="actions_icon">{timeIcon}</div>
                            <p>Archive all</p>
                          </li>

                          <li className="actions_dropdown_item" style={{display: activeUserTab === 3 ? "none" : "flex"}} onClick={deleteSelectedUsers}>
                            <div className="actions_icon">{trashIcon}</div>
                            <p>Delete all</p>
                          </li>

                          <li className="actions_dropdown_item" style={{display: activeUserTab === 2 || activeUserTab === 3 ? "none" : "flex"}}>
                            <div className="actions_icon">{mailIcon}</div>
                            <p>Send Mail</p>
                          </li>

                        </ul>

                    </div>

                </div>

            </div>

            <div className="items_per_page">

                <p className="items_per_page_txt">Users Per Page</p>

                <div ref={dropdownRef} className="select_items_per_page">

                    <div className="filter_results_number" onClick={() => setShowUserPerPageDropdown(!showUsersPerPageDropdown)}>
                        <p className="result_number">{usersPerPage}</p>
                        <div className="arrow_down">{arrowdown}</div>
                    </div>

                    <ul className="options" style={{display: showUsersPerPageDropdown ? "flex" : "none"}}>

                        <li className="dropdown" onClick={(e) => handleUsersPerPage(e.target.innerText)}>
                            <p className="dropdown_number">10</p>
                        </li>

                        <li className="dropdown" onClick={(e) => handleUsersPerPage(e.target.innerText)}>
                            <p className="dropdown_number">15</p>
                        </li>

                        <li className="dropdown" onClick={(e) => handleUsersPerPage(e.target.innerText)}>
                            <p className="dropdown_number">20</p>
                        </li>

                        <li className="dropdown" onClick={(e) => handleUsersPerPage(e.target.innerText)}>
                            <p className="dropdown_number">25</p>
                        </li>

                        <li className="dropdown" onClick={(e) => handleUsersPerPage(e.target.innerText)}>
                            <p className="dropdown_number">30</p>
                        </li>

                    </ul>

                </div>

            </div>

        </div>


    </div>

  )
}

export default UserShowResult