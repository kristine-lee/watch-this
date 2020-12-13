import React from 'react';
import axios from 'axios';
import {Grid, makeStyles } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
   },
}));

/*
class DataProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
    setTimeout(() => this.setState({ data: 'Hey there!' }), 5000);
  }
  render() {
    if (this.state.data === null) return null;
    return (
      <section>{ this.props.render(this.state.data) }</section>
    );
  }
}

<DataProvider render={ data => <p>The data is here!</p> } />
https://krasimir.gitbooks.io/react-in-patterns/content/chapter-04/#function-as-a-children-render-prop
*/

const SingleMovie = () => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDisLikes] = React.useState(0);
  const [singleMovie, setSingleMovie] = React.useState(null) /* need initial state bc useEffect only runs after mounting i think */
  /* or try using onLoad event handler? */
  const movieId = useParams();
  const idId = movieId.id

  console.log(movieId.id);

  const classes = useStyles();

  //fetches movie information from the back end
  //external API call is also made on the back end
  //avoids accidentally revealing sensitive API keys and ptential cross origin complications

  const fetchMovieDetails = React.useCallback(async () => {
    try {
      const movieDetails = await axios.get(`/api/movies/${idId}`)
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
  }, [])


  React.useEffect(() => {
  fetchMovieDetails();
  }, [fetchMovieDetails])

  return (
    <div className={classes.root}>
      <h1>Hi wtf</h1>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs>
        {singleMovie && <h2>{singleMovie.title}</h2>}
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
