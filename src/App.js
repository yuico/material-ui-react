import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
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
