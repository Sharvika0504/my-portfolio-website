
import React from 'react';
import ai from '../../../src/assets/TechnicalSkills/ai-ai-svgrepo-com.svg';
import angular from '../../../src/assets/TechnicalSkills/angular-icon-logo-svgrepo-com.svg';
import rest from '../../../src/assets/TechnicalSkills/api-interface-svgrepo-com.svg';
import aws from '../../../src/assets/TechnicalSkills/aws-opened-svgrepo-com.svg';
import bootstrap from '../../../src/assets/TechnicalSkills/bootstrap-4-logo-svgrepo-com.svg';
import cass from '../../../src/assets/TechnicalSkills/cassandra-svgrepo-com.svg';
import css from '../../../src/assets/TechnicalSkills/css-document-extension-file-file-format-file-type-svgrepo-com.svg';
import git from '../../../src/assets/TechnicalSkills/git-svgrepo-com.svg';
import html from '../../../src/assets/TechnicalSkills/html-5-svgrepo-com.svg';
import java from '../../../src/assets/TechnicalSkills/java-svgrepo-com.svg';
import javascript from '../../../src/assets/TechnicalSkills/javascript-svgrepo-com.svg';
import jenkins from '../../../src/assets/TechnicalSkills/jenkins-svgrepo-com.svg';
import jira from '../../../src/assets/TechnicalSkills/jira-svgrepo-com.svg';
import kibana from '../../../src/assets/TechnicalSkills/kibana-svgrepo-com.svg';
import mongodb from '../../../src/assets/TechnicalSkills/mongodb-svgrepo-com.svg';
import node from '../../../src/assets/TechnicalSkills/node-js-svgrepo-com.svg';
import num from '../../../src/assets/TechnicalSkills/numpy-svgrepo-com.svg';
import postSql from '../../../src/assets/TechnicalSkills/postgresql-svgrepo-com.svg';
import postman from '../../../src/assets/TechnicalSkills/postman-icon-svgrepo-com.svg';
import python from '../../../src/assets/TechnicalSkills/python-svgrepo-com.svg';
import react from '../../../src/assets/TechnicalSkills/react-svgrepo-com.svg';
import sci from '../../../src/assets/TechnicalSkills/scikitlearn-svgrepo-com.svg';
import selenium from '../../../src/assets/TechnicalSkills/selenium-svgrepo-com.svg';
import service from '../../../src/assets/TechnicalSkills/services-svgrepo-com.svg';
import spring from '../../../src/assets/TechnicalSkills/spring-svgrepo-com.svg';
import sql from '../../../src/assets/TechnicalSkills/sql-svgrepo-com.svg';
import tableau from '../../../src/assets/TechnicalSkills/tableau-svgrepo-com.svg';
import tensorflow from '../../../src/assets/TechnicalSkills/tensorflow-svgrepo-com.svg';
import ScreenHeader from '../../utilities/ScreenHeader/ScreenHeader';
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import './TechnicalSkills.css';


export default function TechnicalSkillsTemp(props) {
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
        <div className='tech-stack'>
            <div className='animated-line'></div>
        <h2>Programming Language</h2>
        <div className='tech-stack-box-container'>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src ={java}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Java</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {javascript}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Javascript</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src = {python}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Python</h3>
                     </div>
            </div>  
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {sql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>SQL</h3>
                    </div>
            </div>
        </div>
     </div>
     <div className='tech-stack'>
        <h2>Web Technlogies</h2>
        <div className='tech-stack-box-container'>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src ={spring}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Spring/SpringBoot</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {rest}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>RESTFul API</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src = {react}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>React</h3>
                     </div>
            </div>  
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {html}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>HTML/HTML5</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {css}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>CSS/CSS3</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {bootstrap}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Bootstrap</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {angular}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Angular</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {node}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Node.js</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {sql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Express.js</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {mongodb}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>MongoDB</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {sql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Hibernate ORM</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {service}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>MVC</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {service}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Microservices</h3>
                    </div>
            </div>

        </div>
     </div>
     <div className='tech-stack'>
        <h2>Database</h2> 
        <div className='tech-stack-box-container'>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src ={sql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>MySQL</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {javascript}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>PL/SQL</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src = {postSql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>PostgreSQL</h3>
                     </div>
            </div>  
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {aws}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Amazon RDS</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {cass}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>NoSQL(Cassandra, Elasticsearch)</h3>
                    </div>
            </div>
        </div>
     </div>
     <div className='tech-stack'>
        <h2>Machine Learning</h2> 
        <div className='tech-stack-box-container'>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src ={sci}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Scikit-learn</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {ai}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Machine Learning models</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src = {python}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Pandas</h3>
                     </div>
            </div>  
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {tensorflow}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Tensorflow</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {tableau}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Tableau</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {num}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Numpy</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {sql}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>SQL Alchemy</h3>
                    </div>
            </div>
        </div>
     </div>
     <div className='tech-stack'>
        <h2>Other Tools & Technologies</h2>  
        <div className='tech-stack-box-container'>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src ={aws}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>AWS Lambda</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {aws}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>AWS API Gateway</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                    <div className='tech-stack-top'>
                    <img src = {aws}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>AWS EC2</h3>
                     </div>
            </div>  
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {selenium}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Selenium</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {postman}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Postman</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {git}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Github/Gitlab</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {jira}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>JIRA</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {jenkins}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Jenkins</h3>
                    </div>
            </div>
            <div className='tech-stack-box'>
                <div className='tech-stack-top'>
                    <img src = {kibana}></img>
                    </div>
                    <div className='tech-stack-bottom'>
                        <h3>Kibana</h3>
                    </div>
            </div>
        </div>
     </div>
    </div>
</div>
  )
}
