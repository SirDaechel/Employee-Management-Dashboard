import { useState, useEffect } from "react"
import InputBox from "./InputBox"
import Calendar from "../Calendar UI/Calendar"
import DateInput from "./DateInput"
import ProjectInputDropdownBtn from "./ProjectInputDropdownBtn"
import TagsInput from "./TagsInput"
import AssignProjectInput from "./AssignProjectInput"
import { useNavigate } from "react-router-dom"

const AddProjects = ({ projects, setProjects, users }) => {

  const [projectName, setProjectName] = useState("");
  const [validProjectName, setValidProjectName] = useState(false);

  const [projectDesc, setProjectDesc] = useState("");
  const [validProjectDesc, setValidProjectDesc] = useState(false);

  const [projectCate, setProjectCate] = useState("Select Project Category");
  const [validProjectCate, setValidProjectCate] = useState(false);

  const [projectStartDate, setProjectStartDate] = useState("Enter Start Date --");
  const [validProjectStartDate, setValidProjectStartDate] = useState(false);

  const [projectEndDate, setProjectEndDate] = useState("Enter End Date --");
  const [validProjectEndDate, setValidProjectEndDate] = useState(false);

  const [projectStatus, setProjectStatus] = useState("Pending");

  const [projectPriority, setProjectPriority] = useState("Select Project Priority");
  const [validProjectPriority, setValidProjectPriority] = useState(false);

  const [projectTeam, setProjectTeam] = useState([]);
  const [validProjectTeam, setValidProjectTeam] = useState(false);

  const [projectStacks, setProjectStacks] = useState([]);
  const [validProjectStacks, setValidProjectStacks] = useState(false);

  const [projectClient, setProjectClient] = useState("");
  const [validProjectClient, setValidProjectClient] = useState(false);

  const [isSubmitProjectBtnDisabled, setIsSubmitProjectBtnDisabled] = useState(false);
  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [endDateCalendarMargin, setEndDateCalendarMargin] = useState(true);
  const navigate = useNavigate();

  // Validate project name input
  useEffect(() => {
    const resultProjectName = projectName === "" ? false : true;
    setValidProjectName(resultProjectName);
  }, [projectName]);


  // Validate project desc input
  useEffect(() => {
    const resultProjectDesc = projectDesc === "" ? false : true;
    setValidProjectDesc(resultProjectDesc);
  }, [projectDesc]);


  // Validate project category input
  useEffect(() => {
    const resultProjectCate = projectCate === "Select Project Category" || projectCate === "" ? false : true;
    setValidProjectCate(resultProjectCate);
  }, [projectCate]);


  // Validate project assign input
  useEffect(() => {
    const resultProjectTeam = projectTeam.length === 0 ? false : true;
    setValidProjectTeam(resultProjectTeam);
  }, [projectTeam]);

  // Validate project start date input
  useEffect(() => {
    const resultProjectStartDate = projectStartDate === "Enter Start Date --" || projectStartDate === "" ? false : true;
    setValidProjectStartDate(resultProjectStartDate);
  }, [projectStartDate]);

  // Validate project end date input
  useEffect(() => {
    const resultProjectEndDate = projectEndDate === "Enter End Date --" || projectEndDate === "" ? false : true;
    console.log(resultProjectEndDate);
    setValidProjectEndDate(resultProjectEndDate);
  }, [projectEndDate]);


  // Validate project priority input
  useEffect(() => {
    const resultProjectPriority = projectPriority === "Select Project Priority" || projectPriority === "" ? false : true;
    setValidProjectPriority(resultProjectPriority);
  }, [projectPriority]);


  // Validate project client input
  useEffect(() => {
    const resultProjectClient = projectClient === "" ? false : true;
    setValidProjectClient(resultProjectClient);
  }, [projectClient]);

  // Validate project stack
  useEffect(() => {
    const resultProjectStacks = projectStacks.length === 0 ? false : true;
    setValidProjectStacks(resultProjectStacks);
  }, [projectStacks]);


  //validate if the submit new project button should be disabled or not
  useEffect(() => {
    setIsSubmitProjectBtnDisabled(validProjectName && validProjectDesc && validProjectCate && validProjectStartDate && validProjectEndDate && validProjectPriority && validProjectTeam && validProjectStacks && validProjectClient ? false : true);
  }, [validProjectName, validProjectDesc, validProjectCate, validProjectStartDate, validProjectEndDate, validProjectPriority, validProjectTeam, validProjectStacks, validProjectClient]);


  // Open Start Date Calendar
  const openStartDateCalendar = () => {

    setShowEndDateCalendar(false);

    setShowStartDateCalendar(!showStartDateCalendar);

  }

  // Open End Date Calendar
  const openEndDateCalendar = () => {

    setShowStartDateCalendar(false);

    setShowEndDateCalendar(!showEndDateCalendar);

  }

  // Close Start Date Calendar
  const closeStartDateCalendar = () => {
    setShowStartDateCalendar(false)
  }

  // Close End Date Calendar
  const closeEndDateCalendar = () => {
    setShowEndDateCalendar(false)
  }

  // Extract unique categories
  const uniqueCategories = [...new Set(projects.map((project) => project.projectcategory))];

  // Stage the new project to be submitted
  const stageNewProject = () => {

    const id = projects.length ? projects[projects.length - 1].id + 1 : 1;

    const newProject = {
      id: id,
      projectcategory: projectCate,
      projectName: projectName,
      description: projectDesc,
      startdate: projectStartDate,
      enddate: projectEndDate,
      status: projectStatus,
      assignedTo: projectTeam,
      priority: projectPriority,
      technologyStack: projectStacks,
      client: projectClient,

      bgcolourcode: projectCate === "Web Development" || projectCate === "Web Development/Web3" || projectCate === "Web Development/Saas" ? "#E4E4D0" : projectCate === "Internet of Things (IoT)" ? "#B9B4C7" : projectCate === "Artificial Intelligence (AI)" ? "#acbbf7" : projectCate === "App Development" ? "#E19898" : projectCate === "Cyber Security" ? "#D8E9A8" : projectCate === "UI/UX" ? "#D8E9A8" : "",

      txtcolourcode: projectCate === "Web Development" || projectCate === "Web Development/Web3" || projectCate === "Web Development/Saas" ? "#728362" : projectCate === "Internet of Things (IoT)" ? "#352F44" : projectCate === "Artificial Intelligence (AI)" ? "#0B2447" : projectCate === "App Development" ? "#3F1D38" : projectCate === "Cyber Security" ? "#1E5128" : projectCate === "UI/UX" ? "#1E5128" : ""
    }
    
    const addProject = [...projects, newProject];

    setProjects(addProject);
  }

  // Submit new project
  const submitNewProject = () => {

    setProjectName("");
    setProjectDesc("");
    setProjectCate("Select Project Category");
    setProjectStartDate("Enter Start Date --");
    setProjectEndDate("Enter End Date --");
    setProjectStatus("Pending");
    setProjectPriority("Select Project Priority");
    setProjectTeam([]);
    setProjectStacks([]);
    setProjectClient("");
    setShowStartDateCalendar(false);
    setShowEndDateCalendar(false);
    setEndDateCalendarMargin(true);

    stageNewProject();

    navigate('/projects')

  }
    
  return (
    
    <section>

      <div className="project_details">Project Details</div>

      <div className="add_project_forms">

        <div className="project_left_cont">

          <form className="add_project_left" onSubmit={(e) => e.preventDefault()}>

            <InputBox 
              label={"Project Name"}
              addProjectInput={projectName} 
              setAddProjectInput={setProjectName} 
              type={"text"} 
              placeholder={"Enter Project Name"}
            />

            <div className="project_desc">

              <p className="project_label_txt">Project Description</p>

              <textarea className="project_desc_input" placeholder="Enter Project Description" value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)}></textarea>

            </div>

            <ProjectInputDropdownBtn
              label={"Project Category"}
              addProjectInput={projectCate} 
              setAddProjectInput={setProjectCate}
              uniqueCategories={uniqueCategories}
            />

            <AssignProjectInput 
              users={users}
              projectTeam={projectTeam}
              setProjectTeam={setProjectTeam}
            />
            
            <DateInput
              label={"Start Date"}
              projectDate={projectStartDate}
              setProjectDate={setProjectStartDate}
              openCalendar={openStartDateCalendar}
            />

            <DateInput 
              label={"End Date"}
              projectDate={projectEndDate}
              setProjectDate={setProjectEndDate}
              openCalendar={openEndDateCalendar}
            />

          </form>

          {showStartDateCalendar && <Calendar
            projectDate={projectStartDate}
            setProjectDate={setProjectStartDate}
            showCalendar={showStartDateCalendar}
            setShowCalendar={setShowStartDateCalendar}
            closeCalendar={closeStartDateCalendar}
          />}
          
          {showEndDateCalendar && <Calendar
            projectDate={projectEndDate}
            setProjectDate={setProjectEndDate}
            showCalendar={showEndDateCalendar}
            setShowCalendar={setShowEndDateCalendar}
            closeCalendar={closeEndDateCalendar}
            endDateCalendarMargin={endDateCalendarMargin}
          />}

        </div>

        <form className="add_project_right" onSubmit={(e) => e.preventDefault()}>
          
          <ProjectInputDropdownBtn
            label={"Project Priority"}
            addProjectInput={projectPriority} 
            setAddProjectInput={setProjectPriority}
          />
          
          <InputBox 
            label={"Project Client/Company"}
            addProjectInput={projectClient} 
            setAddProjectInput={setProjectClient} 
            type={"text"} 
            placeholder={"Enter Project Client"}
          />

          <TagsInput 
            projectStacks={projectStacks}
            setProjectStacks={setProjectStacks}
          />

          <button disabled={isSubmitProjectBtnDisabled} style={{backgroundColor: isSubmitProjectBtnDisabled ? "#ABABAB" : "#6C63FF", cursor: isSubmitProjectBtnDisabled ? "default" : "pointer"}} className="submit_project" onClick={() => submitNewProject()}>
              Submit
          </button>

        </form>

      </div>

    </section>
    
  )
  
}

export default AddProjects