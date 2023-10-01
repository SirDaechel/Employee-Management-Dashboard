import UsersSearchBar from "./UsersSearchBar"
import UsersUtililyBtn from "./UsersUtilityBtn"
import exportIcon from "../../public/images/exportIcon"
import printIcon from "../../public/images/printIcon"
import addauser from "../../public/images/addauser"

const UsersUtilities = ({ users, search, setSearch, setShowOverlay, setOpenAddUserModal }) => {

  const userModalOpen = () => {
    setShowOverlay(true);
    setOpenAddUserModal(true);
  }

  return (

    <div className="utilities_body">

        <UsersSearchBar 
            users={users}
            search={search}
            setSearch={setSearch}
        />

        <div className="utilities_btn">

            <UsersUtililyBtn 
                label={"Export"}
                icon={exportIcon}
                backgroundColour={{backgroundColor: "#FFFFFF", color: "#1D1929"}}
            />

            <UsersUtililyBtn 
                label={"Print"}
                icon={printIcon}
                backgroundColour={{backgroundColor: "#FFFFFF", color: "#1D1929"}}
            />

            <UsersUtililyBtn 
                label={"Create"}
                icon={<div className="add_user_icon">{addauser}</div>}
                backgroundColour={{backgroundColor: "#6C63FF", color: "#FFFFFF"}}
                onClick={() => userModalOpen()}
            />

        </div>

    </div>
  )

}

export default UsersUtilities