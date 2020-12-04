import React from 'react';
import axios from 'axios';
import {
  Button,
  FormControl,
  Input,
  InputLabel
} from '@material-ui/core';
// import apiKey from "../secret"

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
      console.log("sorry!")
    }
    console.log("WHAT IS THE RESULT", searchResults.data);
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
    <form onSubmit={handleSubmit}>
      <FormControl name="searchMovies">
        <InputLabel htmlFor="movieName">
          Search for a movie here
        </InputLabel>
        <Input id="movieSearch" onChange={handleChange}/>
      </FormControl>
      <Button variant="outlined" type="submit" />
    </form>
  )
}

export default SearchBar
