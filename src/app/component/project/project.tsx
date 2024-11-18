'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from './project.module.css'; // Import the CSS module

const Project = () => {
  return (
    <div id="project">
      <section className={styles.projectSection}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className={styles.projectContainer}>
            {/* Project 1 */}
            <div className={styles.projectCard}>
              <div className="relative">
                <Image
                  alt="Resume Builder Project"
                  className={styles.projectImage}
                  src="/assest/office.jpg"
                  layout="responsive"
                  width={1200}
                  height={800}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectText}>
                    <h2 className={styles.projectTitle}>
                      Resume Builder Project
                    </h2>
                    <h1 className={styles.projectName}>
                      Build Your Resume
                    </h1>
                    <p className={styles.projectDescription}>
                      Empowering you to build professional resumes effortlessly with a sleek, user-friendly design.
                    </p>
                    <Link href={"https://milestone5-shearablelink-downloadpdf-moazkhan.vercel.app/"} target="blank">
                      <p className={styles.projectButton}>View Project</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.projectCard}>
              <div className="relative">
                <Image
                  alt="Portfolio Project"
                  className={styles.projectImage}
                  src="/assest/protfolio.png"
                  layout="responsive"
                  width={1200}
                  height={800}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectText}>
                    <h2 className={styles.projectTitle}>
                      Portfolio Component Based
                    </h2>
                    <h1 className={styles.projectName}>
                      Portfolio
                    </h1>
                    <p className={styles.projectDescription}>
                      Built using Next.js, this component-based portfolio highlights my technical expertise and creative solutions.
                    </p>
                    <Link href={"https://component-based-portfolio-moazkhan.vercel.app/"} target="blank">
                      <p className={styles.projectButton}>View Project</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
              <div className="relative">
                <Image
                  alt="Number Guessing Game"
                  className={styles.projectImage}
                  src="/assest/banner.png"
                  layout="responsive"
                  width={1200}
                  height={800}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectText}>
                    <h2 className={styles.projectTitle}>
                      CLI Based Number Guessing Game
                    </h2>
                    <h1 className={styles.projectName}>
                      Guess The Number
                    </h1>
                    <p className={styles.projectDescription}>
                      Challenge yourself with this CLI-based Number Guessing Game! Test your intuition and see if you can pinpoint the secret number.
                    </p>
                    <Link href={"https://www.npmjs.com/package/moazkhan-cli-guessing-number"} target="blank">
                      <p className={styles.projectButton}>View Project</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;
