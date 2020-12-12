import React from 'react';
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import LibTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Tabs = ({ menu }) => (
  <div>
    <AppBar position="static">
        <LibTabs value="1" aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </LibTabs>
      </AppBar>
  </div>
)

Tabs.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}

Tabs.defaultProps = {
  menu: [],
}

export default Tabs
