import React from 'react';

const ResultsPage = (props) => {
  const { results } = props.location.state;
  return (
    <ul>
    {results && results.map((result, index) => <li key={index}>{result.title}</li> )}
    </ul>
  )
}

export default ResultsPage;
