import PayrollMetricCard from "./PayrollMetricCard"
import userIcon from '../../public/images/usericon'
import arrowUp from '../../public/images/arrowup2'
import arrowDown from '../../public/images/arrowdown2'
import timeIcon from '../../public/images/timeIcon'
import walletIcon from '../../public/images/walletIcon'
import moneyIcon from '../../public/images/moneyIcon'
import PayrollDate from "./PayrollDate"
import PayrollTable from "./PayrollTable"
import SearchBarGlobal from "../SearchBarGlobal"
import PayrollPagination from "./PayrollPagination"
import { useState } from "react"

const PayrollMain = ({ users }) => {

  // Payroll pagination set up
  const [currentPage, setCurrentPage] = useState(1);
  const [staffsPerPage, setStaffsPerPage] = useState(10);
  const [searchPayroll, setSearchPayroll] = useState('');
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(users.length / staffsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Payroll figures set up
  const deduction = 750;

  let totalDeduction = deduction * users.length

  // Get total wage or payroll
  const payrollCost = users.reduce((accumulator, user) => {
    return accumulator + Number(user.wage)
  }, 0)

  // Format Payroll Cost
  let formattedPayroll;

  if (payrollCost.toString().length === 6) {
  formattedPayroll = payrollCost.toString().slice(0, 3) + 'K';
  } else if (payrollCost.toString().length === 7) {
  formattedPayroll = payrollCost.toString().slice(0, 6) + 'M';
  } else {
  formattedPayroll = payrollCost.toString();
  }

  // Get net salary
  const netSalary = users.reduce((accumulator, user) => {
    return accumulator + Number(user.wage - deduction)
  }, 0)

  // Format net salary
  let formattedNetSalary;

  if (netSalary.toString().length === 6) {
  formattedNetSalary = netSalary.toString().slice(0, 3) + 'K';
  } else if (netSalary.toString().length === 7) {
  formattedNetSalary = netSalary.toString().slice(0, 6) + 'M';
  } else {
  formattedNetSalary = netSalary.toString();
  }

  // Format total deduction
  let formattedTotalDeduction;

  if (totalDeduction.toString().length === 5) {
  formattedTotalDeduction = totalDeduction.toString().slice(0, 2) + 'K';
  } else if (totalDeduction.toString().length === 6) {
  formattedTotalDeduction = totalDeduction.toString().slice(0, 3) + 'K';
  } else if (totalDeduction.toString().length === 7) {
  formattedTotalDeduction = totalDeduction.toString().slice(0, 6) + 'M';
  } else {
  formattedTotalDeduction = totalDeduction.toString();
  }

  // Calculate total working hours
  const totalWorkingHours = users.reduce((accumulator, user) => {
    return accumulator + Number(user.workinghours)
  }, 0);


  //Get current staffs
  const endIndex = currentPage * staffsPerPage;
  const startIndex = endIndex - staffsPerPage;
  const currentStaffs = users.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredSearch = users.filter((user) => (user.name.toLowerCase()).includes(searchPayroll.toLowerCase()));

  return (

    <div className="payroll_page">

      <div className="payroll_top_data">

        <div className="payroll_metrics_card">

          <PayrollMetricCard 
              topText={"Total Staffs"}
              icon={userIcon}
              figure={users.length}
              arrow={arrowDown}
              percentage={"1.01%"}
              percent={"red"}
          />

          <PayrollMetricCard 
              topText={"Total Working Hours"}
              icon={timeIcon}
              figure={`${totalWorkingHours} Hours`}
              arrow={arrowDown}
              percentage={"0.45%"}
              percent={"red"}
          />

          <PayrollMetricCard 
              topText={"Payroll Cost"}
              icon={moneyIcon}
              figure={`$${formattedPayroll}`}
              arrow={arrowUp}
              percentage={"3.13%"}
              percent={"green"}
          />

          <PayrollMetricCard 
              topText={"Net Salary"}
              icon={walletIcon}
              figure={`$${formattedNetSalary}`}
              arrow={arrowUp}
              percentage={"2.45%"}
              percent={"green"}
          />

          <PayrollMetricCard 
              topText={"Deductions"}
              icon={moneyIcon}
              figure={`$${formattedTotalDeduction}`}
              arrow={arrowUp}
              percentage={"1.35%"}
              percent={"green"}
          />

          <PayrollMetricCard 
              topText={"Statutory Pay"}
              icon={moneyIcon}
              figure={"$10K"}
              arrow={arrowUp}
              percentage={"2.76%"}
              percent={"red"}
          />

        </div>

        <PayrollDate />

      </div>

      <div className="payroll_last_data">

        <SearchBarGlobal 
          searchBar={searchPayroll}
          setSearchBar={setSearchPayroll}
          placeholder={"Search staff payroll"}
        />

        <div className="payroll_table_pagination">

          <PayrollTable
            filteredSearch={filteredSearch}
            searchPayroll={searchPayroll}
            currentStaffs={currentStaffs}
          />

          <PayrollPagination 
            paginate={paginate}
            pageNumbers={pageNumbers}
            totalUsers={users.length}
            staffsPerPage={staffsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchPayroll={searchPayroll}
          />

        </div>


      </div>

    </div>

  )
  
}

export default PayrollMain