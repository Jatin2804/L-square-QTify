import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Component from "../component";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      {/* <Component data="searchdesktop"/> */}
      <SearchBar
        placeholder="Search a song of your choice"
        type="searchdesktop"
      />
      <Button variant="contained" sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
      }}>Give Feedback</Button>

    </nav>
    {/* <Component data="searchmobile"/> */} 
    <div>
    <SearchBar
    placeholder="Search a song of your choice"
    type="searchmobile"
  />
    </div>
  </>
  );
};

export default Navbar;
