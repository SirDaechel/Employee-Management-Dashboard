import { useState, useEffect, useRef } from "react"
import UsersUtilities from "./UsersUtilities";
import UsersTable from "./UsersTable";
import UserShowResult from "./UsersShowResult";
import UsersPagination from "./UsersPagination";
import AddNewUser from "./AddNewUser"


const UsersMain = ({ users, setUsers, currentUsers, usersPerPage, totalUsers, paginate, archivedUsers, setArchivedUsers, setUsersPerPage, deletedUsers, setDeletedUsers, currentArchivedUsers, currentDeletedUsers, totalArchivedUsers, totalDeletedUsers, currentPage, setCurrentPage, paginateNumRef }) => {

  const USER_REGEX = /^[a-zA-Z][a-zA-Z-_]{2,23}$/;
  const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const AGE_WAGE__PHONE_WAGE_REGEX = /^[0-9]{2,23}$/;
  //   const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



  //------------------------------------- USE STATES FOR INPUT FIELDS --------------------------------------//

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);
  
  const [eMail, seteMail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [eMailFocus, setEmailFocus] = useState(false);
  
  const [userRole, setUserRole] = useState("");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [validRole, setValidRole] = useState(false);

  const [wage, setWage] = useState("");
  const [validWage, setValidWage] = useState(false);
  const [wageFocus, setWageFocus] = useState(false);

  const [age, setAge] = useState("");
  const [validAge, setValidAge] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);

  const [phoneNo, setPhoneNo] = useState("");
  const [validPhoneNo, setValidPhoneNo] = useState(false);
  const [phoneNoFocus, setPhoneNoFocus] = useState(false);

  const [workingHours, setWorkingHours] = useState("");
  const [validWorkingHours, setValidWorkingHours] = useState(false);
  const [workingHoursFocus, setWorkingHoursFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  
  const [search, setSearch] = useState("");
  const [showUsersPerPageDropdown, setShowUserPerPageDropdown] = useState(false);
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [editAUser, setEditAUser] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [clickedDeleteUser, setClickedDeleteUser] = useState(false);
  const [pendingDeleteUser, setPendingDeleteUser] = useState(null);
  const [activeUserTab, setActiveUserTab] = useState(0);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [usersAfterFilteringArchived, setUsersAfterFilteringArchived] = useState([]);
  const [usersAfterFilteringDeleted, setUsersAfterFilteringDeleted] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const firstNameRef = useRef();
  const errRef = useRef();
  const dropdownRef = useRef(null);
  const actionsDropdownRef = useRef(null);




  //------------------------------------- USE EFFECTS FOR INPUT FIELDS --------------------------------------//

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  

  //validate input fields

  //validate firstname
  useEffect(() => {
    const resultFirstName = USER_REGEX.test(firstName);
    setValidFirstName(resultFirstName);
  }, [firstName]);

  //validate lastname
  useEffect(() => {
    const resultLastName = USER_REGEX.test(lastName);
    setValidLastName(resultLastName);
  }, [lastName]);

  //validate email
  useEffect(() => {
    const resultEmailName = EMAIL_REGEX.test(eMail);
    setValidEmail(resultEmailName);
  }, [eMail]);

  //validate username
  useEffect(() => {
    const resultUserName = USERNAME_REGEX.test(userName);
    setValidUserName(resultUserName);
  }, [userName]);

  //validate role
  useEffect(() => {
    const resultUserRole = userRole ? true : false;
    setValidRole(resultUserRole);
  }, [userRole]);

  //validate wage
  useEffect(() => {
    const resultWage = AGE_WAGE__PHONE_WAGE_REGEX.test(wage);
    setValidWage(resultWage);
  }, [wage]);

  //validate age
  useEffect(() => {
    const resultAge = AGE_WAGE__PHONE_WAGE_REGEX.test(age);
    setValidAge(resultAge);
  }, [age]);

  //validate phone number
  useEffect(() => {
    const resultPhoneNo = AGE_WAGE__PHONE_WAGE_REGEX.test(phoneNo);
    setValidPhoneNo(resultPhoneNo);
  }, [phoneNo]);

  //validate working hours
  useEffect(() => {
    const resultWorkingHours = AGE_WAGE__PHONE_WAGE_REGEX.test(workingHours);
    setValidWorkingHours(resultWorkingHours);
  }, [workingHours]);

  //clear error message on states or input change
  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, eMail, userName, wage, age, phoneNo, workingHours]);

  //validate if the add user or edit user submit button should be disabled or not
  useEffect(() => {
    setIsSubmitDisabled(!validFirstName || !validLastName || !validUserName || !validEmail || !validWage || !validAge || !validPhoneNo || !validWorkingHours || !validRole ? true : false);
  }, [validFirstName, validLastName, validUserName, validEmail, validWage, validAge, validPhoneNo, validWorkingHours, validRole]);


  //--------------------- SETTING CHECK USERS STATE DEPENDING ON THE ACTIVE USER TAB ----------------//

  //check if any user is checked
  useEffect(() => {
    
    if(activeUserTab === 0) {

      let ifAnyUserChecked = users.filter((user) => user.checked)
      setCheckedUsers(ifAnyUserChecked);

    } else {
      setCheckedUsers([]);
    }
    
  }, [users, activeUserTab]);

  //check if any archived user is checked
  useEffect(() => {

    if(activeUserTab === 2) {

      let ifAnyUserChecked = archivedUsers.filter((user) => user.checked)
      setCheckedUsers(ifAnyUserChecked);

    } else {
      setCheckedUsers([]);
    }
    
  }, [archivedUsers, activeUserTab]);

  //check if any deleted user is checked
  useEffect(() => {

    if(activeUserTab === 3) {

      let ifAnyUserChecked = deletedUsers.filter((user) => user.checked)
      setCheckedUsers(ifAnyUserChecked);

    } else {
      setCheckedUsers([]);
    }
    
  }, [deletedUsers, activeUserTab]);

  //---------------------  HANDLE CHECKBOXES FOR MAIN USERS -------------------------//

  //handle select all users
  const handleSelectAll = (isChecked) => {
    const selectAllUsers = users.map(user => ({...user, checked: isChecked}));
    setUsers(selectAllUsers);
  };

  // handle select individual users
  const handleIndividualUser = (ID) => {
    const selectIndividualUser = users.map(user => user.id === ID ? {...user, checked: !user.checked} : user);
    setUsers(selectIndividualUser);
  };

  //calculate whether the "select all" checkbox should be checked or not
  const isSelectAllChecked = users.every((user) => user.checked);


  //---------------------  HANDLE CHECKBOXES FOR ARCHIVED USERS -------------------------//


  //handle select all  for archived users
  const handleSelectAllArchived = (isChecked) => {
    const selectAllUsers = archivedUsers.map(user => ({...user, checked: isChecked}));
    setArchivedUsers(selectAllUsers);
  };

  
  // handle select individual archived users
  const handleIndividualArchivedUser = (ID) => {
    const selectIndividualUser = archivedUsers.map(user => user.id === ID ? {...user, checked: !user.checked} : user);
    setArchivedUsers(selectIndividualUser);
  };

  //calculate whether the "select all" checkbox should be checked or not for archived all users
  const isSelectAllCheckedForArchivedAllUsers = archivedUsers.every((user) => user.checked);


  //---------------------  HANDLE CHECKBOXES FOR DELETED USERS -------------------------//

  //handle select all  for archived users
  const handleSelectAllDeleted = (isChecked) => {
    const selectAllUsers = deletedUsers.map(user => ({...user, checked: isChecked}));
    setDeletedUsers(selectAllUsers);
  };

  
  // handle select individual archived users
  const handleIndividualDeletedUser = (ID) => {
    const selectIndividualUser = deletedUsers.map(user => user.id === ID ? {...user, checked: !user.checked} : user);
    setDeletedUsers(selectIndividualUser);
  };

  //calculate whether the "select all" checkbox should be checked or not for archived all users
  const isSelectAllCheckedForDeletedAllUsers = deletedUsers.every((user) => user.checked);

  //edit a user
  const editUser = (ID) => {

    const editedThisUser = activeUserTab === 0 && currentUsers.filter((user) => user.id === ID) || activeUserTab === 2 && currentArchivedUsers.filter((user) => user.id === ID) || activeUserTab === 3 && currentDeletedUsers.filter((user) => user.id === ID);
    setShowOverlay(true);
    setOpenAddUserModal(true);
    setEditAUser(true);
    setFirstName(editedThisUser.map((user) => user.firstname));
    setLastName(editedThisUser.map((user) => user.lastname));
    setUserName(editedThisUser.map((user) => user.username));
    seteMail(editedThisUser.map((user) => user.email));
    setUserRole(editedThisUser.map((user) => user.role));
    setWage(editedThisUser.map((user) => user.wage));
    setAge(editedThisUser.map((user) => user.age));
    setPhoneNo(editedThisUser.map((user) => user.phone));
    setWorkingHours(editedThisUser.map((user) => user.workinghours));

  };

  //close add user or edit user modal
  const closeUserModal = () => {

    setFirstName("");
    setLastName("");
    setUserName("");
    seteMail("");
    setUserRole("Assign Role");
    setWage("");
    setAge("");
    setPhoneNo("");
    setWorkingHours("");
    setOpenAddUserModal(false);
    setShowOverlay(false);
    setShowRoleDropdown(false);
    setEditAUser(false);
    setShowUserOptions(false);

  };

  //if delete a user button is clicked
  const clickedOnDeleteUser = (user) => {

    setClickedDeleteUser(true);
    setShowOverlay(true);
    setPendingDeleteUser(user);

  };

  //if confirm delete user button is clicked
  const confirmDeleteUser = () => {

    if(activeUserTab === 0) {

      if(pendingDeleteUser) {
        setUsers(users.filter((user) => user.id !== pendingDeleteUser.id));
        setDeletedUsers([...deletedUsers, pendingDeleteUser]);
      }

      if(currentPage === pageNumbers.length && currentUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }
      
      setPendingDeleteUser(null);
      setShowOverlay(false);
      setClickedDeleteUser(false);
      setShowUserOptions(false);

    } else if(activeUserTab === 2) {

      if(pendingDeleteUser) {
        setArchivedUsers(archivedUsers.filter((user) => user.id !== pendingDeleteUser.id));
        setDeletedUsers([...deletedUsers, pendingDeleteUser]);
      }

      if(currentPage === pageNumbers.length && currentArchivedUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }
      
      setPendingDeleteUser(null);
      setShowOverlay(false);
      setClickedDeleteUser(false);
      setShowUserOptions(false);

    }

    
  };
  
  //if cancel delete user button is clicked
  const cancelDeleteUser = () => {

    setPendingDeleteUser(null);
    setShowOverlay(false);
    setClickedDeleteUser(false);

  };

  //archive a user
  const archiveAUser = (theUser) => {

    if(activeUserTab === 0) {

      setUsers(users.filter((user) => user.id !== theUser.id));
      setArchivedUsers([...archivedUsers, theUser]);

      if(currentPage === pageNumbers.length && currentUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }

      setShowUserOptions(false);

    } else if(activeUserTab === 3) {

      setDeletedUsers(deletedUsers.filter((user) => user.id !== theUser.id));
      setArchivedUsers([...archivedUsers, theUser]);

      if(currentPage === pageNumbers.length && currentDeletedUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }

      setShowUserOptions(false);

    }

  };

  //restore a user
  const restoreAUser = (theUser) => {

    if(activeUserTab === 2) {

      setArchivedUsers(archivedUsers.filter((user) => user.id !== theUser.id));
      setUsers([...users, theUser]);

      if(currentPage === pageNumbers.length && currentArchivedUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }

      setShowUserOptions(false);

    } else if(activeUserTab === 3) {

      setDeletedUsers(deletedUsers.filter((user) => user.id !== theUser.id));
      setUsers([...users, theUser]);

      if(currentPage === pageNumbers.length && currentDeletedUsers.length <= 1) {

        pageNumbers.pop();
        setCurrentPage(currentPage - 1);

      }

      setShowUserOptions(false);

    }

  };

  //change active class tab
  const handleUserTabChange = (tabIndex) => {

    setCurrentPage(1);

    setActiveUserTab(tabIndex);

    //if tabindex is "all users", set the checked users in both archived and deleted users array state to false
    if(tabIndex === 0) {

      setArchivedUsers(archivedUsers.map((user) => ({...user, checked: false})));

      setDeletedUsers(deletedUsers.map((user) => ({...user, checked: false})));

    }

    //if tabindex is "archived users", set the checked users in both all users and deleted users array state to false
    if(tabIndex === 2 && usersAfterFilteringArchived.length) {

      setUsers(users.map((user) => ({...user, checked: false})));

      setDeletedUsers(deletedUsers.map((user) => ({...user, checked: false})));

    } else {

      const ifAnyObjectCheckedInUsers = users.find((user) => user.checked);

      if(ifAnyObjectCheckedInUsers) {
        setUsers(users.map((user) => ({...user, checked:false})))
      }

    }

    //if tabindex is "deleted users", set the checked users in both all users and archived users array state to false
    if(tabIndex === 3 && usersAfterFilteringDeleted.length) {

      setUsers(users.map((user) => ({...user, checked: false})));

      setArchivedUsers(archivedUsers.map((user) => ({...user, checked: false})));

    } else {

      const ifAnyObjectCheckedInUsers = users.find((user) => user.checked);

      if(ifAnyObjectCheckedInUsers) {
        setUsers(users.map((user) => ({...user, checked:false})))
      }

    }

  }


  //----------------------------- SET PAGINATION ACCORDING TO THE OPENED TAB -----------------------------//

  const pageNumbers = [];

  if(activeUserTab === 0) {
    
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    
  } else if(activeUserTab === 2) {

    for(let i = 1; i <= Math.ceil(totalArchivedUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    
  } else if(activeUserTab === 3) {

    for(let i = 1; i <= Math.ceil(totalDeletedUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    
  }



  return (

    <section>

      {/* confirm delete */}

      <div className="confirm_delete_modal" style={{display: clickedDeleteUser ? "block" : "none"}}>
        <div className="confirm_delete_cont">
            <p className="confirm_delete_txt">Move user to recycle bin?</p>
            <div className="yes_cancel_delete">
                <button className="delete_btn cancel_delete" onClick={() => cancelDeleteUser()}>Cancel</button>
                <button className="delete_btn yes_delete" onClick={() => confirmDeleteUser()}>Confirm</button>
            </div>
        </div>
      </div>

        <div className="add_user_modal_overlay" style={{display: showOverlay ? "block" : "none"}}></div>

        {/* <p className="breadcrumb">Home / <span className='order_breadcrumb_text'>Users</span></p> */}

        {/* <TopNav /> */}

        <AddNewUser
          users={users}
          setUsers={setUsers}
          openAddUserModal={openAddUserModal}
          setOpenAddUserModal={setOpenAddUserModal}
          setShowOverlay={setShowOverlay}
          editAUser={editAUser}
          setUserRole={setUserRole}
          showRoleDropdown={showRoleDropdown}
          setShowRoleDropdown={setShowRoleDropdown}
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          eMail={eMail}
          userRole={userRole}
          wage={wage}
          age={age}
          phoneNo={phoneNo}
          workingHours={workingHours}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setUserName={setUserName}
          seteMail={seteMail}
          setWage={setWage}
          setAge={setAge}
          setPhoneNo={setPhoneNo}
          setWorkingHours={setWorkingHours}
          firstNameRef={firstNameRef}
          errRef={errRef}
          errMsg={errMsg}
          setFirstNameFocus={setFirstNameFocus}
          setLastNameFocus={setLastNameFocus}
          setUserNameFocus={setUserNameFocus}
          setEmailFocus={setEmailFocus}
          setWageFocus={setWageFocus}
          setAgeFocus={setAgeFocus}
          setPhoneNoFocus={setPhoneNoFocus}
          setWorkingHoursFocus={setWorkingHoursFocus}
          validFirstName={validFirstName}
          validLastName={validLastName}
          validUserName={validUserName}
          validEmail={validEmail}
          validWage={validWage}
          validAge={validAge}
          validPhoneNo={validPhoneNo}
          validWorkingHours={validWorkingHours}
          validRole={validRole}
          closeUserModal={closeUserModal}
          isSubmitDisabled={isSubmitDisabled}
          setIsSubmitDisabled={setIsSubmitDisabled}
        />

        <UsersUtilities 
          users={users}
          search={search}
          setSearch={setSearch}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          openAddUserModal={openAddUserModal}
          setOpenAddUserModal={setOpenAddUserModal}
        />

        <div className="tabs">
            <div className={`all_users tabchange ${activeUserTab === 0 ? "active_user_tab" : ""}`} onClick={() => handleUserTabChange(0)}>
                <p className="tabchange_txt">All Staffs</p>
                <span className={`tab_number ${activeUserTab === 0 ? "active_tabNo" : ""}`}>{users.length}</span>
            </div>

            <div className={`pickup tabchange ${activeUserTab === 1 ? "active_user_tab" : ""}`} onClick={() => handleUserTabChange(1)}>
                <p className="tabchange_txt">Pending</p>
                <span className={`tab_number ${activeUserTab === 1 ? "active_tabNo" : ""}`}>0</span>
            </div>

            <div className={`archived tabchange ${activeUserTab === 2 ? "active_user_tab" : ""}`} onClick={() => handleUserTabChange(2)}>
               <p className="tabchange_txt">Archived</p>
               <span className={`tab_number ${activeUserTab === 2 ? "active_tabNo" : ""}`}>{archivedUsers.length}</span>
            </div>

            <div className={`return tabchange ${activeUserTab === 3 ? "active_user_tab" : ""}`} onClick={() => handleUserTabChange(3)}>
               <p className="tabchange_txt">Recycle Bin</p>
               <span className={`tab_number ${activeUserTab === 3 ? "active_tabNo" : ""}`}>{deletedUsers.length}</span>
            </div>
        </div>

        <UserShowResult 
          users={users}
          setUsers={setUsers}
          archivedUsers={archivedUsers}
          setArchivedUsers={setArchivedUsers}
          currentUsers={currentUsers}
          usersPerPage={usersPerPage}
          setUsersPerPage={setUsersPerPage}
          showUsersPerPageDropdown={showUsersPerPageDropdown}
          setShowUserPerPageDropdown={setShowUserPerPageDropdown}
          dropdownRef={dropdownRef}
          actionsDropdownRef={actionsDropdownRef}
          deletedUsers={deletedUsers}
          setDeletedUsers={setDeletedUsers}
          checkedUsers={checkedUsers}
          setCheckedUsers={setCheckedUsers}
          activeUserTab={activeUserTab}
          setActiveUserTab={setActiveUserTab}
          usersAfterFilteringArchived={usersAfterFilteringArchived}
          setUsersAfterFilteringArchived={setUsersAfterFilteringArchived}
          usersAfterFilteringDeleted={usersAfterFilteringDeleted}
          setUsersAfterFilteringDeleted={setUsersAfterFilteringDeleted}
          currentArchivedUsers={currentArchivedUsers}
          currentDeletedUsers={currentDeletedUsers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumbers={pageNumbers}
        />

        <UsersTable 
          users={users}
          setUsers={setUsers}
          currentUsers={currentUsers}
          archivedUsers={archivedUsers}
          setArchivedUsers={setArchivedUsers}
          deletedUsers={deletedUsers}
          setDeletedUsers={setDeletedUsers}
          handleSelectAll={handleSelectAll}
          handleIndividualUser={handleIndividualUser}
          isSelectAllChecked={isSelectAllChecked}
          editUser={editUser}
          clickedOnDeleteUser={clickedOnDeleteUser}
          archiveAUser={archiveAUser}
          restoreAUser={restoreAUser}
          activeUserTab={activeUserTab}
          currentArchivedUsers={currentArchivedUsers}
          currentDeletedUsers={currentDeletedUsers}
          showUserOptions={showUserOptions}
          setShowUserOptions={setShowUserOptions}
          handleSelectAllArchived={handleSelectAllArchived}
          isSelectAllCheckedForArchivedAllUsers={isSelectAllCheckedForArchivedAllUsers}
          handleIndividualArchivedUser={handleIndividualArchivedUser}
          handleSelectAllDeleted={handleSelectAllDeleted}
          handleIndividualDeletedUser={handleIndividualDeletedUser}
          isSelectAllCheckedForDeletedAllUsers={isSelectAllCheckedForDeletedAllUsers}
        />

        {activeUserTab === 0 && users.length ? (

          <UsersPagination 
            usersPerPage={usersPerPage}
            totalUsers={totalUsers}
            paginate={paginate}
            totalArchivedUsers={totalArchivedUsers}
            totalDeletedUsers={totalDeletedUsers}
            activeUserTab={activeUserTab}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginateNumRef={paginateNumRef}
            pageNumbers={pageNumbers}
          />

        ) : null}

        {activeUserTab === 2 && archivedUsers.length ? (

          <UsersPagination 
            usersPerPage={usersPerPage}
            totalUsers={totalUsers}
            paginate={paginate}
            totalArchivedUsers={totalArchivedUsers}
            totalDeletedUsers={totalDeletedUsers}
            activeUserTab={activeUserTab}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginateNumRef={paginateNumRef}
            pageNumbers={pageNumbers}
          />

        ) : null}

        {activeUserTab === 3 && deletedUsers.length ? (

          <UsersPagination 
            usersPerPage={usersPerPage}
            totalUsers={totalUsers}
            paginate={paginate}
            totalArchivedUsers={totalArchivedUsers}
            totalDeletedUsers={totalDeletedUsers}
            activeUserTab={activeUserTab}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginateNumRef={paginateNumRef}
            pageNumbers={pageNumbers}
          />

        ) : null}

    </section>
  )
}

export default UsersMain