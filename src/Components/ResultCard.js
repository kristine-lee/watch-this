import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  eachCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: '1'
  },
  caption: {
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
  },
  }
})
)

const ResultCard = (props) => {

  const { id, image_src, title } = props;
  const classes = useStyles();

  //TODO: center the image
  return (
    <Card className={classes.eachCard}>
      <CardHeader title={title} />
      {image_src ? (
        <CardMedia
          className={classes.image}
          component="img"
          height="140"
          src={`${image_src}`}
        / >) :
        <CircularProgress color="secondary" />}
        <CardContent className={classes.cardContent}>
          <Link to={{pathname:`/results/${id}`, state: { movieId: id} }}>
            <Typography variant="caption" className={classes.caption}>
              Read more
            </Typography>
          </Link>
          </CardContent>
        {/* <CardContent><button onClick={(e) => handleClick(e, id)}>Read More</button></CardContent> */}
    </Card>
  )
}

export default ResultCard
