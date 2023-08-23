const SideTab = ({ icon, label, onClick, theClass }) => {


    return (
  
      <div className={`tabFlex ${theClass}`} onClick={onClick}>
          <div>{icon}</div> 
          <p className="tablabel">{label}</p>
      </div>
  
    )
  }
  
  export default SideTab