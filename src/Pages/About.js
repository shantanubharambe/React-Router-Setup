import React from 'react'
import Navbar from './Navbar'
import '../CSS/about.css'
const About = () => {
  return (
    <>
      <Navbar/>
      <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>We strive to provide the best solutions for React routing, making it easier for developers to manage navigation in their applications.</p>
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/team1.jpg" alt="Team Member 1" className="team-image" />
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/team2.jpg" alt="Team Member 2" className="team-image" />
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
    </>
    
         
  )
}

export default About
