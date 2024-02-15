import CSULBLogo from '../../assets/Education/CSULB_Logo.jpeg';
import SPPULogo from '../../assets/Education/SPPU.png';
import ScreenHeader from '../../utilities/ScreenHeader/ScreenHeader';
import animations from '../../utilities/animations';
import scrollService from '../../utilities/scrollService';
import './Education.css';

export default function Education(props) {
  let fadeInScreenHandler = (screen)=>{
    if(screen.fadeInScreen !== props.id) return;
    animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  const  screen1_constants = {
    description : "Master's of Science, Computer Science",
    highlights:{
      bullets:[
        "Advanced Analysis of Algorithms", 
        "Advanced Software Engineering",
        "Advanced Programming Language", 
        "Advanced Artificial Intelligence", 
        "Software Testing and Verification", 
        "Pattern Recognition", 
        "Natural Language Processing",
      ],
      heading : "Relevant Coursework:",
    },
  }
  const  screen2_constants = {
    description : "Bachelor of Engineering, Computer Engineering",
    highlights:{
      bullets:[
        "Algorithms and Data Structure", 
        "Object Oriented Programming", 
        "Database management systems", 
        "Operating Systems",
        "Machine Learning", 
        "Artificial Intelligence", 
        "Web Technologies", 
        "Software Engineering",
      ],
      heading : "Relevant Coursework:",
    },
  }
  const render1Highlight = ()=>{
    return(
      screen1_constants.highlights.bullets.map((value, i)=>(
        <div className='highlight' key ={i}>
          <div className='highlight-blob'></div>
          <div className = 'courseWork'>{value}</div>
        </div>
      ))
    )
  }
  const render2Highlight = ()=>{
    return(
      screen2_constants.highlights.bullets.map((value, j)=>(
        <div className='highlight' key ={j}>
          <div className='highlight-blob'></div>
          <div className = 'courseWork'>{value}</div>
        </div>
      ))
    )
  }
  return (
    <div className='education-container' id = {props.id || ""}>
        <div className='education-parent'>
            <ScreenHeader title ={'Education'} subHeading = {'Academic Foundation'}/>
            <div className='education-card'>
              <div className = 'education-details'>
                <img src={CSULBLogo} className='education-logo' alt='CSULB logo'/>
                <div className='education-university'>California State University Long Beach</div>
                <span className='education-description'>{screen1_constants.description}</span>
                <div className='education-year'>(August 2022 - May 2024)</div>
                <span><b>CGPA : 3.7/4.0</b></span>
                <div className='education-highlights'>
                  <div className='highlight-heading'>
                    <span>{screen1_constants.highlights.heading}</span>
                  </div>
                  {render1Highlight()}
                </div>
              </div>
            </div>
            <div className='education-card'>
              <div className = 'education-details'>
                <img src={SPPULogo} className='education-logo' alt='SPPU logo'/>
                <div className='education-university' >University of Pune</div>
                <span className='education-description'>{screen2_constants.description}</span>
                <div className='education-year'>(August 2015 - May 2019)</div>
                <span><b>CGPA : 7.99/10.0</b></span>
                <div className='education-highlights'>
                  <div className='highlight-heading'>
                    <span>{screen2_constants.highlights.heading}</span>
                  </div>
                  {render2Highlight()}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
