import React from "react";
import SearchBar from './SearchBar';
import ResultsPage from './ResultsPage';

const Home = () => {
  const [results, setResults] = React.useState([]);
  return (
    <React.Fragment>
    <h1>Movie Search App</h1>
    <SearchBar setResults={setResults} />
    {results && <ResultsPage results={results} />}
  </React.Fragment>
  )
}

export default Home;
