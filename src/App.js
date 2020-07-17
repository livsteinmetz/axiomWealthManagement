import React from 'react'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

export default function App() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<About />
			<Footer />
		</div>
	)
}
