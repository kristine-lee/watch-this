import React from 'react';
import axios from 'axios';
import {Button, FormControl, TextField, Grid, InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

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
    }
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
            <TextField
              aria-label="search bar"
              required fullWidth
              id="movieSearch"
              label="search"
              placeholder="What are you looking for today?"
              autoFocus
              variant="filled"
              InputProps={{
                startAdornment:
                (<InputAdornment variant="outlined" position="end">
                  <SearchIcon />
                </InputAdornment>),
              }}
              onChange={handleChange}
              />
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
