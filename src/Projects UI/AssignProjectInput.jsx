import { useEffect, useState, useRef } from 'react'
import closeIcon from '../../public/images/thecloseicon'
import tickIcon from '../../public/images/tickIcon'

const AssignProjectInput = ({ users, projectTeam, setProjectTeam }) => {

  const [staffs, setStaffs] = useState([]);
  const [onFocus, setOnFocus] = useState(false);
  const [selectedStaffIDs, setSelectedStaffIDs] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const dropdownRef = useRef(null);


  // Function to remove staff from project
  const removeStaff = (staffid, indexToRemove) => {

    setStaffs(staffs.filter((staff, index) => index !== indexToRemove));

    setSelectedStaffIDs(selectedStaffIDs.filter((staffID) =>  staffID !== staffid))

  }

  // Handle what happens when you click on a staff or user
  const handleStaffClick = (user, staffID) => {

    setShowPlaceholder(false)

    // If a staff or user is already in the staffs array, remove it. If not, place it in the array
    if(staffs.includes(user)) {

        setStaffs(staffs.filter((staff) => staff !== user));
        setProjectTeam(staffs.filter((staff) => staff !== user));

    } else {

        setStaffs([...staffs, user]);
        setProjectTeam([...projectTeam, user])

    }

    // If a staff ID is already in the selectedStaffIDs array, remove it. If not, place it in the array
    if(selectedStaffIDs.includes(staffID)) {

        setSelectedStaffIDs(selectedStaffIDs.filter((id) => id !== staffID));

    } else {

        setSelectedStaffIDs([...selectedStaffIDs, staffID]);

    }

  }

  // Event listener to close the dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOnFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);
  

  return (

    <div ref={dropdownRef} className='tags_section'>

        <div className="date_input_title">Assign Project To</div>

        <div className="assign_cont">

            {showPlaceholder ? 
                <p className="assign_placeholder">Assign Project To --</p>
            : ""}


            <ul className='assign_list_body'>
                {staffs.map((staff, index) => (

                  <li key={index} className="tag_list">
                      {`${staff.name} - ${staff.role}`}
                      <span className="delete_tag_list" onClick={() => removeStaff(staff.id, index)}>{closeIcon}</span>
                  </li>

                ))}
            </ul>

            <div className='open_assign_to_dropdown_btn' onClick={() => setOnFocus(!onFocus)}>{onFocus ? "Close List" : "Open List"}</div>

        </div>

        {onFocus ? 
        
            <div className="assign_list">

                <div className="assign_list_data">

                    {users.map((user) => (

                        <div key={user.id} className="staffs_assigned_with_icon" style={{backgroundColor: selectedStaffIDs.includes(user.id) ? "#A6FF96" : "#FFF"}}  onClick={() => handleStaffClick(user, user.id)}>

                            <p className="assign_to">{`${user.name} - ${user.role}`}</p>
                            
                            <div className="tick_icon" style={{display: selectedStaffIDs.includes(user.id) ? "block" : "none"}}>
                                {tickIcon}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        : null}
        
    </div>

  )

}

export default AssignProjectInput