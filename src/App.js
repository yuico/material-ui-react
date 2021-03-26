import React, {useState, useEffect} from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/Styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 10,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
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
    </ThemeProvider>
  );
}

export default App;
