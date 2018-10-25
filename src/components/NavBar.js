import React, { Component } from 'react';
import { SmoothScrollLink, } from 'organism-react-scroll-nav'
import MenuItem from './MenuItem'
import { scrollDispatch } from 'organism-react-scroll-nav'
scrollDispatch({ scrollMargin: 3 });

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-parent" style={Styles.nav}>
        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={<MenuItem/>}
          targetId="TimeLine"
          style={{ background: '#3498DB' }}>
          TimeLine
          </SmoothScrollLink>

        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={<MenuItem />}
          targetId="AboutMe"
          style={{ background: '#F1C40F' }}>
          AboutMe
          </SmoothScrollLink>

        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={<MenuItem />}
          targetId="Contact"
          style={{ background: '#2ECC71' }}>
          Contact
          </SmoothScrollLink>
      </div>
    );
  }
}

const Styles = {
  nav: {
    position: 'fixed',
    background: '#212121',
    textAlign: 'center',
    width: "100%",
    padding: "10px 0",
    top: 0
  }
};