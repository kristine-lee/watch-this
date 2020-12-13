import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CircularProgress } from '@material-ui/core';
import {Link} from 'react-router-dom';

const ResultCard = (props) => {

  const { id, poster_path, title, handleClick } = props;

  return (
    <Card>
      <CardHeader title={title} />
      {poster_path ? (
        <CardMedia
          component="img"
          height="140"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        / >) :
        <CircularProgress color="secondary" />}
        <CardContent onClick={(e) => handleClick(e)}><Link to={{pathname:`/results/${id}`, state: { movieId: id} }}>Read more</Link></CardContent>
        {/* <CardContent><button onClick={(e) => handleClick(e, id)}>Read More</button></CardContent> */}
    </Card>
  )
}

export default ResultCard
