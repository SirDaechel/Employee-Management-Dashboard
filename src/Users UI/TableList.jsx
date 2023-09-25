import { useEffect, useRef } from "react"
import moreoptionsIcon from "../../public/images/moreoptionsIcon";
import edituserIcon from "../../public/images/edituserIcon";
import timeIcon from "../../public/images/timeIcon";
import trashIcon from "../../public/images/trashIcon";
import restoreIcon from "../../public/images/restoreIcon";


const TableList = ({ user, handleIndividualUser, clickedOptionsIcon, showUserOptions, setShowUserOptions, theUserID, editUser, clickedOnDeleteUser, archiveAUser, restoreAUser, activeUserTab }) => {

  const moreOptionsBtnRef = useRef(null);

  const { id, name, username, email, role, phone, wage, workinghours, age, checked } = user;

  return (

        <tr>

          <td>
            <input className="table_checkbox" type="checkbox" onChange={handleIndividualUser} checked={checked} id={id} />
          </td>

          <td>
            <div className="namelist">
              <p className="namelist_txt">{name}</p>
            </div>
          </td>

          {/* <td>
            <div className="usernamelist">
              <p className="usernamelist_txt">{username}</p>
            </div>
          </td> */}

          <td>
            <div className="emaillist">
              <p className="emaillist_txt">{email}</p>
            </div>
          </td>

          <td>
            <div className="rolelist">
              <p className="rolelist_txt">{role}</p>
            </div>
          </td>

          <td>
            <div className="phonelist">
              <p className="phonelist_txt">{phone}</p>
            </div>
          </td>

          <td>
            <div className="wagelist">
              <p className="wagelist_txt">${wage}</p>
            </div>
          </td>

          <td>
            <div className="hoursperweeklist">
              <p className="hoursperweeklist_txt">{workinghours} / week</p>
            </div>
          </td>

          <td>
            <div className="agelist">
              <p className="agelist_txt">{age} y/o</p>
            </div>
          </td>

          <td>
            <div className="more_options" id={id} onClick={() => clickedOptionsIcon(id)}>{moreoptionsIcon}</div>

            <div ref={moreOptionsBtnRef} className="edit_delete_user" style={{display: theUserID === id && showUserOptions ? "block" : "none"}}>

              <div className="edit_delete_user_cont">

                <div className="edit_delete_user_options">

                  <div className="edit_user" style={{display: activeUserTab === 2 || activeUserTab === 3 ? "none" : "flex"}} onClick={editUser}>
                    {edituserIcon}
                    <p className="edit_user_txt">Edit</p>
                  </div>

                  <div className="edit_user" style={{display: activeUserTab === 0 ? "none" : "flex"}} onClick={restoreAUser}>
                    <div className="actions_icon restore_icon">{restoreIcon}</div>
                    <p className="edit_user_txt">Restore</p>
                  </div>

                  <div className="edit_user" style={{display: activeUserTab === 2 ? "none" : "flex"}} onClick={archiveAUser}>
                    {timeIcon}
                    <p className="edit_user_txt">Archive</p>
                  </div>

                  <div className="delete_user" style={{display: activeUserTab === 3 ? "none" : "flex"}} onClick={clickedOnDeleteUser}>
                    {trashIcon}
                    <p className="delete_user_txt">Delete</p>
                  </div>

                </div>

              </div>
              
            </div>
          </td>
          
        </tr>

  )

}

export default TableList