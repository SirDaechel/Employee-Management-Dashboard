const InputBox = ({ label, addProjectInput, setAddProjectInput, type, placeholder }) => {

  return (

    <div className="add_project_input">

        <p className={"project_label_txt"}>{label}</p>

        <input autoComplete="off" className={`project_input`} value={addProjectInput} required type={type} placeholder={placeholder} onChange={(e) => setAddProjectInput(e.target.value)} />

    </div>

  )

}

export default InputBox