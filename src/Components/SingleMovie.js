import React from 'react';
import axios from 'axios';
import { Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

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
  const [singleMovie, setSingleMovie] = React.useState(null) /* need initial state bc useEffect only runs after mounting  */

  //cannot deconstruct movieId directly, not sure why!
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
      <Grid container direction="column" alignItems="center" spacing={3}>
        <h1>Getting some movies here</h1>
        <Grid item xs>
        {singleMovie && <h2>{singleMovie.Title}</h2>}
        </Grid>
        <Grid item xs>
         <ul>
           <li>Director: {singleMovie.Director} </li>
           <li>Release Year: {singleMovie.Released.slice(-4)} </li>
           <li>Description: {singleMovie.Plot} </li>
         </ul>
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
