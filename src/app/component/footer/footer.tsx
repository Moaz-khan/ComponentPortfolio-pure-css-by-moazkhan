// footer.tsx

'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import LogoImage from '../../../../public/assest/Black and White Circle Business Logo.png';
import styles from './footer.module.css';  // Import the CSS module

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="text-gray-600 body-font">
        <div className={styles.footerContainer}>
          <a className={styles.footerLogo}>
            <Image src={LogoImage} alt='logo' width={100} height={100} />
            <span className={styles.footerLogoText}>MuhammadMaaz.portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 to MuhammadMaaz.portfolio
          </p>
          <div className={styles.footerSocialIcons}>
            <Link 
              target='blanck'
              href={'https://www.facebook.com/profile.php?id=100076358411745&mibextid=ZbWKwL'}
              className={styles.footerSocialLink}>
              <AiFillFacebook />
            </Link>
            <Link 
              target='blank'
              href={'https://github.com/Moaz-khan'}
              className={styles.footerSocialLink}>
              <FaGithubSquare />
            </Link>
            <Link 
              target='blank'
              href={"https://www.linkedin.com/in/muhammad-maaz-602927243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
              className={styles.footerSocialLink}>
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
