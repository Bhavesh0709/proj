import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Options(props) {
  const options = props.options;
  const questionNo = props.questionNo;
  const handleOnChange = (val) => {
    const selectedAnswer = {val, questionNo};
    props.childData(selectedAnswer);
  }
  return (
    <div>
         <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {
                    options.map((val) => (
                        <FormControlLabel 
                            value={val} 
                            control={<Radio />} 
                            label={val} 
                            onChange={() => handleOnChange(val)}
                        />
                    ))
                }
                
            </RadioGroup>
         </FormControl>
    </div>
  )
}

export default Options