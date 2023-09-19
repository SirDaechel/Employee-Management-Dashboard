import doubleftarrow from "../../public/images/doubleleftarrow"
import doublerightarrow from "../../public/images/doublerightarrow"

const PayrollPagination = ({ paginate, pageNumbers, totalUsers, staffsPerPage, currentPage, setCurrentPage, searchPayroll }) => {

  //paginate to the first staff page
  const paginateToFirst = () => {
    for(let i = 1; i <= Math.ceil(totalUsers / staffsPerPage); i++) {
      setCurrentPage(1)
    }
  };

  //paginate to the last staff page
  const paginateToLast = () => {
    for(let i = 1; i <= Math.ceil(totalUsers / staffsPerPage); i++) {
      setCurrentPage(i)
    }
  };

  return (

    <>

      {!searchPayroll ?

        <div className="paginate_cont">

          <ul className="payroll_paginate_no">

            <div className="paginate_icon paginate_back" onClick={() => paginateToFirst()}>{doubleftarrow}</div>
            
              {pageNumbers.map((num) => (

                <li key={num}>

                  <button style={{backgroundColor: currentPage === num ? "#6C63FF" : "transparent", color: currentPage === num ? "white" : "#7e7e7e"}} className="page_link" onClick={() => paginate(num)}>
                    {num}
                  </button>

                </li>

              ))}

            <div className="paginate_icon paginate_front" onClick={() => paginateToLast()}>{doublerightarrow}</div>

          </ul>

        </div>

      : null}

    </>

  )

}

export default PayrollPagination