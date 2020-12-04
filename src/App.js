import { Home } from './Components';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
// import './layout.scss'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
