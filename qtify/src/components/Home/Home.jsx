import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from "../Hero/Hero";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
