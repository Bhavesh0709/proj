import '../App.css'
import TextField from '@mui/material/TextField'
import { Button, useThemeProps } from '@mui/material';
import {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

function Input() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTasks = () => {
    if(inputValue.trim() !== '') {
      const newArr = [...todos, inputValue];
      setTodos(newArr);
      setInputValue('');
    } 
  }

  const handleDeleteTasks = (index) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <div className='text-center mt-5'>
        <TextField id="outlined-basic" 
          label="Enter Tasks" 
          variant="outlined"
          onChange={handleInputChange}
          value={inputValue}
          />
        <Button variant="contained" className='ms-5' onClick={handleAddTasks}>Submit</Button>
    
        <List>
          {todos.map((value,index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={value} />
                <button onClick={() => handleDeleteTasks(index)}> Delete</button>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      
    </div>
  )
}

export default Input