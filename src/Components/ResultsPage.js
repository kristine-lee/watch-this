import React from 'react';

const ResultsPage = (props) => {
  const { results } = props;
  return (
    <ul>
    {results && results.map((result, index) => <li key={index}>{result.title}</li> )}
    </ul>
  )
}

export default ResultsPage;
