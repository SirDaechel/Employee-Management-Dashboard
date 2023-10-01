const RoleDropdown = ({ users, userRole, setUserRole, setShowRoleDropdown }) => {

    const handleUserRoleOption = (event) => {
      setUserRole(event)
      setShowRoleDropdown(false)
    }

    // Create a Set to store unique roles
    const uniqueRoles = new Set();

    // Filter out duplicates and populate the Set
    const filteredUsers = users.filter(user => {

      if (!uniqueRoles.has(user.role)) {
        uniqueRoles.add(user.role);
        return true;
      }

      return false;

    });

    return (
      <div className="role_list_cont">
        <ul className="role_list">
          {filteredUsers.map((user) => (
            <li key={user.id} className="role_item" onClick={(e) => handleUserRoleOption(e.target.innerText)}>{user.role}</li>
          ))}
        </ul>
      </div>
  
    )
  
  }
  
  export default RoleDropdown