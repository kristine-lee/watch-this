import React from "react";
import { Redirect } from "react-router-dom";
import SearchBar from './SearchBar';
import ResultsPage from './ResultsPage';
import { Grid, Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import front from '../assets/pexels-ketut-subiyanto-4350099.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
   },
   header: {
    padding: "4vw",
    textAlign: "center",
    position: "relative"
   },
  form: {
    width: '100%',
    // marginTop: theme.spacing(1),
  }
}
));


const Home = () => {
  const [results, setResults] = React.useState([]);
  const [redirectToResults, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (results.length > 0){
      setRedirect(true);
    }
  }, [results])

  const classes = useStyles();

  if (redirectToResults && results.length > 0) {
    return (<Redirect to={{
      pathname: "/results",
      state: { results: results }
    }}
  />)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxwidth="lg" justify="center" alignItems="center" className={classes.root}>
      <img className="cover" src={front} alt="smiling woman front cover" />
        {/* <Grid container spacing={2}>
          <Grid item xs={12} className={classes.header}>
            <h1 style={{fontSize: 70}}>Watch This!</h1>
          </Grid> */}
          <Grid container justify="flex-end">
            <Grid item xs={12}>
              <h3 className="type-intro anim-typewriter">Movie Search, Redefined For You</h3>
            </Grid>
          </Grid>
        {/* </Grid> */}
     <div className="row">
      <SearchBar setResults={setResults} />
      {/* {results && <ResultsPage results={results} />} */}
    </div>
    </Container>
  </React.Fragment>
  )
}

export default Home;
