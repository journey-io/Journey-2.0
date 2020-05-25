import React from 'react';
import Link from 'next/link';

// import styles from './styles/Navbar.module.scss';
// import logo from '../assets/templogo.png';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <span className='logo'>
        logo here... one day
        {/* <img src={logo} alt='logo' /> */}
      </span>
      <div className='navlinks'>
        <Link href='/'>Home</Link> / <Link href='/dashboard'>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
