const UsersUtililyBtn = ({ label, icon, backgroundColour, onClick }) => {

    return (
  
      <button className="btn_main" style={backgroundColour} onClick={onClick}>
          {icon}
          <p className="btn_main_label">{label}</p>
      </button>
  
    )
  
  }
  
  export default UsersUtililyBtn