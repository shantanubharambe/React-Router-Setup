import React from 'react'
import Navbar from './Navbar'
import '../CSS/home.css'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      <div className="home">
      <header className="home-header">
        <h1>Welcome to React Router Demo</h1>
        <p>Your one-stop solution for React routing.</p>
      </header>
      <section className="home-content">
        <h2>Why Choose Us?</h2>
        <div className="home-cards">
          <div className="home-card">
            <h3>Easy Setup</h3>
            <p>Get started with minimal configuration and go live quickly.</p>
          </div>
          <div className="home-card">
            <h3>Flexible Routing</h3>
            <p>Customize routing with nested routes and dynamic parameters.</p>
          </div>
          <div className="home-card">
            <h3>Responsive Design</h3>
            <p>Our application works seamlessly across all devices.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
