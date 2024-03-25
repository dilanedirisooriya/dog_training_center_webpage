import React from 'react'
import "./app.css"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import AboutUs from './components/aboutus/AboutUs'
import Services from './components/ourservices/Services'
import Feedbacks from './components/feedbacks/Feedbacks'
import ContactUs from './components/contactus/ContactUs'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'



const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      
      <section><AboutUs /></section>
      <section><Services /></section>
      <section><Feedbacks /></section>
      <section><Gallery/></section>
      <section><ContactUs /></section>
      <section><Footer /></section>

    </div>
  )
}

export default App