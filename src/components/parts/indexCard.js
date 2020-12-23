import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    base: {
      minWidth: 275,
      margin: `0em 0em 1em 0em`,
      backgroundColor: `#fff4d2`,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
  });

const IndexCard = ({ title, date, description, tags }) => {
    const classes = useStyles();
    const list = []
    let i = -1
    for(let tag of tags.split(" ")) {
      i++
      list.push(
        <Chip
            key={i}
            style={{
              backgroundColor: `aliceblue`,
              marginLeft: `0.4em`
            }}
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
          </Typography>
          {list}
        </CardContent>
      </Card>
    )
    
}

export default IndexCard
