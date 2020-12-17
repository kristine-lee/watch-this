import React from "react";
import { Redirect } from "react-router-dom";
import SearchBar from './SearchBar';
import { Grid, Paper, CssBaseline, Divider } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import front from '../assets/pexels-ketut-subiyanto-4350099.jpg';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    marginLeft: '64px',
    marginRight: '64px'
   },
   header: {
    padding: "4vw",
    textAlign: "center",
    position: "relative"
   },
   cover: {
    objectFit: 'cover',
    width: '100%',
    filter: `blur(0.5px)`
   },
   row: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'flex-start'
   },
  form: {
    width: '100%',
    // marginTop: theme.spacing(1),
  }
}
));

const FrontText = React.memo(() => {
  return (
    <h2 className="type-intro anim-typewriter">Movie Search, All Redefined Just For You</h2>
  )
})


const Home = () => {
  const [results, setResults] = React.useState([]);
  const [redirectToResults, setRedirect] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    if (results.length > 0){
      setRedirect(true);
    }
  }, [results])

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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={5}>
          <Paper elevation={2}>
            <img className={classes.cover} src={front} alt="smiling woman front cover" />
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} sm={6}>
        <div className={classes.row}>
           <FrontText />
           <SearchBar setResults={setResults} />
        </div>
        </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default Home;
