// import { Home } from './Components';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Routes from './Routes'


import './App.css'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
