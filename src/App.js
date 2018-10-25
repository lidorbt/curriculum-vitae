import React, { Component } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'

export default class App extends Component {
	render() {
		return (
			<div className="App">
        <NavBar/>
        <Content/>
			</div>
		);
	}
}