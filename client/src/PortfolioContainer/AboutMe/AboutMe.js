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
            Hello, my name is Sharvika Nitin Kulkarni, graduating in <b>May 2024</b> with a <b>Master's degree in Computer Science from California State University Long Beach</b>, where I not only honed my academic prowess but also translated theory into practice through a <b>summer full-time Data Engineer</b> role within the <b>Institutional Research & Analytics department</b>. This summer experience allowed me to dive deep into <b>Python, SQL, and AWS</b>, enriching my technical toolkit. My professional journey has been further shaped by roles at  multinational giants: <b>Tata Consultancy Services and Amdocs Development Center India</b>, where I embraced the challenges of a Software Engineer working across <b>Ecommerce and Telecom domain</b>. Throughout these positions, I've had the opportunity to work with a diverse set of technologies,
            including <b>Java, JavaScript, ReactJS, Spring, SpringBoot and more</b>, enabling me to craft innovative solutions and navigate complex problem-solving scenarios. My enthusiasm for technology is matched by my ambition and dedication to bringing fresh, innovative ideas to life. I pride myself on my problem-solving abilities and my proficiency in a wide range of programming languages, including JavaScript, Python, Java, and SQL. Beyond the world of code, I have a passion for music, playing musical instruments, and engaging with people to forge new opportunities. I am now eagerly seeking a new, challenging assignment that promises professional growth, an opportunity to further sharpen my technical skills, and a chance to contribute to meaningful projects.
            </span>
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
