import { useState } from 'react'
import closeIcon from '../../public/images/thecloseicon'

const TagsInput = () => {

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTag = (e) => {

    if(e.key === 'Enter') {
        e.preventDefault()

        // Add the input value to the items array
        if (inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
        
    }

  }

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((tag, index) => index !== indexToRemove));
  }

  return (

    <div className='tags_section'>

        <div className="date_input_title">Project Stack</div>

        <div className="tags_cont">


            <ul className='tags_list_body'>
                {tags.map((tag, index) => (

                    <li className="tag_list" key={index}>
                        {tag}
                        <span className="delete_tag_list" onClick={() => removeTag(index)}>{closeIcon}</span>
                    </li>

                ))}
            </ul>

            <input type="text" className='tag_input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={addTag} placeholder='type something...'/>

        </div>
        
    </div>

  )

}

export default TagsInput