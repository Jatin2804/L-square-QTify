import React from 'react';
import styles from './Navbar.module.css';
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../Search/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar
        placeholder="Search a song of your choice"
      />
      <Button variant="contained" sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
      }}>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
