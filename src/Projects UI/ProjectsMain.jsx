import { useState } from "react";
import ProjectUtility from "./ProjectUtility";
import ProjectTabs from './ProjectTabs';
import ProjectsBody from "./ProjectsBody";


const ProjectsMain = ({ projects, setProjects }) => {

  const [searchBar, setSearchBar] = useState("");
  const [activeProjectTab, setActiveProjectTab] = useState(0);

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

  return (

    <section>

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
      />
      
    </section>

  )

}

export default ProjectsMain