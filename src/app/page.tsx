import Hero from "./component/Hero/hero";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Project from "./component/project/project";
import Skills from "./component/skill/skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
    
  );
}
