import React from "react";
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const screen_constants = {
    description:
      "Hello, my name is Sharvika Nitin Kulkarni, graduating in May 2024  with a Master's degree in Computer Science from California State University Long Beach, where I not only honed my academic prowess but also translated theory into practice through a summer full-time Data Scientist role within the Institutional Research & Analytics department. This summer experience allowed me to dive deep into Python, SQL, and AWS, enriching my technical toolkit. My professional journey has been further shaped by roles at  multinational giants: Tata Consultancy Services and Amdocs Development Center India, where I embraced the challenges of a Software Engineer working across Ecommerce and Telecom domain. Throughout these positions, I've had the opportunity to work with a diverse set of technologies, including Java, JavaScript, ReactJS, Spring, SpringBoot and more, enabling me to craft innovative solutions and navigate complex problem-solving scenarios. My enthusiasm for technology is matched by my ambition and dedication to bringing fresh, innovative ideas to life. I pride myself on my problem-solving abilities and my proficiency in a wide range of programming languages, including JavaScript, Python, Java, and SQL. Beyond the world of code, I have a passion for music, playing musical instruments, and engaging with people to forge new opportunities. I am now eagerly seeking a new, challenging assignment that promises professional growth, an opportunity to further sharpen my technical skills, and a chance to contribute to meaningful projects.",
  };
  const techSkills1 = [
    "Java",
    "Python",
    "JavaScript ",
    "Spring/SpringBoott",
    "React.js",
  ];
  const techSkills2 = ["Node.js", "MongoDB", "SQL", "Django & Flask", "AWS"];
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeader
          title={"About Me"}
          subHeading={
            "Crafting Tomorrow's Solutions: Web Development, Programming, and AI Passionate"
          }
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Hello! My name is Sharvika Nitin Kulkarni, and I graduated in May
              2024 with a Master's degree in <b>Computer Science</b> from
              California State University Long Beach. With over{" "}
              <b>three years</b> of professional experience in <b>Backend</b>{" "}
              and <b>Full stack development</b>. My career has taken me through
              roles at industry leaders such as <b>Tata Consultancy Services</b>{" "}
              and <b>Amdocs Development Center India</b>, where I worked
              extensively in the eCommerce and telecom domains, enhancing system
              performance, scalability, and efficiency. Beyond my foundational
              expertise, my interest in AI and machine learning has grown into a
              passionate pursuit. My fascination for LLM model building and this
              journey has equipped me with a unique blend of skills, and I am
              excited about the endless possibilities AI and machine learning
              hold, eager to contribute to innovative projects that push
              technological boundaries and create meaningful impacts across
              industries.
            </span>
            <h3>Top Tech Skills</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul>
                {techSkills1.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <ul>
                {techSkills2.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="about-me-options">
              <a
                href="https://github.com/Sharvika0504"
                target="_blank"
                rel="noopener noreferrer"
                className="btn highlighted-btn"
              >
                My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
