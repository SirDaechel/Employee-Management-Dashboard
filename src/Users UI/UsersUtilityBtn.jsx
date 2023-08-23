const UsersUtililyBtn = ({ label, icon, backgroundColour, onClick }) => {

    return (
  
      <button className="btn_main" style={backgroundColour} onClick={onClick}>
          <p className="btn_main_label">{label}</p>
          {icon}
      </button>
  
    )
  
  }
  
  export default UsersUtililyBtn