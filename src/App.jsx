import { useEffect, useRef, useState } from 'react'
import api from './api/users'
import Sidebar from './MainSideBar/SideBar';
import UsersMain from './Users UI/UsersMain';
import OverviewMain from './Overview UI/OverviewMain'
import NotificationsMain from './Notifications UI/NotificationMain'
import ProjectsMain from './Projects UI/ProjectsMain'
import SettingsMain from './SettingsUI/SettingsMain'
import { Route, Routes } from 'react-router-dom';

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

    <Routes>

      <Route path='/' element={<Sidebar />}>

        <Route index element={<OverviewMain 
          users={users}
          setUsers={setUsers}
        />} />

        <Route path='staffs' element={<UsersMain 
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
        />} />

        <Route path='notifications' element={<NotificationsMain />} />

        <Route path='projects' element={<ProjectsMain />} />

        <Route path='settings' element={<SettingsMain />} />
        
      </Route>

    </Routes>

  )
}

export default App
