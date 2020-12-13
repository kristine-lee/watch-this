// import { Home } from './Components';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Routes from './Routes'

import { MoviesProvider, SingleMovieProvider } from './context'

// import './layout.scss'
import './App.css'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoviesProvider>
        <SingleMovieProvider>
      <div className="container">
        <Routes />
      </div>
        </SingleMovieProvider>
      </MoviesProvider>
    </ThemeProvider>
  );
}

export default App;
