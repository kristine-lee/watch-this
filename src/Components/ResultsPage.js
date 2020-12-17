import React from 'react';
import {SingleMovieContext} from '../context';
import { Card, Grid, makeStyles, Container } from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
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
  // const [movieId, setMovieId] = React.useState(0)
  const [singleMovie, setSingleMovie] = React.useState(null);
  // const [showSingleMovie, setShowSingleMovie] = React.useState(false);

  console.log("RESULTS", results)

  const classes = useStyles();

  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const movieDetails = await axios.get(`/api/movies/:id`, {
  //       params: {
  //         externalId: event.currentTarget.id
  //       }
  //     })
  //     console.log("details", movieDetails.data)
  //     if (!movieDetails.data) {
  //       throw new Error("Was able to communicate with the back end, but there's an error!")
  //     } else {
  //       setSingleMovie(movieDetails.data);
  //     }
  //   } catch (error){
  //     alert("There was an error!")
  //   }
  // }

  // React.useEffect(() => {
  //   if (singleMovie.id !== 0 && singleMovie.title.length > 0){
  //     setShowSingleMovie(true);
  //   }

  //   if (showSingleMovie) {
  //     return (<Redirect to={{
  //       pathname: "/movies/:id",
  //       state: { singleMovie: singleMovie }
  //     }}
  //   />)}
  // }, [singleMovie, showSingleMovie])


  return (
    <Container maxwidth="lg" justify="center" className={classes.root}>
      <Grid container justify="center" >
        {results && results.map((result) =>
        <Grid item xs={3} className={classes.card}>
          <ResultCard key={result._id} id={result.imdbID} title={result.Title} image_src={result.Poster} />
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
