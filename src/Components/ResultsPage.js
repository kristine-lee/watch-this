import React from 'react';
import { Card, CircularProgress, Grid, makeStyles, Container } from '@material-ui/core';
// import Skeleton from '@material-ui/lab/Skeleton';

import ResultCard from './ResultCard';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
   },
  card: {
    maxWidth: 345,
    textAlign: 'center'
  }
}
));

const ResultsPage = (props) => {

  const { results } = props.location.state;

  const classes = useStyles();

  return (
    <Container maxwidth="lg" justify="center" className={classes.root}>
      <Grid container justify="center" spacing={2} >
          {results ?  results.map((result) =>
            (<Grid item xs={12} sm={6} md={4} className={classes.card}><ResultCard key={result._id} id={result.imdbID} title={result.Title} image_src={result.Poster} /></Grid>)):
            <CircularProgress color="secondary" />}
      <ul>
      </ul>
     </Grid>
    </Container>
  )
}

export default ResultsPage;

//TODO: replace spinner with skeleton. having issues with importing it
