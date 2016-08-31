import React, { Component, PropTypes } from 'react';

import SidebarNav from './SidebarNav/SidebarNav';
import HeaderNav from './HeaderNav/HeaderNav';
import Activity from './Activity/Activity';

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <SidebarNav />
        <HeaderNav />
        <Activity />
      </div>
    );
  }
};
