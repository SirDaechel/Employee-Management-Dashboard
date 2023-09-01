import { useState } from "react";
import circlearrowright from "../../public/images/circlearrowright";
import circlearrowleft from "../../public/images/circlearrowleft";
import StaffsRow from "./StaffsRow";;

const DeptSummary = ({ users }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [rolesPerPage, setRolesPerPage] = useState(4);

  //functionality for paginating through the "department summary" widget
  
  const roleCounts = {};

  users.forEach(user => {
    if (roleCounts[user.role]) {
      roleCounts[user.role]++;
    } else {
      roleCounts[user.role] = 1;
    }
  });

  const endIndex = currentPage * rolesPerPage;
  const startIndex = endIndex - rolesPerPage;
  const slicedRoleCount = Object.keys(roleCounts).slice(startIndex, endIndex);
  const roleCountLength =  Object.keys(roleCounts).length;

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(roleCountLength / rolesPerPage); i++) {
    pageNumbers.push(i);
  }

  //next to another set of department summary
  const nextDeptSum = () => {
    if(currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  //next to another set of department summary
  const prevDeptSum = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  }

  return (
    
    <div className="staffs_by_number">

        <h4 className="staffs_by_number_title">Department Summary</h4>

        <div className="staff_row_total_users_data">
          <p className="staff_row_total_users_txt">Total staffs:</p>
          <p className="staff_row_total_users_no">{users.length}</p>
        </div>

        <div className="staffs_by_number_main">

          <StaffsRow 
            users={users}
            rolesPerPage={rolesPerPage}
            roleCounts={roleCounts}
            slicedRoleCount={slicedRoleCount}
          />
          
        </div>

        <div className="next_prev_dept_summary">

          <button className="staff_row_view_more_btn" onClick={() => prevDeptSum()}>{circlearrowleft}</button>

          <button className="staff_row_view_more_btn" onClick={() => nextDeptSum()}>{circlearrowright}</button>

        </div>

    </div>


  )

}

export default DeptSummary