import { useState } from "react";
import ProjectUtility from "./ProjectUtility";
import ProjectTabs from './ProjectTabs';
import ProjectsBody from "./ProjectsBody";



const ProjectsMain = ({ projects, setProjects, setFullPageOverlay }) => {

  const [searchBar, setSearchBar] = useState("");
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [pendingDeleteProject, setPendingDeleteProject] = useState(null);
  const [clickedDeleteProject, setClickedDeleteProject] = useState(false);
  const [openProjectOptions, setOpenProjectOptions] = useState(false);

  //get number of project with a status of pending
  const getPendingProjects = projects.filter((project) => project.status === "Pending");

  //get number of project with a status of in progress
  const getInProgressProjects = projects.filter((project) => project.status === "In Progress");

  //get number of project with a status of testing
  const getTestingProjects = projects.filter((project) => project.status === "Testing");

  //get number of project with a status of completed
  const getCompletedProjects = projects.filter((project) => project.status === "Completed");

  //filtered all projects array based on search box input
  const filteredSearch = projects.filter((project) => (project.projectName.toLowerCase()).includes(searchBar.toLowerCase()));

  //filtered pending projects array based on search box input
  const filteredPendingSearch = getPendingProjects.filter((project) => (project.projectName.toLowerCase()).includes(searchBar.toLowerCase()));

  //filtered in progress projects array based on search box input
  const filteredInProgressSearch = getInProgressProjects.filter((project) => (project.projectName.toLowerCase()).includes(searchBar.toLowerCase()));

  //filtered testing projects array based on search box input
  const filteredTestingSearch = getTestingProjects.filter((project) => (project.projectName.toLowerCase()).includes(searchBar.toLowerCase()));

  //filtered completed projects array based on search box input
  const filteredCompletedSearch = getCompletedProjects.filter((project) => (project.projectName.toLowerCase()).includes(searchBar.toLowerCase()));

  //change active class tab
  const handleProjectTabChange = (tabIndex) => {

    setActiveProjectTab(tabIndex);

  }

  //if delete a project button is clicked
  const clickedOnDeleteProject = (project) => {

    setClickedDeleteProject(true);
    setFullPageOverlay(true);
    setPendingDeleteProject(project);
    
  };

  //if confirm delete project button is clicked
  const confirmDeleteProject = () => {

      if(pendingDeleteProject) {
        setProjects(projects.filter((project) => project.id !== pendingDeleteProject.id));
      }

      setPendingDeleteProject(null);
      setFullPageOverlay(false);
      setClickedDeleteProject(false);
      setOpenProjectOptions(false);

  }

  //if cancel delete user button is clicked
  const cancelDeleteProject = () => {

    setPendingDeleteProject(null);
    setFullPageOverlay(false);
    setClickedDeleteProject(false);

  };


  return (

    <section>

      <div className="confirm_delete_modal" style={{display: clickedDeleteProject ? "block" : "none"}}>
        <div className="confirm_delete_cont">
            <p className="confirm_delete_txt">Delete project?</p>
            <div className="yes_cancel_delete">
                <button className="delete_btn cancel_delete" onClick={() => cancelDeleteProject()}>Cancel</button>
                <button className="delete_btn yes_delete" onClick={() => confirmDeleteProject()}>Confirm</button>
            </div>
        </div>
      </div>

      <ProjectUtility 
        projects={projects}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
      />

      <ProjectTabs 
        projects={projects}
        activeProjectTab={activeProjectTab}
        handleProjectTabChange={handleProjectTabChange}
        getPendingProjects={getPendingProjects}
        getInProgressProjects={getInProgressProjects}
        getTestingProjects={getTestingProjects}
        getCompletedProjects={getCompletedProjects}
      />

      <ProjectsBody 
        filteredSearch={filteredSearch}
        activeProjectTab={activeProjectTab}
        filteredPendingSearch={filteredPendingSearch}
        filteredInProgressSearch={filteredInProgressSearch}
        filteredTestingSearch={filteredTestingSearch}
        filteredCompletedSearch={filteredCompletedSearch}
        clickedOnDeleteProject={clickedOnDeleteProject}
        openProjectOptions={openProjectOptions}
        setOpenProjectOptions={setOpenProjectOptions}
      />
      
    </section>

  )

}

export default ProjectsMain