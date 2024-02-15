import React from 'react';
import ScreenHeader from '../../utilities/ScreenHeader/ScreenHeader';
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import './TechnicalSkills.css';

export default function TechnicalSkills(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className='technical-skill-container' id = {props.id || ''}>
        <ScreenHeader title ={'Technical Skills'} subHeading = {'Tech Arsenal: Mastering Modern Technolgy'}/>
        <div className='technical-skill-bottom'>
          <div className='scrollbar'></div>
          <div className='technical-skill-item'>
            <div className='icon'></div>
            <div className = 'icon-text-container'>
              <h2>Programming</h2>
              <h2>Languages</h2>
              <p> Core Java, Javascript, Python, SQL, Rust</p>
            </div>
          </div>
          <div className='technical-skill-item'>
          <div className='icon'></div>
            <div className='icon-text-container'>
              <h2>Web</h2>
              <h2>Technologies</h2>
              <p> Spring, SpringBoot, REST, React, MVC, Microservices architecture, HTML/HTML5, CSS/CSS3,
  Bootstrap, Angular, Node.js, Express.js, MongoDB, MERN Stack, Hibernate ORM</p>
            </div>
          </div>
          <div className='technical-skill-item'>
          <div className='icon'></div>
          <div className = 'icon-text-container'>
            <h2>Database</h2>
            <p>MySQL, PL/SQL, PostgreSQL, NoSQL(Cassandra, Elasticsearch), Amazon RDS</p>
          </div>  
          </div>
          <div className='technical-skill-item'>
          <div className='icon'> </div>
          <div className='icon-text-container'>
          <h2>Tools &</h2>
            <h2>Technologies</h2>
            <p>AWS Lambda, AWS API Gateway, AWS EC2, Selenium, JUnit, Selenium Webdriver, Postman, Github, Gitlab,
JIRA, Kibana, Jenkins</p>
          </div>
          </div>
          <div className='technical-skill-item'>
          <div className='icon'> </div>
          <div className='icon-text-container'>
          <h2>Machine</h2>
            <h2>Learning</h2>
            <p>Scikit-learn, K-means clustering, Naıve Bayes, Regularized Logistic Regression, Tableau, Numpy, Pandas, Tensorflow</p>
          </div>
          </div>
        </div>
    </div>
  )
}
