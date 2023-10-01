import { useState, useRef } from "react"
import arrowDown from "../../public/images/arrowdown"

const ProjectInputDropdownBtn = ({ label, addProjectInput, setAddProjectInput, uniqueCategories }) => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const categoryDropdown = useRef(null)

  const showDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const selectDropdownOption = (e) => {
    setAddProjectInput(e);
    setOpenDropdown(false);
  }

  return (

    <div className="date_input">

        <div className="date_input_title">{label}</div>

        <div className="date_input_btn" onClick={() => showDropdown()}>
          <p className="date_input_txt">{addProjectInput}</p>
          <div className="calendar_icon">{arrowDown}</div>
        </div>

        {openDropdown &&
          <div ref={categoryDropdown} className="input_dropdown">
            <div className="input_dropdown_data">
              {uniqueCategories ?

                uniqueCategories.map((category, index) => (
                  <p className="dropdown_txt" key={index} onClick={(e) => selectDropdownOption(e.target.textContent)}>{category}</p>
                ))

              :

                <>
                  <p className="dropdown_txt" onClick={(e) => selectDropdownOption(e.target.textContent)}>High</p>
                  <p className="dropdown_txt" onClick={(e) => selectDropdownOption(e.target.textContent)}>Medium</p>
                </>

              } 
                
            </div>
          </div>
        }

    </div>

  )

}

export default ProjectInputDropdownBtn