const RoleDropdown = ({ userRole, setUserRole, setShowRoleDropdown }) => {

    const handleUserRoleOption = (event) => {
      setUserRole(event)
      setShowRoleDropdown(false)
    }
  
    return (
      <div className="role_list_cont">
        <ul className="role_list">
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Accountant/Finance User</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Administrator</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Analyst</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Analytics/User Data Analyst</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Auditor</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Billing/Invoicing Specialist</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Cloud Engineer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Consultant</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Content Manager</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Customer Support</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Data Analyst</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Data Entry</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Data Scientist</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Database Administrator</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Designer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Developer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Digital Marketing Specialist</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Financial Analyst</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Graphic Designer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Human Resources (HR)</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>IT Support Specialist</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Marketing Specialist</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Moderator</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Network Engineer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Product Manager</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Project Manager</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Quality Assurance (QA) Tester</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Sales Representative</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Software Engineer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Support Agent</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>System Administrator</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>System Analyst</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Technical Support</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>UX/UI Designer</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Video Editor</li>
          <li className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>Web Developer</li>
        </ul>
      </div>
  
    )
  
  }
  
  export default RoleDropdown