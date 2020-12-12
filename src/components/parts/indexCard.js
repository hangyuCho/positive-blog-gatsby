import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    base: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const IndexCard = ({ title, date, description, tags }) => {
    const classes = useStyles();
    const list = []
    for(let tag of tags.split(" ")) {
      list.push(
        <Chip
            avatar={<Avatar>#</Avatar>}
            label={tag}
            clickable
            color="primary"
            variant="outlined"
        />
      )
    }
    return (
      <Card className={classes.base}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {list}
          </Typography>
        </CardContent>
      </Card>
    )
    
}

export default IndexCard
