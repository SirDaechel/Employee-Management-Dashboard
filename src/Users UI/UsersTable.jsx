import { useEffect, useRef, useState } from "react"
import TableTitle from "./TableTitle"
import TableList from "./TableList"

const UsersTable = ({ users, setUsers, currentUsers, handleSelectAll, handleIndividualUser, isSelectAllChecked, editUser, clickedOnDeleteUser, archiveAUser, restoreAUser, activeUserTab, currentArchivedUsers, currentDeletedUsers, showUserOptions, setShowUserOptions, handleSelectAllArchived, handleIndividualArchivedUser, isSelectAllCheckedForArchivedAllUsers, archivedUsers, setArchivedUsers, handleSelectAllDeleted, handleIndividualDeletedUser, isSelectAllCheckedForDeletedAllUsers, deletedUsers, setDeletedUsers }) => {

  const [theUserID, setTheUserID] = useState(null);

  const deleteUser = () => {

  };

 //toggle more user options
  const clickedOptionsIcon = (ID) => {

    if(theUserID === ID) {

      // If the clicked user is the same as the stored userID, toggle the showOptions state
      setShowUserOptions(!showUserOptions);

    } else {

      // If a different user is clicked, update the userId and show options
      setTheUserID(ID);
      setShowUserOptions(true);

    }

  };

  return (

    <div className="users_table_cont">

      <table>

        {activeUserTab === 0 ? (

          <TableTitle 
            users={users}
            setUsers={setUsers}
            handleSelectAll={handleSelectAll}
            isSelectAllChecked={isSelectAllChecked}
          />

        ) : null}

        {activeUserTab === 2 ? (

          <TableTitle 
            users={archivedUsers}
            setUsers={setArchivedUsers}
            handleSelectAll={handleSelectAllArchived}
            isSelectAllChecked={isSelectAllCheckedForArchivedAllUsers}
          />

        ) : null}

        {activeUserTab === 3 ? (

          <TableTitle 
            users={deletedUsers}
            setUsers={setDeletedUsers}
            handleSelectAll={handleSelectAllDeleted}
            isSelectAllChecked={isSelectAllCheckedForDeletedAllUsers}
          />

        ) : null}

        <tbody>

          {activeUserTab === 0 ? (

            currentUsers.map((user) => (

              <TableList 
                key={user.id}
                user={user}
                handleIndividualUser={() => handleIndividualUser(user.id)}
                clickedOptionsIcon={clickedOptionsIcon}
                showUserOptions={showUserOptions}
                setShowUserOptions={setShowUserOptions}
                theUserID={theUserID}
                editUser={() => editUser(user.id)}
                clickedOnDeleteUser={() => clickedOnDeleteUser(user)}
                archiveAUser={() => archiveAUser(user)}
                restoreAUser={() => restoreAUser(user)}
                activeUserTab={activeUserTab}
              />
    
            ))

          ) : null}

          {activeUserTab === 2 ? (

            currentArchivedUsers.map((user) => (

              <TableList 
                key={user.id}
                user={user}
                handleIndividualUser={() => handleIndividualArchivedUser(user.id)}
                clickedOptionsIcon={clickedOptionsIcon}
                showUserOptions={showUserOptions}
                setShowUserOptions={setShowUserOptions}
                theUserID={theUserID}
                editUser={() => editUser(user.id)}
                clickedOnDeleteUser={() => clickedOnDeleteUser(user)}
                archiveAUser={() => archiveAUser(user)}
                restoreAUser={() => restoreAUser(user)}
                activeUserTab={activeUserTab}
              />

            ))

          ) : null}

          {activeUserTab === 3 ? (

            currentDeletedUsers.map((user) => (

              <TableList 
                key={user.id}
                user={user}
                handleIndividualUser={() => handleIndividualDeletedUser(user.id)}
                clickedOptionsIcon={clickedOptionsIcon}
                showUserOptions={showUserOptions}
                setShowUserOptions={setShowUserOptions}
                theUserID={theUserID}
                editUser={() => editUser(user.id)}
                clickedOnDeleteUser={() => clickedOnDeleteUser(user)}
                archiveAUser={() => archiveAUser(user)}
                restoreAUser={() => restoreAUser(user)}
                activeUserTab={activeUserTab}
              />

            ))

          ) : null}


        </tbody>

      </table>

    </div>

  )

}

export default UsersTable