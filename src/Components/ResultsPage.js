import React from 'react';
import { Card, Grid, makeStyles, Container } from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
  const [singleMovie, setSingleMovie] = React.useState({});

  const classes = useStyles();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const movieDetails = await axios.get(`/api/:id`, {
        params: {
          externalId: props.id
        }
      })
      if (!movieDetails.data) {
        throw new Error("Was able to communicate with the back end, but there's an error!")
      } else {
        setSingleMovie(movieDetails.data);
      }
    } catch (error){
      alert("There was an error!")
    }
  }

  return (
    <Container maxwidth="lg" justify="center" className={classes.root}>
      <Grid container justify="center" >
        {/* <Grid item xs={3} className={classes.card}> */}
        {results && results.map((result, index) =>
        <Grid item xs={3} className={classes.card}>
          <ResultCard key={index} id={result.id} title={result.title} poster_path={result.poster_path} handleClick={handleClick} />
        </Grid>
        )}
      <ul>
      {/* {results && results.map((result, index) => <li key={index}><Link to={`/movie/${result.id}`}> {result.title} </Link></li>)} */}
      </ul>
     </Grid>
    </Container>
  )
}

export default ResultsPage;

//TODO: need to separate link from the title
//maybe have like a preview component on this one with title and poster
//and when someone clicks it sends axios request -> singlemovie
