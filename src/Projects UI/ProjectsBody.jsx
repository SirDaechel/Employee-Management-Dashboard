import { useState } from "react";
import Project from "./Project"

const ProjectsBody = ({ filteredSearch, activeProjectTab, filteredPendingSearch, filteredInProgressSearch, filteredTestingSearch, filteredCompletedSearch }) => {

  const [theProjectID, setTheProjectID] = useState(null);
  const [openProjectOptions, setOpenProjectOptions] = useState(false);

  //toggle project options
  const clickedProjectIcon = (ID) => {

    if(theProjectID === ID) {

      // If the clicked project is the same as the stored projectID, toggle the openOptions state
      setOpenProjectOptions(!openProjectOptions);

    } else {

      // If a different project is clicked, update the projectId and show options
      setTheProjectID(ID);
      setOpenProjectOptions(true);

    }

  };

  //move to pending

  return (

    <div className="project_data">

      {(activeProjectTab === 0 ? filteredSearch : activeProjectTab === 1 ? filteredPendingSearch : activeProjectTab === 2 ? filteredInProgressSearch : activeProjectTab === 3 ? filteredTestingSearch : activeProjectTab === 4 ? filteredCompletedSearch : "No data to display").map((project) => (

        <Project
          key={project.id}
          id={project.id}
          category={project.projectcategory}
          title={(project.projectName).length > 15 ? (project.projectName).slice(0, 18) + '...' : project.projectName}
          subtitle={(project.description).length > 40 ? (project.description).slice(0, 42) + '...' : project.description}
          startdate={project.startdate}
          enddate={project.enddate}
          bgcolourcode={project.bgcolourcode}
          txtcolourcode={project.txtcolourcode}
          status={project.status}
          theProjectID={theProjectID}
          openProjectOptions={openProjectOptions}
          clickedProjectIcon={clickedProjectIcon}
        />

      ))}

      {/* {filteredSearch.map((project) => (

        <Project
          key={project.id}
          id={project.id}
          category={project.projectcategory}
          title={(project.projectName).length > 15 ? (project.projectName).slice(0, 18) + '...' : project.projectName}
          subtitle={(project.description).length > 40 ? (project.description).slice(0, 42) + '...' : project.description}
          startdate={project.startdate}
          enddate={project.enddate}
          bgcolourcode={project.bgcolourcode}
          txtcolourcode={project.txtcolourcode}
          status={project.status}
          theProjectID={theProjectID}
          openProjectOptions={openProjectOptions}
          clickedProjectIcon={clickedProjectIcon}
        />

      ))} */}
        
    </div>

  )
}

export default ProjectsBody