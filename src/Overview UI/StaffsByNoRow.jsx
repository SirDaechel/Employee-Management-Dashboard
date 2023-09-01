import usericon from "../../public/images/usericon"

const StaffsByNoRow = ({ title, length }) => {

  return (

    <div className="staff_row">
      <div className="staff_row_data">
        <div className="dept_summary_icon">
          {usericon}
        </div>
        <p className="staff_row_txt">{title}</p>
      </div>
      <p className="staff_row_sn" style={{background: "#ECC5FB"}}>{length}</p>
    </div>

  )

}

export default StaffsByNoRow