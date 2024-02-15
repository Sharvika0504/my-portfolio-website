import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Home from "../PortfolioContainer/Home/Home/Home";
import Projects from "../PortfolioContainer/Projects/Projects";
import ResumeTemp from "../PortfolioContainer/Rseume/ResumeTemp";
import Services from "../PortfolioContainer/Services/Services";
import TechnicalSkillsTemp from "../PortfolioContainer/TechnicalSkills/TechnicalSkillsTemp";
export const TOTAL_SCREENS = [
  {
    screen_name: "HOME",
    Component: Home,
  },
  {
    screen_name: "ABOUT ME",
    Component: AboutMe,
  },
  {
    screen_name: "SERVICES",
    Component: Services,
  },
  {
    screen_name: "TECHNICAL SKILLS",
    Component: TechnicalSkillsTemp,
  },
  {
    screen_name: "WORK HISTORY",
    Component: ResumeTemp,
  },
  {
    screen_name: "PROJECTS",
    Component: Projects,
  },
  {
    screen_name: "CONTACT ME",
    Component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
