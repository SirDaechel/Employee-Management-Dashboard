import { useState } from "react"
import PayrollTableTitle from "./PayrollTableTitle"
import PayrollTableList from "./PayrollTableList"

const PayrollTable = ({ currentStaffs, filteredSearch, searchPayroll }) => {
  
  return (

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
                        filteredSearch={filteredSearch}
                    />

                ))

            : null}

            {searchPayroll ?

                filteredSearch.map((user) => (

                    <PayrollTableList 
                        key={user.id}
                        user={user}
                        filteredSearch={filteredSearch}
                    />

                ))

            : null}

        </tbody>

    </table>

  )

}

export default PayrollTable