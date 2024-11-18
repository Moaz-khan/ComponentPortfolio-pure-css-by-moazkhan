'use client'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import React from 'react';
import styles from './hero.module.css'; // Import the CSS module
import HeroImage from '../../../../public/assest/IMG-20220221-WA0069.jpg'; 

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Hello I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.heroDescription}>
            I m a passionate web developer skilled in HTML, CSS, JavaScript, TypeScript, and Next.js.
            I specialize in creating responsive, high-performance web applications that provide seamless user experiences.
            With a focus on clean code and modern design, I turn ideas into interactive, scalable solutions.
            Lets bring your vision to life.
          </p>
          <div className={styles.heroButtonContainer}>
            <Link href="#Contact">
              <button className={styles.heroButton}>
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            alt="hero"
            src={HeroImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
