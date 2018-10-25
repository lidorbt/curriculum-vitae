import React, { Component } from 'react';
import './App.css';
import { ScrollSpy, ScrollReceiver, SmoothScrollLink, } from 'organism-react-scroll-nav'
import MenuItem from './components/MenuItem'

class App extends Component {
	render() {
		return (
			<div className="App">
        <div id="nav-parent" style={Styles.nav}>
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem/>}
                targetId="t1"
                style={{background:'#3498DB'}}>
                test1
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t2"
                style={{background:'#F1C40F'}}>
                test2
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t3"
                style={{background:'#2ECC71'}}>
                test3
            </SmoothScrollLink>
        </div>
        <div style={{padding:'30px 0 0'}}>
            <ScrollSpy id="t1" style={{...Styles.content, background:"#3498DB"}}>
               test111
            </ScrollSpy>
            <ScrollSpy id="t2" style={{...Styles.content, background:"#F1C40F"}}>
               {/*An example for detect in screen only*/}
               <ScrollSpy monitorScroll={false}>
                   <ScrollReceiver style={{border:"1px solid #fff"}}>
                        test222
                   </ScrollReceiver>
                </ScrollSpy>
            </ScrollSpy>
            <ScrollSpy id="t3" style={{...Styles.content, background:"#2ECC71"}}>
               test333
            </ScrollSpy>
        </div>
			</div>
		);
	}
}

export default App;

const Styles = {
	content: {
			height: 500,
			textAlign:"center",
			paddingTop: "10%",
			fontSize: "4rem",
			color:"#fff"
	},
	nav: {
			position:'fixed',
			background:'#fff',
			textAlign:'center',
			width:"100%",
			padding: "10px 0",
			top: 0
	}
};