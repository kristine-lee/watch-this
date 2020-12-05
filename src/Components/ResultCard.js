import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CircularProgress } from '@material-ui/core';
import {Link} from 'react-router-dom';

const ResultCard = (props) => {

  const { id, poster_path, title } = props;

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
        <CardContent> <Link to={{pathname:`/movie/${id}`, state: { movieId: id} }}>Read more</Link></CardContent>
    </Card>
  )
}

export default ResultCard
