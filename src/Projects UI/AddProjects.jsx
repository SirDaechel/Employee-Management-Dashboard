import { useState } from "react"
import InputBox from "./InputBox"
import Calendar from "../Calendar UI/Calendar"
import DateInput from "./DateInput"
import ProjectInputDropdownBtn from "./ProjectInputDropdownBtn"
import TagsInput from "./TagsInput"

const AddProjects = ({ projects }) => {

  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectCate, setProjectCate] = useState("Select Project Category");
  const [projectStartDate, setProjectStartDate] = useState("Enter Start Date --");
  const [projectEndDate, setProjectEndDate] = useState("Enter End Date --");
  const [projectPriority, setProjectPriority] = useState("Select Project Priority");
  const [projectTeam, setProjectTeam] = useState([]);
  const [projectStack, setProjectStack] = useState([]);
  const [projectClient, setProjectClient] = useState("");
  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [endDateCalendarMargin, setEndDateCalendarMargin] = useState(true);

  const openStartDateCalendar = (e) => {

    setShowEndDateCalendar(false);

    setShowStartDateCalendar(!showStartDateCalendar);

  }

  const openEndDateCalendar = (e) => {

    setShowStartDateCalendar(false);

    setShowEndDateCalendar(!showEndDateCalendar);

  }

  const closeStartDateCalendar = () => {
    setShowStartDateCalendar(false)
  }

  const closeEndDateCalendar = () => {
    setShowEndDateCalendar(false)
  }

  // Extract unique categories
  const uniqueCategories = [...new Set(projects.map((project) => project.projectcategory))];
    
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

            <InputBox 
              label={"Assign Project To:"}
              addProjectInput={projectTeam} 
              setAddProjectInput={setProjectTeam} 
              type={"text"} 
              placeholder={"Enter Project Name"}
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
            // showStartDateCalendar={showStartDateCalendar}
            // setShowStartDateCalendar={setShowStartDateCalendar}
            showCalendar={showStartDateCalendar}
            setShowCalendar={setShowStartDateCalendar}
            closeCalendar={closeStartDateCalendar}
          />}
          
          {showEndDateCalendar && <Calendar
            projectDate={projectEndDate}
            setProjectDate={setProjectEndDate}
            // showEndDateCalendar={showEndDateCalendar}
            // setShowEndDateCalendar={setShowEndDateCalendar}
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
            label={"Project Stack"}
            addProjectInput={projectStack} 
            setAddProjectInput={setProjectStack} 
            type={"text"} 
            placeholder={"Enter Project Stack"}
          />

          <InputBox 
            label={"Project Client/Company"}
            addProjectInput={projectClient} 
            setAddProjectInput={setProjectClient} 
            type={"text"} 
            placeholder={"Enter Project Client"}
          />

          <TagsInput />

          <button className="submit_project">
              Submit
          </button>

        </form>

      </div>

    </section>
    
  )
  
}

export default AddProjects