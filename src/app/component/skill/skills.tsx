import React from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaWordpressSimple } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import styles from './skills.module.css';  // Import the CSS module

interface SkillProps {
  icon: React.ReactNode;
  skillName: string;
  percentage: number;
}

const SkillCard: React.FC<SkillProps> = ({ icon, skillName, percentage }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillCardInner}>
        <div className={styles.skillCardHeader}>
          <div className={styles.icon}>{icon}</div>
          <h2>{skillName}</h2>
        </div>
        <div className={styles.skillCardProgress}>
          <div className={styles.skillCardProgressBar} style={{ width: `${percentage}%` }}></div>
        </div>
        <p className={styles.skillCardPercentage}>{percentage}%</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.skillsSection}>
            <h2>Skills</h2>
            <h1>My Skills</h1>
          </div>
          <div className={styles.skillCardContainer}>
            {/* Skill Cards */}
            <SkillCard icon={<AiOutlineHtml5 />} skillName="HTML" percentage={100} />
            <SkillCard icon={<FaCss3Alt />} skillName="CSS" percentage={90} />
            <SkillCard icon={<TbBrandJavascript />} skillName="JavaScript/TypeScript" percentage={85} />
            <SkillCard icon={<TbBrandNextjs />} skillName="NextJS" percentage={65} />
            <SkillCard icon={<FaWordpressSimple />} skillName="WordPress" percentage={95} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
