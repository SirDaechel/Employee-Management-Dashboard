const AddUserInput = ({ label, w100, type, placeholder, inputState, setInputState, displayError, firstNameRef, setFocus, setBlur, isValid, instructionMsg }) => {

    return (

        <div className="input_cont">

            <p className={"label_txt"}>{label} <span className="required">*</span><span style={{color: "red"}}>{displayError}</span></p>

            <input ref={firstNameRef} autoComplete="off" className={`adduser_input ${w100}`} value={inputState} required type={type} placeholder={placeholder} onFocus={setFocus} onBlur={setBlur} onChange={(e) => setInputState(e.target.value)} aria-invalid={isValid ? "false" : "true"} aria-describedby="uidnote" />

            <div className="instructions_cont">
                
                <div id="uidnote" className={setFocus && inputState && !isValid ? "instructions" : "offscreen"}>
                    {instructionMsg}
                </div>

            </div>
            
        </div>
    
      )

  }
  
  export default AddUserInput