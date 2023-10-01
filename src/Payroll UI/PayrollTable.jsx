import PayrollTableTitle from "./PayrollTableTitle"
import PayrollTableList from "./PayrollTableList"

const PayrollTable = ({ currentStaffs, filteredSearch, searchPayroll }) => {
  
  return (

    <div className="payroll_table_main">

        <table className="payroll_table">

            <thead className="payroll_table_head">

                <PayrollTableTitle />

            </thead>

            <tbody>

                {!searchPayroll ?

                    currentStaffs.map((user) => (

                        <PayrollTableList 
                            key={user.id}
                            user={user}
                        />

                    ))

                : null}

                {searchPayroll ?

                    filteredSearch.map((user) => (

                        <PayrollTableList 
                            key={user.id}
                            user={user}
                        />

                    ))

                : null}

            </tbody>

        </table>

    </div>

  )

}

export default PayrollTable