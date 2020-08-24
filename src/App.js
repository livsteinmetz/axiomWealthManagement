import React from 'react'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Watermark from './Components/Watermark/Watermark'
import Masthead from './Components/Masthead/Masthead'
import Media from './Components/Media/Media'
import Contact from './Components/Contact/Contact'
import Legal from './Components/Legal/Legal'
import scrollToComponent from 'react-scroll-to-component'
import './App.scss'

export default function App() {
  const refs = {}
  const scrollTo = (component) =>
    scrollToComponent(refs[component], { offset: -96, align: 'top' })
  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <Watermark />
      <section ref={(s) => (refs.Landing = s)}>
        <Landing scrollTo={scrollTo} />
      </section>
      <section ref={(s) => (refs.About = s)}>
        <Masthead text="Planning for transitions in life." img="/mh1.png" />
        <About />
      </section>
      <section ref={(s) => (refs.Services = s)}>
        <Masthead text="Defining needs, goals and dreams." img="/mh2.png" />
        <Services />
      </section>
      <section ref={(s) => (refs.Media = s)}>
        <Masthead text="Keep Up with Axiom." img="/mh3.png" />
        <Media />
      </section>
      <section ref={(s) => (refs.Contact = s)}>
        <Masthead text="Get in touch." img="/mh4.png" />
        <Contact />
      </section>
      <section>
        <Legal />
      </section>
      <Footer />
    </div>
  )
}
