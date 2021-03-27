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
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 10,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
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
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <Typography 
              variant="h2"
              component="div"
            >
              Welcome to MUI
            </Typography>
            <Typography 
              /* variant="subtitle1" */
              variant="body1"
            >
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center" style={{ margin: 10}}>
              <Grid item>
                <Paper style={{ height: 75, width: 50, }}/>
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50, }}/>
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50, }}/>
              </Grid>
            </Grid>
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
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
