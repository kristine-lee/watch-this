import React from 'react';
import axios from 'axios';
import {Grid, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
   },
}));

const SingleMovie = (props) => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDisLikes] = React.useState(0);
  const [id, setId] = React.useState(props.match.params.movieId)

  console.log(props.match.params);

  const classes = useStyles();

  //fetches movie information from the back end
  //external API call is also made on the back end
  //avoids accidentally revealing sensitive API keys and ptential cross origin complications

  React.useEffect(() => {
    async function fetchMovieDetails() {
      console.log("UHHHHH")
      try {
        const movieDetails = await axios.get(`/api/:id`, {
          params: {
            externalId: id
          }
        })
        if (!movieDetails.data) {
          throw new Error("Was able to communicate with the back end, but there's an error!")
        } else {
          setLikes(movieDetails.data.thumbsUp);
          setDisLikes(movieDetails.data.thumbsDown);
        }
      } catch (error){
        alert("There was an error!")
      }
    }
  fetchMovieDetails();
  }, [id])

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs>
        <h2>{props.history.location.movie.title}</h2>
        </Grid>
        <Grid item xs>
          Explain this
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
