import React from 'react';
import axios from 'axios';
import {
  Button,
  FormControl,
  Paper,
  InputLabel,
  TextField,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import apiKey from "../secret"

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     margin: theme.spacing(8,4),
//     display: 'flex',
//   },
//   form: {
//     width: '100%'
//   }
// }
// ))


const SearchBar = (props) => {

  const { setResults } = props;

  const [searchKey, setSearchKey] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const searchResults = await axios.get(`/api/search`, {
      params: {
        search: searchKey
      }
    });
    if (searchResults.data.length === 0) {
      console.log("sorry!");
      //TODO: make a component for handling errors
    }
    // console.log("WHAT IS THE RESULT", searchResults.data);
    setResults(searchResults.data);
     }
    catch (error){
      console.error(error);
    }
  }

  const handleChange = event => {
    setSearchKey(event.target.value);
  }

  return (
    // <Grid container justify="center" alignItems="center" >
      <Grid item xs={12} sm={6}>
        <form onSubmit={handleSubmit}>
          <FormControl name="searchMovies">
            <InputLabel htmlFor="movieName">
              The world awaits you
            </InputLabel>
            <TextField required fullWidth id="movieSearch" variant="filled" onChange={handleChange} />
          </FormControl>
          <Button variant="contained" color="primary" type="submit" />
        </form>
      </Grid>
    // </Grid>
  )
}

export default SearchBar
