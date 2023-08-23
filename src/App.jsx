import { useEffect, useRef, useState } from 'react'
import api from './api/users'
import Sidebar from './Users UI/SideBar';
import UsersMain from './Users UI/UsersMain';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [archivedUsers, setArchivedUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const paginateNumRef = useRef(null)
  
  //Get current users
  const endIndex = currentPage * usersPerPage;
  const startIndex = endIndex - usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);
  const currentArchivedUsers = archivedUsers.slice(startIndex, endIndex);
  const currentDeletedUsers = deletedUsers.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {

    const fetchUsers = async () => {

      try {
        setLoading(true);
        const response = await api.get("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {

        if(err.response) {

          //Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);

        } else {

          console.log(`Error: ${err.message}`);

        }

      };

    }

    fetchUsers();

  }, [])

  return (

    <main>

      <Sidebar />

      <UsersMain 
        users={users}
        currentUsers={currentUsers}
        setUsers={setUsers}
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
        totalUsers={users.length}
        totalArchivedUsers={archivedUsers.length}
        totalDeletedUsers={deletedUsers.length}
        paginate={paginate}
        archivedUsers={archivedUsers}
        setArchivedUsers={setArchivedUsers}
        deletedUsers={deletedUsers}
        setDeletedUsers={setDeletedUsers}
        currentArchivedUsers={currentArchivedUsers}
        currentDeletedUsers={currentDeletedUsers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginateNumRef={paginateNumRef}
      />
      
    </main>

  )
}

export default App
