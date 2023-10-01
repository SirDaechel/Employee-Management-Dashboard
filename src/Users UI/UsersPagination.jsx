import doubleftarrow from "../../public/images/doubleleftarrow"
import doublerightarrow from "../../public/images/doublerightarrow"

const UsersPagination = ({ totalUsers, totalArchivedUsers, totalDeletedUsers, usersPerPage, paginate, activeUserTab, currentPage, setCurrentPage, paginateNumRef, pageNumbers }) => {
  

  //----------------------------------- WHILE IN THE MAIN USERS TAB ------------------------------//

  //paginate to the first main users page
  const paginateToFirst = () => {
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      setCurrentPage(1)
    }
  };

  //paginate to the last main users page
  const paginateToLast = () => {
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      setCurrentPage(i)
    }
  };

  //----------------------------------- WHILE IN THE ARCHIVED USERS TAB ------------------------------//

  //paginate to the first current users page
  const paginateToFirstArchivedUsersPage = () => {
    for(let i = 1; i <= Math.ceil(totalArchivedUsers / usersPerPage); i++) {
      setCurrentPage(1)
    }
  };

  //paginate to the last current users page
  const paginateToLastArchivedUsersPage = () => {
    for(let i = 1; i <= Math.ceil(totalArchivedUsers / usersPerPage); i++) {
      setCurrentPage(i)
    }
  };

  //----------------------------------- WHILE IN THE DELETED USERS TAB ------------------------------//

  //paginate to the first current users page
  const paginateToFirsDeletedUsersPage = () => {
    for(let i = 1; i <= Math.ceil(totalDeletedUsers / usersPerPage); i++) {
      setCurrentPage(1)
    }
  };

  //paginate to the last current users page
  const paginateToLastDeletedUsersPage = () => {
    for(let i = 1; i <= Math.ceil(totalDeletedUsers / usersPerPage); i++) {
      setCurrentPage(i)
    }
  };
  

  return (

    <div className="paginate_cont">

      <ul className="paginate_no">

        <div className="paginate_icon paginate_back" onClick={activeUserTab === 0 && (() => paginateToFirst()) || activeUserTab === 2 && (() => paginateToFirstArchivedUsersPage()) || activeUserTab === 3 && (() => paginateToFirsDeletedUsersPage())}>{doubleftarrow}</div>
        
          {pageNumbers.map((num) => (

            <li key={num}>

              <button ref={paginateNumRef} style={{backgroundColor: currentPage === num ? "#6C63FF" : "transparent", color: currentPage === num ? "white" : "#7e7e7e"}} className="page_link" onClick={() => paginate(num)}>
                {num}
              </button>

            </li>

          ))}

        <div className="paginate_icon paginate_front" onClick={activeUserTab === 0 && (() => paginateToLast()) || activeUserTab === 2 && (() => paginateToLastArchivedUsersPage()) || activeUserTab === 3 && (() => paginateToLastDeletedUsersPage())}>{doublerightarrow}</div>

      </ul>

    </div>

  )
}

export default UsersPagination