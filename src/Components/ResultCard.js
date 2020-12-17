import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CircularProgress } from '@material-ui/core';
import {Link} from 'react-router-dom';

const ResultCard = (props) => {

  const { id, image_src, title } = props;

  //TODO: center the image
  return (
    <Card>
      <CardHeader title={title} />
      {image_src ? (
        <CardMedia
          component="img"
          height="140"
          src={`${image_src}`}
        / >) :
        <CircularProgress color="secondary" />}
        <CardContent><Link to={{pathname:`/results/${id}`, state: { movieId: id} }}>Read more</Link></CardContent>
        {/* <CardContent><button onClick={(e) => handleClick(e, id)}>Read More</button></CardContent> */}
    </Card>
  )
}

export default ResultCard
