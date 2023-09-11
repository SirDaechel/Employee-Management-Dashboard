const InputBox = ({ label, w100, addProjectInput, setAddProjectInput, type, placeholder }) => {

  return (

    <div className="add_project_input">

        <p className={"project_label_txt"}>{label}</p>

        <input autoComplete="off" className={`project_input ${w100}`} value={addProjectInput} required type={type} placeholder={placeholder} onChange={(e) => setAddProjectInput(e.target.value)} />

    </div>

  )

}

export default InputBox