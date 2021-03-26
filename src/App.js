import React, {useState, useEffect} from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return(
    <FormControlLabel 
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary"
        inputProps={{
          'aria-label' : 'secondary checkbox' 
        }}

      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          /* variant="filled" */
          variant="outlined"
          color="secondary"
          /* type="date" */
          /* type="time" */
          type="email"
          label="The email"
          /* value="test@email.com" */
          placeholder="test@email.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button 
  /*           startIcon={<SaveIcon/>} */
            endIcon={<SaveIcon/>}
            size="large"
            style={{
              fontsize: 15
            }}
            herf="#"
            onClick={() => alert('test')}   
  /*           disabled */
          >
            Save
          </Button>
          <Button 
            endIcon={<DeleteIcon/>}
            size="large"
            style={{
              fontsize: 15
            }}
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
