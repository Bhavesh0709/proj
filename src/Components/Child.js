import React, {useState} from 'react'

function Child(props) {
 
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  }

  const handleOnSubmit = () => {
    props.temp1(value);
  }
  return (
    <div>
        <input type="text" onChange={handleOnChange} value={value}/>
        <button onClick={handleOnSubmit}>Submit</button>
    </div>
  )
}

export default Child