import React from 'react';
import { Card, CircularProgress, Grid, makeStyles, Container } from '@material-ui/core';
// import Skeleton from '@material-ui/lab/Skeleton';

import ResultCard from './ResultCard';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
   },
  card: {
    maxWidth: 345
  }
}
));

const ResultsPage = (props) => {

  const { results } = props.location.state;

  // console.log("RESULTS", results)

  const classes = useStyles();

  return (
    <Container maxwidth="lg" justify="center" className={classes.root}>
      <Grid container justify="center" >
          {results ?  results.map((result) =>
            (<Grid item xs={3} className={classes.card}><ResultCard key={result._id} id={result.imdbID} title={result.Title} image_src={result.Poster} /></Grid>)):
            <CircularProgress color="secondary" />}
      <ul>
      {/* {results && results.map((result, index) => <li key={index}><Link to={`/movie/${result.id}`}> {result.title} </Link></li>)} */}
      </ul>
     </Grid>
    </Container>
  )
}

export default ResultsPage;

//TODO: replace spinner with skeleton. having issues with importing it
