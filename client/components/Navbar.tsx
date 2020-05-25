import React from 'react';
import Link from 'next/link';

import styles from './styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav id={styles.navbar}>
      <span className='logo'>
        <img src='/assets/templogo.png' alt='logo' />
      </span>
      <div className={styles.navlinks}>
        <Link href='/'>Home</Link> / <Link href='/dashboard'>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
