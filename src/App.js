import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          startIcon={<SaveIcon/>}
          size="large"
          style={{
            fontsize: 15
          }}
          herf="#"
          onClick={() => alert('test')} 
          variant="contained" 
          color="secondary"
/*           disabled */
        >
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
