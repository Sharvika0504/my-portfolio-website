import { default as React } from "react";
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import "./Resume.css";

export default function ResumeTemp(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeader
          title={"Work History : 3YoE"}
          subHeading={"Pioneering Solutions Across Industries"}
        />
        <div className="resume-main-container">
          <div className="resume-individual-container">
            <div className="logo-container">
              <img
                className="logo"
                src= "https://www.csulb.edu/sites/default/files/styles/wysiwyg_600w/public/images/2023-07/Student%20Admission%20Data%20-%20Grad-1.png?itok=QRNFUdCs"
                alt="IRA Logo"
              ></img>
            </div>
            <div className="experienceTemp-container">
              <div className="expereince-main">
                <div className="experienceTemp-heading">
                  <h2>Institutional Research & Analytics, CSULB</h2>
                </div>
                <div className="experienceTemp-heading">
                  <h3>Software Engineer - Data</h3>
                </div>
                <div className="experienceTemp-description">
                  <h3>
                    Developed Tableau dashboards to analyze CSULB student data,
                    cutting data access time by 60% for administrators.
                    Streamlined financial aid data handling for 20,000 students
                    with SQL, enhancing report efficiency. Led database
                    migration to Amazon RDS and integrated AWS Lambda, boosting
                    system efficiency and cutting costs.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-individual-container">
            <div className="logo-container">
              <img
                className="logo"
                src="https://www.bizzbuzz.news/h-upload/2023/06/24/1735740-tcs.webp"
                alt="TCS Logo"
              ></img>
            </div>
            <div className="experienceTemp-container">
              <div className="expereince-main">
                <div className="experienceTemp-heading">
                  <h2>Tata Consultancy Services</h2>
                </div>
                <div className="experienceTemp-heading">
                  <h3>Software Engineer</h3>
                </div>
                <div className="experienceTemp-description">
                  <h3>
                    Optimized React web app APIs with caching, reducing server
                    load by 25% and boosting performance by 40%, allowing for
                    50% more users. Implemented efficient search with Hibernate,
                    a Spring Boot order tracking system, and cost-effective AWS
                    microservices, all validated through JUnit testing.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-individual-container">
            <div className="logo-container">
              <img
                className="logo"
                src="https://www.fintechfutures.com/files/2023/07/Amdocs.jpg"
                alt="IRA Logo"
              ></img>
            </div>
            <div className="experienceTemp-container">
              <div className="expereince-main">
                <div className="experienceTemp-heading">
                  <h2>Amdocs DVCI</h2>
                </div>
                <div className="experienceTemp-heading">
                  <h3>Software Engineer</h3>
                </div>
                <div className="experienceTemp-description">
                  <h3>
                    Developed React-based mobile flashcards with dynamic
                    rendering and Java backend integration via RESTful APIs for
                    real-time content updates. Enhanced testing efficiency by
                    20% with automated Postman tests, integrated into Jenkins
                    CI/CD for a 30% faster test execution, improving workflow.
                    Collaborated on SCRUM for EPC micro-releases, designing
                    tests and managing bugs with HP Quality Center and JIRA.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-individual-container">
            <div className="logo-container">
              <img
                className="logo"
                src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1480161109/ze6skwri2mvcbig4drvs.png"
                alt="IRA Logo"
              ></img>
            </div>
            <div className="experienceTemp-container">
              <div className="expereince-main">
                <div className="experienceTemp-heading">
                  <h2>FinIQ Consulting India Pvt Ltd</h2>
                </div>
                <div className="experienceTemp-heading">
                  <h3>Full Stack Developer Intern</h3>
                </div>
                <div className="experienceTemp-description">
                  <h3>
                    Gained hands-on experience with the MERN stack by developing
                    a payroll processing application, managing MongoDB data
                    layers and creating a React-based user-friendly dashboard
                    for efficient HR management.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-individual-container">
            <div className="logo-container">
              <img
                className="logo"
                src="https://media.licdn.com/dms/image/C4D22AQFTxiLBfaEEgw/feedshare-shrink_800/0/1674192019962?e=2147483647&v=beta&t=GQ_zwRBpZFWCwmMRBlqkB57UWSYCz9oQed9okpkIPwE"
                alt="IRA Logo"
              ></img>
            </div>
            <div className="experienceTemp-container">
              <div className="expereince-main">
                <div className="experienceTemp-heading">
                  <h2>Digital Impact Square, TCS Foundation</h2>
                </div>
                <div className="experienceTemp-heading">
                  <h3>Software Engineer Intern</h3>
                </div>
                <div className="experienceTemp-description">
                  <h3>
                    Developed Na¨ıve Bayes and Regularized Logistic Regression
                    classifiers using Scikit-learn in Python, and applied
                    K-means clustering to analyze 18 years of child abuse
                    data,enhancing trend analysis and pattern recognition.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
