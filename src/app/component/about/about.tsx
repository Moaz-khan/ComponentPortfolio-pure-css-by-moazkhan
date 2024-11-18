'use client'
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import MyImage from '../../../../public/assest/IMG-20220221-WA0069.jpg';
import styles from './about.module.css';  // Import the CSS module

const About = () => {
  return (
    <div id="about">
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageContainer}>
            <Image
              className={styles.aboutImage}
              alt="hero"
              src={MyImage}
              width={300}
              height={450}
            />
          </div>
          <div className={styles.aboutTextContainer}>
            <h1>
              About Me
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Hello My Name Is Muhammad Maaz'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>
              I m a web developer from Karachi with a background in both computer science and commerce. 
              Currently working as a Sales Executive, I m also enrolled in a one-year course on Generative AI, Artificial Intelligence, Web, and Metaverse 3.0 at Governor House, 
              where I ve gained skills in HTML, CSS, JavaScript, TypeScript, and Next.js. 
              I m passionate about exploring the latest developments in AI and web technology globally. 
              Outside of tech, I m a cricket enthusiast, enjoy the thrill of new cars, and aspire to tour the world, immersing myself in the future of AI innovation.
            </p>
            <div className={styles.aboutButtons}>
              <a href='/assest/moazkhancv.pdf' target="blank">
                <button className={`${styles.button} ${styles.viewCV}`}>
                  View CV
                </button>
              </a>
              <Link href="https://www.linkedin.com/in/muhammad-maaz-602927243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
                <button className={`${styles.button} ${styles.followLink}`}>
                  Follow
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
