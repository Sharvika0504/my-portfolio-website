import React, { useState } from "react";
import Diabetic from '../../assets/Projects/DiabeticRet.jpeg';
import InsurancePrdeiction from '../../assets/Projects/Insurance.jpeg';
import Portfolio from '../../assets/Projects/Portfolio.png';
import RC from '../../assets/Projects/RC_car.jpeg';
import RestaurantManagement from '../../assets/Projects/RestaurantManagement.jpeg';
import Vehicle from '../../assets/Projects/Vehicle.png';
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [activeCategory, setActiveCategory] = useState("All");
  const projects = [
    {
      category: "Full Stack",
      individualProject: [
        {
          id: 1,
          name: "Portfolio Website",
          description: "This is my portfolio website project which is built with React JS, Bootstrap, RxJS, and Node.js, a dynamic web applications, covering everything from smooth animations and interactive elements to backend development with email functionality and deployment, equipped with comprehensive web development skills.",
          photo: Portfolio,
          github: "https://github.com/user/fullstackA1",
        },
        {
          id: 2,
          name: "Restaurant Management System",
          description: "Developed a comprehensive Restaurant Management System with HTML, CSS for front-end design, and JavaFX for user interface interactions. It features dual login functionality, enabling customers to reserve tables and employees to manage the menu and generate bills efficiently, all integrated via JDBC with a MySQL database for seamless data handling.",
          photo: RestaurantManagement,
          github: "https://github.com/user/fullstackA1",
        },
        {
          id: 3,
          name: "Smart Sudoku Solver",
          description: "Built an Android application that utilises advanced image processing, OCR technology, and a greedy backtracking algorithm to detect live images of unsolved Sudoku puzzles through the smartphone camera, with accuracy of 95% in solving puzzles on the go.",
          photo: "https://www.adamk.org/wp-content/uploads/2019/08/SudokuSolverX-sshot2.jpeg",
          github: "https://github.com/user/fullstackA1",
        },
      ],
    },{
      category: "Machine Learning/Data Science",
      individualProject: [
        {
          id: 4,
          name: "Diabetic Retinopathy Classification Tool",
          description: "Pioneered an automated Classification tool utilising a Deep Convolutional Neural Network on Google Cloud GPU to detect early stages of diabetic retinopathy, the leading cause of blindness, achieving an accuracy of approximately 81% with analysis of 35,126 publicly released retinal images from eyePACS on Kaggle.",
          photo: Diabetic,
          github: "https://github.com/user/fullstackA1",
        },
        {
          id: 5,
          name: "Insurance Prediction",
          description: "Project that harnesses the predictive capabilities of the Random Forest algorithm and regression testing models, offering precise forecasts of insurance costs based on user profiles, demonstrating proficiency in applying machine learning techniques to solve real-world financial challenges.",
          photo: InsurancePrdeiction,
          github: "https://github.com/user/fullstackA1",
        },
        {
          id: 6,
          name: "Autonomous RC driving car",
          description: "Modified a Remote Control car to autonomously perform three tasks: driving, detecting stop signs, and avoiding collisions, leveraging a series of specialised subnetworks within an artificial neural network model to extract highly specific features for precise RC control, surpassing an accuracy rate of 73%, and employed Python OpenCV scripts for image and sign detection.",
          photo: RC,
          github: "https://github.com/user/fullstackA1",
        },
        {
          id: 7,
          name: "Vehicle Classifier",
          description: " Classifier that utilizes Convolutional Neural Networks (CNN) with Keras and TensorFlow libraries, alongside data manipulation with Pandas, to accurately classify vehicle images, showcasing adeptness in deploying deep learning models for image recognition tasks.",
          photo: Vehicle,
          github: "https://github.com/user/fullstackA1",
        },
      ],
    },
  ];
  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };
  const filterProjects = activeCategory === 'All'  ? projects.flatMap(categoryData => categoryData.individualProject)
  : projects.find(categoryData => categoryData.category === activeCategory)?.individualProject || [];
  return (
    <div className="project-container" id={props.id || ""}>
      <ScreenHeader title={"Side Projects"} subHeading={"One Innovation At A Time"} />
      <div className="project-sections">
        <ul className="project-filter">
          <li key={projects.category} onClick={() => handleFilterClick('All')}>All</li>
          {projects.map(({category}, index) => (
            <li key={index} onClick={() => handleFilterClick(category)}>{category}</li>
          ))
          }
        </ul>
      </div>
      <div className="project-display">
        {filterProjects.map(project => (
          <div key={project.id} className = 'project-item'>
            <img src={project.photo} alt={project.name} className="project-photo" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
