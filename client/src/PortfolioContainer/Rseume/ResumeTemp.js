
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import amdocs from '../../assets/Resume/amdocs.jpeg';
import disq from '../../assets/Resume/Disq.png';
import espire from '../../assets/Resume/espire.jpeg';
import finiq from '../../assets/Resume/Finiq.jpg';
import IRA from '../../assets/Resume/ira.png';
import opp from '../../assets/Resume/oppHack.jpeg';
import TCS from '../../assets/Resume/TCS.jpg';
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import './Resume.css';
import './ResumeTemp.css';

export default function ResumeTemp(props) {
  const experiences = [
    {
      date: 'Present',
      company: "Opportunity Hack",
      role: "Virtual Software Engineer",
      location: "Remote, USA",
      icon: opp,
    
    },
    {
      date: 'Jan 2023 - Jul 2023',
      company: "Institutional Research & Analytics, CSULB",
      role: "Software Engineer",
      location: "Long Beach, CA",
      icon: IRA,
    },
    {
      date: 'Apr 2021 - Jun 2022',
      company: "Tata Consultancy Services",
      role: "Systems Engineer(Developer)",
      location: "Remote, India",
      icon: TCS,
    },
    {
      date: 'Jun 2019 - Dec 2020',
      company: "Amdocs DVCI",
      role: "Software Engineer",
      location: "Pune, India",
      icon: amdocs,
    },
    {
      date: 'Jul 2018 - Dec 2018',
      company: "Espire",
      role: "Frontend Developer",
      location: "Remote, India",
      icon: espire,
    },
    {
      date: 'May 2018 - Jun 2018',
      company: "FinIQ Consulting India Pvt Ltd",
      role: "Full Stack Developer Intern",
      location: "Pune, India",
      icon: finiq,
    },
    {
      date: 'Dec 2017 - Dec 2017',
      company: "Digital Impact Square, TCS Foundation",
      role: "Software Engineer Intern",
      location: "Nashik, India",
      icon: disq,
    }
  ];

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeader
          title={"Work History : 3+YoE"}
          subHeading={"Pioneering Solutions Across Industries"}
        />
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentClassName="custom-timeline-element-content"
              contentArrowClassName="custom-timeline-element-content-arrow"
              date={<span className="custom-timeline-date">{exp.date}</span>}
              iconStyle={{ backgroundImage: `url(${exp.icon})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: '#0000' }}
            >
              <h3 className="custom-timeline-element-title">{exp.company}</h3>
              <h4 className="custom-timeline-element-subtitle">{exp.location}</h4>
              <p>{exp.role}</p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
