import React, {useState, useEffect} from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return(
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
