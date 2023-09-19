import walletIcon from '../../public/images/walletIcon'


const PayrollDate = () => {

  return (

    <div className='payroll_date_cont'>

        <div className="payroll_date_main">

            <div className="wallet_icon">
                {walletIcon}
            </div>

            <p className="payroll_date_txt">
                Next Payroll
            </p>

            <p className="payroll_date">
                30/10/2023
            </p>

            <p className="payroll_date_run">
                <b>Payroll Run:</b> <br></br>30-10-2023 to 10-11-2023
            </p>

        </div>
        
    </div>

  )

}

export default PayrollDate