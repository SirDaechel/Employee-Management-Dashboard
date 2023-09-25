import arrowupIcon from "../../public/images/arrowupIcon"
import arrowdown from "../../public/images/arrowdown"
import { useState } from "react"


const TableTitle = ({ users, setUsers, handleSelectAll, isSelectAllChecked }) => {

  const [showNameTitleOptions, setShowNameTitleOptions] = useState(false);
  const [showWageTitleOptions, setShowWageTitleOptions] = useState(false);
  const [showHoursTitleOptions, setShowHoursTitleOptions] = useState(false);
  const [showAgeTitleOptions, setShowAgeTitleOptions] = useState(false);

  const showTheNameTitleOptions = () => {
    setShowNameTitleOptions(!showNameTitleOptions);
  };

  const showTheWageTitleOptions = () => {
    setShowWageTitleOptions(!showWageTitleOptions);
  };

  const showTheHoursTitleOptions = () => {
    setShowHoursTitleOptions(!showHoursTitleOptions);
  };

  const showTheAgeTitleOptions = () => {
    setShowAgeTitleOptions(!showAgeTitleOptions);
  };

  //----------------------- SORT THE USERS BY NAMES (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterNameByAscendingOrder = () => {
    const sortedNames = [...users].sort((a, b) => a.firstname.localeCompare(b.firstname));
    setUsers(sortedNames);
  };

  const filterNameByDescendingOrder = () => {
    const sortedNames = [...users].sort((a, b) => b.firstname.localeCompare(a.firstname));
    setUsers(sortedNames);
  };

  //----------------------- SORT THE USERS BY WAGE (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterWageByAscendingOrder = () => {
    const sortedNames = [...users].sort((a, b)  => a.wage - b.wage);
    setUsers(sortedNames);
  };

  const filterWageByDescendingOrder = () => {
    const sortedNames = [...users].sort((a, b) => b.wage - a.wage);
    setUsers(sortedNames);
  };

  //----------------------- SORT THE USERS BY AGE (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterHoursByAscendingOrder = () => {
    const sortedNames = [...users].sort((a, b)  => a.workinghours - b.workinghours);
    setUsers(sortedNames);
  };

  const filterHoursByDescendingOrder = () => {
    const sortedNames = [...users].sort((a, b) => b.workinghours - a.workinghours);
    setUsers(sortedNames);
  };

  //----------------------- SORT THE USERS BY AGE (ASCENDING OR DESECENDING) ORDER ------------------//

  const filterAgeByAscendingOrder = () => {
    const sortedNames = [...users].sort((a, b)  => a.age - b.age);
    setUsers(sortedNames);
  };

  const filterAgeByDescendingOrder = () => {
    const sortedNames = [...users].sort((a, b) => b.age - a.age);
    setUsers(sortedNames);
  };

  return (
    
      <>

        <thead className="users_table_title">

          <tr>

            <th>
              <input className="table_checkbox" type="checkbox" checked={!users.length ? false : isSelectAllChecked} onChange={(e) => handleSelectAll(e.target.checked)} />
            </th>

            <th>
              <div className="name" onClick={() => showTheNameTitleOptions()}>
                <div className="name_cont">
                  <p className="name_title_txt">Name</p>
                  <div className="name_title_icons">
                    {arrowupIcon}
                    {arrowdown}
                  </div>
                </div>

                <div className="table_title_dropdown" style={{display: showNameTitleOptions ? "flex" : "none"}}>
                  <div className="acending" onClick={() => filterNameByAscendingOrder()}>
                    <p className="table_title_dropdown_txt">acending</p>
                  </div>
                  <div className="descending" onClick={() => filterNameByDescendingOrder()}>
                    <p className="table_title_dropdown_txt">descending</p>
                  </div>
                </div>
              </div>
            </th>

            {/* <th>
              <div className="username">
                <p className="username_txt">Username</p>
              </div>
            </th> */}

            <th>
              <div className="email">
                <p className="email_txt">Email</p>
              </div>
            </th>

            <th>
              <div className="role">
                <p className="role_txt">Role</p>
              </div>
            </th>

            <th>
              <div className="phone">
                <p className="phone_txt">Phone</p>
              </div>
            </th>

            <th>
              <div className="wage" onClick={() => showTheWageTitleOptions()}>
                <div className="wage_cont">
                  <p className="wage_txt">Wage</p>
                  <div className="wage_icons">
                    {arrowupIcon}
                    {arrowdown}
                  </div>
                </div>

                <div className="table_title_dropdown" style={{display: showWageTitleOptions ? "flex" : "none"}}>
                  <div className="acending" onClick={() => filterWageByAscendingOrder()}>
                    <p className="table_title_dropdown_txt">acending</p>
                  </div>
                  <div className="descending" onClick={() => filterWageByDescendingOrder()}>
                    <p className="table_title_dropdown_txt">descending</p>
                  </div>
                </div>
              </div>
            </th>

            <th>
              <div className="workinghours" onClick={() => showTheHoursTitleOptions()}>
                <div className="workimghours_cont">
                  <p className="workinghours_txt">Hours</p>
                  <div className="workinghours_icons">
                    {arrowupIcon}
                    {arrowdown}
                  </div>
                </div>

                <div className="table_title_dropdown" style={{display: showHoursTitleOptions ? "flex" : "none"}}>
                  <div className="acending" onClick={() => filterHoursByAscendingOrder()}>
                    <p className="table_title_dropdown_txt">acending</p>
                  </div>
                  <div className="descending" onClick={() => filterHoursByDescendingOrder()}>
                    <p className="table_title_dropdown_txt">descending</p>
                  </div>
                </div>
              </div>
            </th>

            <th>
              <div className="age" onClick={() => showTheAgeTitleOptions()}>
                <div className="age_cont">
                  <p className="age_txt">Age</p>
                  <div className="age_icons">
                    {arrowupIcon}
                    {arrowdown}
                  </div>
                </div>

                <div className="table_title_dropdown" style={{display: showAgeTitleOptions ? "flex" : "none"}}>
                  <div className="acending" onClick={() => filterAgeByAscendingOrder()}>
                    <p className="table_title_dropdown_txt">acending</p>
                  </div>
                  <div className="descending" onClick={() => filterAgeByDescendingOrder()}>
                    <p className="table_title_dropdown_txt">descending</p>
                  </div>
                </div>
              </div>
            </th>

            <th>
              
            </th>

          </tr>

        </thead>


      </>
  )
}

export default TableTitle