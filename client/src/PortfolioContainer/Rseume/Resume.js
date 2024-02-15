import React, { useEffect, useRef, useState } from "react";
import Disq from "../../assets/Resume/Disq.png";
import FinIQ from "../../assets/Resume/FiniQ.png";
import Amdocs from "../../assets/Resume/amdocs.png";
import IRA from "../../assets/Resume/ira.png";
import TCS from "../../assets/Resume/tcs.png";
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  const contentRefs = useRef([]);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((item, index) => <li key={index}>{item}</li>);
    }
  };
  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = ({
    heading,
    subHeading,
    fromDate,
    toDate,
    description,
    skills,
  }) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{heading}</span>
          {fromDate && toDate && (
            <div className="heading-date">{fromDate + "-" + toDate}</div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{subHeading}</span>
        </div>
        <div className="resume-heading-description">
          {Array.isArray(description) ? <ul>{renderDescription(description)}</ul> : renderDescription(description)}
        </div>
        {skills && skills.length > 0 && (
          <div className="resume-skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill-parent">
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Institutional Research & Analytics, CSULB", logoSrc: IRA },
    { label: "Tata Consultancy Services", logoSrc: TCS },
    { label: "Amdocs DVCI", logoSrc: Amdocs },
    { label: "FinIQ Consulting India Pvt Ltd", logoSrc: FinIQ },
    { label: "Digital Impact Square, TCS Foundation", logoSrc: Disq },
  ];
  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          subHeading={"Software Engineer - Part Time"}
          fromDate={"January 2023"}
          toDate={"August 2023"}
          description={[
            "Created Tableau visualizations and dashboard reports to analyze CSULB student data and provide insights to stakeholders, reducingdata access time by 60% for campus administrators.",
            "Engineered stored procedures and CRUD operations using SQL queries, streamlining the extraction and consolidation of financial aid data for approximately 20,000 students leading to optimization of report generation time and efficiency.",
            "Led the migration of database systems to Amazon RDS, ensuring robust and scalable management of financial aid data, coupled with AWS Lambda for serverless backend operations, significantly enhancing system efficiency and reducing operational cost."
          ]}
          skills={[{ skill: "Tableau", ratingPercentage: 80 },
          { skill: "SQL", ratingPercentage: 90 },
          { skill: "Python", ratingPercentage: 90 },
          { skill: "AWS RDS", ratingPercentage: 60 },
          { skill: "AWS Lambda", ratingPercentage: 60 }]}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          subHeading={"Software Engineer"}
          fromDate={"April 2021"}
          toDate={"June 2022"}
          description={[
            "Restructured API endpoints for a react based frontend web application, implementing caching for efficient data retrieval, and optimizing query execution, achieved a 25% reduction in server load and a 40% improvement in response times, enabling the e-commerce platform to accommodate 50% more concurrent users.",
            "Utilized Hibernate ORM to optimize database queries, exemplified by a streamlined product search feature that cut search times by 15%, enhancing the efficiency of product discovery process.",
            "Implemented a Spring Boot/MVC-based Order Tracking System with real-time updates and RESTful API integration, boosting customer satisfaction.",
            "Leveraged AWS cloud services, including AWS Lambda, API Gateway, and EC2, to architect scalable and secure microservices solutions, reducing infrastructure costs by 17%.",
            "Ensured robustness and reliability of new features and optimizations through comprehensive JUnit testing, systematically validating functionality and streamlining issue detection and resolution.",
          ]}
          skills={[{ skill: "Java", ratingPercentage: 90 },
          {skill:"Spring Boot", ratingPercentage: 70},
          { skill: "REST API", ratingPercentage: 90 },
          { skill: "Javascript", ratingPercentage: 80 },
          { skill: "JSON", ratingPercentage: 50 },
          { skill: "PostgreSQL", ratingPercentage: 80 },
          { skill: "Redis", ratingPercentage: 50 },
          { skill: "ELK Stack", ratingPercentage: 40 },
          { skill: "JUnit", ratingPercentage: 60 }]}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          subHeading={"Software Engineer"}
          fromDate={"June 2019"}
          toDate={"December 2020"}
          description={[
            "Developed mobile flashcards using React, featuring responsive design and dynamic content rendering to showcase device details, and integrated it with a Java-based backend through RESTful APIs, ensuring dynamic data retrieval for continuously updated and accurate mobile flashcard content.",
            "Led the creation of comprehensive test plans, incorporating Postman to efficiently perform automation testing of APIs and web services, reducing load testing time by 20% and achieving wider test coverage. This integration was seamlessly woven into our Jenkins CI/CD pipeline, resulting in a remarkable 30% reduction in test execution time, enhancing development workflow speed and efficiency.",
            "Worked closely with the SCRUM for EPC micro releases and designed test scenarios, created test cases based on client requirements using HP Quality Center and tracked bug reports using Jenkins later migrating to JIRA."
          ]}
          skills={[{ skill: "Java", ratingPercentage: 90 },
          {skill:"Javascript", ratingPercentage: 80},
          { skill: "React", ratingPercentage: 70 },
          { skill: "Postman", ratingPercentage: 40 },
          { skill: "Newman", ratingPercentage: 40 },
          { skill: "GitHub", ratingPercentage: 90 },
          { skill: "Jenkins", ratingPercentage: 70 },
          { skill: "SCRUM", ratingPercentage: 50 },]}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          subHeading={"Full Stack Developer Intern"}
          fromDate={"May 2018"}
          toDate={"June 2018"}
          description={[
            "Gained hands-on experience with the MERN stack by developing a payroll processing application, managing MongoDB data layers and creating a React-based user-friendly dashboard for efficient HR management.",]}
          skills={[{ skill: "NoSQL", ratingPercentage: 90 },
          {skill:"MongoDB", ratingPercentage: 80},
          { skill: "Express.js", ratingPercentage: 40 },
          { skill: "Node.js", ratingPercentage: 40 },
          { skill: "JWT", ratingPercentage: 30 },
          { skill: "Redux", ratingPercentage: 30 }]}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          subHeading={"Software Engineer Intern"}
          fromDate={"Dec 2017"}
          toDate={"Dec 2017"}
          description={[
            "Developed Na¨ıve Bayes and Regularized Logistic Regression classifiers using Scikit-learn in Python, and applied K-means clustering to analyze 18 years of child abuse data,enhancing trend analysis and pattern recognition.",
          ]}
          skills={[{ skill: "Python", ratingPercentage: 90 },
          {skill:"Machine Learning", ratingPercentage: 80},
          { skill: "Numpy", ratingPercentage: 60 },
          { skill: "Matplotlib", ratingPercentage: 60 },
          { skill: "Pandas", ratingPercentage: 60 },
          { skill: "Scikit learn", ratingPercentage: 60 },
          { skill: "Pattern Recognition", ratingPercentage: 70 }]}
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
   /* let offsetHeight = 500;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight -1+ "px)" },
    };
    setSelectedBulletIndex(index);
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);*/
    const offsetY = contentRefs.current.slice(0, index).reduce((totalOffset, currItem) => {
      return totalOffset + (currItem.offsetHeight || 0);
    }, 0);
    setCarousalOffsetStyle({
      style: { transform: `translateY(-${offsetY}px)` },
    });
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

 /* const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };*/

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail, index) => (
          <div ref={(el) => (contentRefs.current[index] = el)} key={index}>
            {ResumeDetail}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeader
          title={"Work History"}
          subHeading={"Pioneering Solutions Across Industries"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
