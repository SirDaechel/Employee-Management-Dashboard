const AdminProfilePic = ({ topmargin }) => {

  return (

    <div className="usermain" style={{marginTop: topmargin}}>

      <img className="user_photo" src="../public/images/adminPhoto.png" alt="user photo" />

      <div className="user_name_role">
        <p className="user_name">David Okpala</p>
        <p className="userrole">Administrator</p>
      </div>


    </div>

  )
}

export default AdminProfilePic