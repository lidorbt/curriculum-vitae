import React, { Component } from 'react';
import { ScrollSpy } from 'organism-react-scroll-nav'

export default class Content extends Component {
  render() {
    return (
      <div style={{ padding: '30px 0 0' }}>
        <ScrollSpy id="TimeLine" style={{ ...Styles.content, background: "#3498DB" }}>
          TimeLine
        </ScrollSpy>
        <ScrollSpy id="AboutMe" style={{ ...Styles.content, background: "#F1C40F" }}>
          {/*<ScrollSpy monitorScroll={false}>
            <ScrollReceiver style={{ border: "1px solid #fff" }}>
              test222
            </ScrollReceiver>
          </ScrollSpy> */}
          About Me
        </ScrollSpy>
        <ScrollSpy id="Contact" style={{ ...Styles.content, background: "#2ECC71" }}>
        Contact
        </ScrollSpy>
      </div>
    );
  }
}

const Styles = {
  content: {
    height: 500,
    textAlign: "center",
    paddingTop: "10%",
    fontSize: "4rem",
    color: "#fff"
  },
  nav: {
    position: 'fixed',
    background: '#fff',
    textAlign: 'center',
    width: "100%",
    padding: "10px 0",
    top: 0
  }
};