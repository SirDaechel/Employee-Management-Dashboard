import { NavLink } from "react-router-dom";

const SideTab = ({ icon, label, onClick, theClass, theLink }) => {

    return (
  
      <div onClick={onClick}>
        <NavLink to={theLink} className={`tabFlex ${theClass}`}>
          <div>{icon}</div> 
          <p className="tablabel">{label}</p>
        </NavLink>
      </div>
  
    )
  }
  
  export default SideTab