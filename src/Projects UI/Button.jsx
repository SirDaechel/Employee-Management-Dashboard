import { NavLink } from "react-router-dom";

const Button = ({ label, icon, backgroundColour, onClick, linkto }) => {

  return (

    <button>

        <NavLink to={linkto} className="btn_main" style={backgroundColour} onClick={onClick}>
            {icon}
            <p className="btn_main_label">{label}</p>
        </NavLink>

    </button>

  )

}

export default Button