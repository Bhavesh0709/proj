import React, {useState}  from 'react'
import Options from './Options';
import Button from '@mui/material/Button';

function Questions(props) {
  const [display, setDisplay] = useState(false);
  const [counter, setCounter] = useState(0);
  const questions = props.questions;
  const selectedAnswers = [];
  const validate = (selectedAnswers, val) => {
    let isReplaced = false;
    const presentValue = val.val;
    const presentQuestionNo = val.questionNo;
    for (let i=0;i < selectedAnswers.length; i++) {
        if (selectedAnswers[i].questionNo == presentQuestionNo) {
            selectedAnswers[i].val = presentValue;
            isReplaced = true;
            break;
        }
    }
    return isReplaced;
  }
  const pull_data = (val) => {
    const checkIfReplaced = validate(selectedAnswers, val);
    if (!checkIfReplaced) {
        selectedAnswers.push(val);
    }
  }
  const handleOnSubmit = () => {
    let count = 0;
    for(let i=0;i<selectedAnswers.length;i++) {
        if(selectedAnswers[i].val === questions[i].answer)
        {
            count++;
            setCounter(count);
        }
       
    }
    setDisplay(true);
  }
  return (
    <div>
        <div className='questionsDiv'>
            {
                questions.map((data,index) => (
                    <>
                        <h3 className='question mt-3'> {data.question} </h3>
                        <Options 
                            options = {data.options} 
                            questionNo = {data.questionNo}
                            childData = {pull_data}
                        />
                    </>
                ))
            }
            <Button variant="contained" className='mt-5' onClick={handleOnSubmit}> Submit</Button>
            {
                 display &&
                 <div className='mt-5'>
                     <h3>Correct Answers - {counter}  / {questions.length}</h3>
                     {
                        questions.map((val, ind) => (
                            <>
                                <h3>{val.questionNo} - {val.question}</h3>
                                <h4>{val.answer}</h4>
                            </>
                        ))
                     }
                </div>
            }
        </div>
    </div>
  )
}

export default Questions