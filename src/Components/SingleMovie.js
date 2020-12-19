import React from 'react';
import axios from 'axios';
import { Grid, Paper, makeStyles, CssBaseline } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
   },
  paper : {
    textAlign: "center",
  },
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  container: {
    margin: '3px'
  },
  title: {
    alignSelf: 'center',
    margin: '0 auto'
  }
}));

const SingleMovie = () => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDisLikes] = React.useState(0);
  const [singleMovie, setSingleMovie] = React.useState(null)

  //cannot deconstruct movieId directly, not sure why! could be a TODO:
  const movieIdObj = useParams();
  const movieId = movieIdObj.id;


  const classes = useStyles();

  //fetches movie information from the back end
  //external API call is also made on the back end
  //avoids accidentally revealing sensitive API keys and ptential cross origin complications

  const fetchMovieDetails = React.useCallback(async () => {
    try {
      const movieDetails = await axios.get(`/api/movies/${movieId}`)
      if (!movieDetails.data) {
        throw new Error("Was able to communicate with the back end, but there's an error!")
      } else {
        setSingleMovie(movieDetails.data)
        setLikes(movieDetails.data.thumbsUp);
        setDisLikes(movieDetails.data.thumbsDown);
      }
    } catch (error){
      alert("There was an error fetching the movie!")
    }
  }, [movieId])


  React.useEffect(() => {
  fetchMovieDetails();
  }, [fetchMovieDetails])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} className={classes.title}>
        {singleMovie && <h2>{singleMovie.Title}</h2>}
        </Grid>
        <Grid item xs={11} sm={5} className={classes.container}>
        <CSSTransition timeout={300} classNames="slideLeft">
          <Paper variant="outlined" elevation="3" className={classes.paper}>
           {singleMovie && <img className={classes.image} alt={`poster for the movie ${singleMovie.Title}`} src={singleMovie.Poster} /> }
          </Paper>
         </CSSTransition>
        </Grid>
        <Grid item xs={11} sm={5} className={classes.container}>
          {singleMovie &&
        <ul>
        <li>Director: {singleMovie.Director} </li>
        <li>Release Year: {singleMovie.Released.slice(-4)} </li>
        <li>Description: {singleMovie.Plot} </li>
      </ul>
          }
        </Grid>
      </Grid>
    </div>
  )

}

export default SingleMovie;

// Title
// Director
// Release Year
// Description (if your API provides it)
// Ability to thumbs up or thumbs down the movie (see below)
