import { useEffect, useState } from 'react'
import closeIcon from '../../public/images/thecloseicon'

const TagsInput = ({ projectStacks, setProjectStacks }) => {

  const [inputValue, setInputValue] = useState('');

  const addTag = (e) => {

    if(e.key === 'Enter') {
        e.preventDefault()

        // Add the input value to the items array
        if (inputValue.trim() !== '') {
            setProjectStacks([...projectStacks, inputValue.trim()]);
            setInputValue("");
        }
        
    }

  }

  const removeTag = (indexToRemove) => {
    setProjectStacks(projectStacks.filter((stack, index) => index !== indexToRemove));
  }

  return (

    <div className='tags_section'>

        <div className="date_input_title">Project Stack</div>

        <div className="tags_cont">

          <ul className='tags_list_body'>
            {projectStacks.map((stack, index) => (

              <li className="tag_list" key={index}>
                {stack}
                <span className="delete_tag_list" onClick={() => removeTag(index)}>{closeIcon}</span>
              </li>

            ))}
          </ul>

          <input type="text" className='tag_input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={addTag} placeholder='type and press enter...'/>

        </div>
        
    </div>

  )

}

export default TagsInput