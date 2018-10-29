import React from 'react'
import { theme } from './appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Content from './components/Content'

const generateClassName = createGenerateClassName()
const jss = create({ ...jssPreset(), insertionPoint: 'insertion-point-jss' })

const App = () => (
	<JssProvider jss={jss} generateClassName={generateClassName}>
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<NavBar />
				<Content />
			</div>
		</MuiThemeProvider>
	</JssProvider>
)

export default App