import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from "../../components/Herosection/Herosectiion";
import CardSection from "../../components/CardSection/CardSection"
import styles from "./HomePage.module.css"

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar/>
      <Hero/>
      <CardSection/> 
    </div>
  )
}

export default Home
