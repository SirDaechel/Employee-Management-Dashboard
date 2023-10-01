import { useEffect, useRef, useState } from 'react'
import api from './api/users'
import projectapi from './api/projects'
import notificationsapi from './api/notifications'
import helpdeskapi from './api/helpdesk'
import UsersMain from './Users UI/UsersMain';
import OverviewMain from './Overview UI/OverviewMain'
import ProjectsMain from './Projects UI/ProjectsMain'
import PayrollMain from './Payroll UI/PayrollMain';
import HelpDeskMain from './HelpDesk UI/HelpDeskMain'
import Layout from './Layout';
import AddProjects from './Projects UI/AddProjects';
import PageNotFound from './PageNotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [helpDesk, setHelpDesk] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [archivedUsers, setArchivedUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [fullPageOverlay, setFullPageOverlay] = useState(false);
  const paginateNumRef = useRef(null);
  
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

    ///////////////////////////////////////// fetch staffs or users ////////////////////////////////

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


    ///////////////////////////////////////// fetch projects ////////////////////////////////

    const fetchProjects = async () => {

      try {
        setLoading(true);
        const response = await projectapi.get("/projects");
        setProjects(response.data);
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

    fetchProjects();



    ///////////////////////////////////////// fetch notifications ////////////////////////////////

    const fetchNotifications = async () => {

      try {
        setLoading(true);
        const response = await notificationsapi.get("/notifications");
        setNotifications(response.data);
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

    fetchNotifications();



    ///////////////////////////////////////// fetch helpdesk tickets ////////////////////////////////

    const fetchHelpDesk = async () => {

      try {
        setLoading(true);
        const response = await helpdeskapi.get("/helpdesk");
        setHelpDesk(response.data);
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

    fetchHelpDesk();
    
  }, []);


  return (

    <Routes>

      <Route path='/' element={<Layout 
        notifications={notifications}
        setNotifications={setNotifications}
        fullPageOverlay={fullPageOverlay}
        setFullPageOverlay={setFullPageOverlay}
      />}>

        <Route index element={<OverviewMain 
          users={users}
          projects={projects}
          notifications={notifications}
          setNotifications={setNotifications}
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

        <Route path='projects'>

          <Route index element={<ProjectsMain 
            projects={projects}
            setProjects={setProjects}
            setFullPageOverlay={setFullPageOverlay}
            users={users}
          />} />

          <Route path='addproject' element={<AddProjects 
            projects={projects}
            setProjects={setProjects}
            users={users}
          />} />

        </Route>

        <Route path='payroll' element={<PayrollMain 
          users={users}
        />} />

        <Route path='helpdesk' element={<HelpDeskMain 
          tickets={helpDesk}
          setTicket={setHelpDesk}
          setFullPageOverlay={setFullPageOverlay}
        />} />

      </Route>

      <Route path="*" element={<PageNotFound />} />

    </Routes>

  )
}

export default App
