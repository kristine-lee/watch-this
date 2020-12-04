import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Button,
  FormControl,
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

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    "@media (max-width: 900px)": {
      direction: "column"
    },
    "@media (min-width: 900px)": {
      flexGrow: 1
    }
  },
  searchBar: {
    margin: "0 auto"
  },
  form: {
    width: '100%'
  }
}
));


const SearchBar = (props) => {

  const { setResults } = props;

  const [searchKey, setSearchKey] = React.useState("");

  const classes = useStyles();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const searchResults = await axios.get(`/api/search`, {
      params: {
        search: searchKey
      }
    });
    if (searchResults.data.length === 0) {
      alert("sorry! there's no result!");
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
    <>
    <Grid container direction="row" justify="center" alignItems="center" spacing={2} wrap="nowrap" className={classes.searchContainer} >
        <form onSubmit={handleSubmit}>
        <Grid item xs={12} className={classes.searchBar}>
          <FormControl name="searchMovies" className={classes.form}>
            <InputLabel htmlFor="movieName">
              What are you looking for today?
            </InputLabel>
            <TextField required fullWidth id="movieSearch" autoFocus variant="filled" onChange={handleChange} />
          </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="primary" type="submit">Search</Button>
          </Grid>
        </form>
    </Grid>
    <div className="searchbar-background" />
    </>
  )
}

export default SearchBar
