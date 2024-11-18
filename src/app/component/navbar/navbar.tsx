// navbar.tsx

'use client'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../../public/assest/Black and White Circle Business Logo.png';
import styles from './navbar.module.css';  // Import the CSS module

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <header className="text-gray-600 body-font">
        <div className={styles.navbarContainer}>
          <Link href="/" className={styles.navbarLogo}>
            <Image src={Logo} alt="logo" width={70} height={70} />
            <span className={styles.navbarLogoText}>MuhammadMaaz.portfolio</span>
          </Link>
          <nav className={styles.navbarLinks}>
            <Link href="/" className={styles.navbarLink}>Home</Link>
            <Link href="#about" className={styles.navbarLink}>About</Link>
            <Link href="#skills" className={styles.navbarLink}>Skills</Link>
            <Link href="#project" className={styles.navbarLink}>Project</Link>
            <Link href="#Contact" className={styles.navbarLink}>Contact</Link>
          </nav>
          <a href="/assest/moazkhancv.pdf" target="_blank">
            <button className={styles.navbarButton}>
              Download CV
              <AiOutlineCloudDownload className={styles.navbarIcon} />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
