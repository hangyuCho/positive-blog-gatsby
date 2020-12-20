import React from "react"
import { Link } from "gatsby"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  iconCard: {
    minWidth: `30px`
  },
  menuLink: {
    textDecoration: `none`,
    color: `#000000`
  }
});

const Menu = ({ menu }) => {

  const classes = useStyles();
  const [state, setState] = React.useState({　bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  

  const list = (anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['About Me'].map((text, index) => (
            <Link 
              key={index}
              className={classes.menuLink}
              to={`/aboutMe`}>
              <ListItem button key={text}>
                <ListItemIcon
                  className={classes.iconCard}>
                  <span role="img" aria-label="❤️">❤️</span>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['Home'].map((text, index) => (
            <Link 
              key={index}
              className={classes.menuLink}
              to={`/`}>
              <ListItem button key={text}>
                <ListItemIcon
                  className={classes.iconCard}>
                  <span role="img" aria-label="⭐️">⭐️</span>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )
  }

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" color="secondary" onClick={toggleDrawer(anchor, true)}>메뉴</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Menu
