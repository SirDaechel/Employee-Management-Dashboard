const PayrollTableList = ({ user, filteredSearch }) => {

  const { id, name, wage, workinghours, statutorywage, paystatus } = user;

  const deduction = 750

  return (

    <tr>

      <td>
        <div className="namelist">
          <p className="namelist_txt">{name}</p>
        </div>
      </td>

      <td>
        <div className="hoursperweeklist">
          <p className="hoursperweeklist_txt">{workinghours} hours per week</p>
        </div>
      </td>

      <td>
        <div className="wagelist">
          <p className="wagelist_txt">${wage}</p>
        </div>
      </td>

      <td>
        <div className="wagelist">
          <p className="wagelist_txt">${statutorywage}</p>
        </div>
      </td>

      <td>
        <div className="wagelist">
          <p className="wagelist_txt payroll_table_deduction">{`-${deduction}`}</p>
        </div>
      </td>

      <td>
        <div className="wagelist">
          <p className="wagelist_txt">${Number(wage) - deduction}</p>
        </div>
      </td>

      <td>
        <div className="wagelist payroll_table_status" style={{backgroundColor: paystatus === "Paid" ? "#B4E197" : paystatus === "Unpaid" ? "#FA9884" : paystatus === "Pending" ? "#EEEEEE" : paystatus}}>
          <p className="wagelist_txt" style={{color: paystatus === "Paid" ? "#4E944F" : paystatus === "Unpaid" ? "#D21312" : paystatus === "Pending" ? "#73777B" : paystatus}}>{paystatus}</p>
        </div>
      </td>
          
    </tr>

  )

}

export default PayrollTableList