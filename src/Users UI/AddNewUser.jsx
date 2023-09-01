import { useState, useRef } from "react"
import AddUserInput from "./AddUserInput"
import thecloseicon from "../../public/images/thecloseicon"
import arrowdown from "../../public/images/arrowdown"
import RoleDropdown from "./RoleDropdown"
import errorIcon from "../../public/images/errorIcon"

const AddNewUser = ({ users, setUsers, openAddUserModal, setShowOverlay, editAUser, userRole, setUserRole, firstName, lastName, userName, eMail, wage, age, phoneNo, workingHours,  setFirstName, setLastName, setUserName, seteMail, setWage, setAge, setPhoneNo, setWorkingHours, firstNameRef, errRef, errMsg, setFirstNameFocus, setLastNameFocus, setUserNameFocus, setEmailFocus, setWageFocus, setAgeFocus, setPhoneNoFocus, setWorkingHoursFocus, validFirstName, validLastName, validUserName, validEmail, validWage, validAge, validPhoneNo, validWorkingHours, validRole, closeUserModal, showRoleDropdown, setShowRoleDropdown, isSubmitDisabled, setIsSubmitDisabled }) => {

  //toggle assign role dropdown menu
  const roleDropdown = (e) => {

    e.preventDefault();

    setShowRoleDropdown(!showRoleDropdown);

  };

  //add user
  const addUser = () => {

    const id = users.length ? users[users.length - 1].id + 1 : 1;

    const myNewUser = {
      id: id,
      name: `${firstName} ${lastName}`,
      firstname: firstName,
      lastname: lastName,
      username: userName,
      email: eMail,
      role: userRole,
      phone: phoneNo,
      wage: `${wage}`,
      workinghours: `${workingHours}`,
      age: `${age}`,
      checked: false
    }

    const listedUsers = [...users, myNewUser]

    setUsers(listedUsers)

  }

  //submit added user
  const submitUser = () => {

    addUser();
    setFirstName("");
    setLastName("");
    seteMail("");
    setUserRole("Assign user role");
    setWage("");
    setAge("");
    setPhoneNo("");
    setWorkingHours("");
    closeUserModal();

  }

  

  return (

    <div style={{display: openAddUserModal ? "block" : "none"}}>
    
        <div className="close_add_user_modal" onClick={() => closeUserModal()}>{thecloseicon}</div>

        <div className="addUser_cont" >
            
            <form className="adduser_form">

                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <div className="first_lastname">

                <AddUserInput 
                    label={"First Name"}
                    type={"text"}
                    placeholder={"firstname"}
                    inputState={firstName}
                    setInputState={setFirstName}
                    firstNameRef={firstNameRef}
                    setFocus={() => setFirstNameFocus(true)}
                    setBlur={() => setFirstNameFocus(false)}
                    isValid={validFirstName}
                    instructionMsg={<div className="input_error_txt"><span className="error_icon">{errorIcon}</span><p>3 to 24 characters.<br />
                    Only letters are allowed.</p></div>}
                />

                <AddUserInput 
                    label={"Last Name"}
                    type={"text"}
                    placeholder={"lastname"}
                    inputState={lastName}
                    setInputState={setLastName}
                    setFocus={() => setLastNameFocus(true)}
                    setBlur={() => setFirstNameFocus(false)}
                    isValid={validLastName}
                    instructionMsg={<div className="input_error_txt"><span className="error_icon">{errorIcon}</span><p>3 to 24 characters.<br />
                    Only letters are allowed.</p></div>}
                />

                </div>

                <AddUserInput 
                    label={"User Name"}
                    type={"text"}
                    placeholder={"username"}
                    w100={"w100"}
                    inputState={userName}
                    setInputState={setUserName}
                    setFocus={() => setUserNameFocus(true)}
                    setBlur={() => setUserNameFocus(false)}
                    isValid={validUserName}
                    instructionMsg={<div className="input_error_txt"><span className="error_icon">{errorIcon}</span><p>3 to 24 characters. Only letters, numbers, underscores, hyphens are allowed.</p></div>}
                />

                <AddUserInput 
                    label={"Email Address"}
                    type={"email"}
                    placeholder={"email address"}
                    w100={"w100"}
                    inputState={eMail}
                    setInputState={seteMail}
                    setFocus={() => setEmailFocus(true)}
                    setBlur={() => setEmailFocus(false)}
                    isValid={validEmail}
                    instructionMsg={<div className="email_input_error_txt"><span className="error_icon">{errorIcon}</span><p>Email must include "@example.com".</p></div>}
                />

                <div className="user_role_dropdown">

                <div className="input_cont">
                    <p className={"label_txt"}>Assign Role <span className="required">*</span></p>

                    <button className="user_role" onClick={(e) => roleDropdown(e)}> 
                        <p>{userRole ? userRole : "Assign user Role"}</p>
                        {arrowdown}
                    </button>
                </div>

                {showRoleDropdown ? <RoleDropdown 
                    users={users}
                    userRole={userRole}
                    setUserRole={setUserRole}
                    setShowRoleDropdown={setShowRoleDropdown}
                /> : null}
                
                </div>

                <div className="age_wage">

                    <AddUserInput
                        label={"Wage"}
                        type={"number"}
                        placeholder={"user wage"}
                        inputState={wage}
                        setInputState={setWage}
                        // setFocus={() => setWageFocus(true)}
                        // setBlur={() => setWageFocus(false)}
                        isValid={validWage}
                    />

                    <AddUserInput 
                        label={"Age"}
                        type={"number"}
                        placeholder={"user age"}
                        w100={"w100"}
                        inputState={age}
                        setInputState={setAge}
                        // setFocus={() => setAgeFocus(true)}
                        // setBlur={() => setAgeFocus(false)}
                        isValid={validAge}
                    />
                    
                </div>

                <div className="phone_hours">

                    <AddUserInput 
                        label={"Phone number"}
                        type={"tel"}
                        placeholder={"phone number"}
                        w100={"w100"}
                        inputState={phoneNo}
                        setInputState={setPhoneNo}
                        setFocus={() => setPhoneNoFocus(true)}
                        setBlur={() => setPhoneNoFocus(false)}
                        isValid={validPhoneNo}
                        instructionMsg={<div className="input_error_txt"><span className="error_icon">{errorIcon}</span><p>Only numbers are allowed.</p></div>}
                    />

                    <AddUserInput 
                        label={"Working Hours"}
                        type={"number"}
                        placeholder={"hours per week"}
                        w100={"w100"}
                        inputState={workingHours}
                        setInputState={setWorkingHours}
                        // setFocus={() => setWorkingHoursFocus(true)}
                        // setBlur={() => setWorkingHoursFocus(false)}
                        isValid={validWorkingHours}
                    />

                </div>

                {/* <button disabled={isSubmitDisabled} className="add_user_submit" style={{background: isSubmitDisabled ? "#ABABAB" : "#6C63FF"}} onSubmit={(e) => e.preventDefault()} onClick={() => submitUser()}>{editAUser ? "Edit user" : "Add User"}</button> */}


                <button disabled={isSubmitDisabled} className="add_user_submit" style={{background: isSubmitDisabled ? "#ABABAB" : "#6C63FF", cursor: isSubmitDisabled ? "default" : "pointer"}} onSubmit={(e) => e.preventDefault()} onClick={() => submitUser()}>{editAUser ? "Edit user" : "Add User"}</button>

                <p className="requird_note">"<span className="required">*</span>" indicates the input field must be filled</p>

            </form>

        </div>

    </div>

  )

}

export default AddNewUser