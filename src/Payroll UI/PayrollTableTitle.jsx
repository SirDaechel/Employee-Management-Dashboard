import arrowupIcon from "../../public/images/arrowupIcon"
import arrowdown from "../../public/images/arrowdown"

const PayrollTableTitle = () => {

  return (

    <tr>

      <th>
        <div className="name">
            <p className="name_title_txt">Name</p>
        </div>
      </th>

      <th>
        <div className="username">
          <p className="username_txt">Hours</p>
        </div>
      </th>

      <th>
        <div className="email">
          <p className="email_txt">Gross Wage</p>
        </div>
      </th>

      <th>
        <div className="role">
          <p className="role_txt">Statutory Wage</p>
        </div>
      </th>

      <th>
        <div className="phone">
          <p className="phone_txt">Deductions</p>
        </div>
      </th>

      <th>
        <div className="wage">
            <p className="wage_txt">Net Wage</p>
        </div>
      </th>

      <th>
        <div className="workinghours">
            <p className="workinghours_txt">Status</p>
        </div>
      </th>

    </tr>

  )

}

export default PayrollTableTitle