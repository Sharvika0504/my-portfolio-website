
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import animations from "../../utilities/animations";
import scrollService from "../../utilities/scrollService";
import './Services.css';

export default function Services(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id) return;
        animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription = scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

      const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1200,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1100: {
            items: 2,
          },
        },
      };
    const roles = [
        { i: 1, title: 'Full Stack Developer', description: "I adeptly navigate both front-end and back-end technologies, crafting seamless, scalable web applications from concept to deployment. My holistic approach to development ensures both client-side elegance and server-side efficiency, enabling robust solutions that meet diverse business needs." , link: "https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/Full-stack.webp"},
        { i: 2, title: 'Backend Development', description: "I meticulously execute your web application's business logic on the server side, leveraging established frameworks to guarantee both speed and quality in coding practices. Additionally, I develop robustly structured APIs to facilitate seamless integration of your web app with both corporate and external third-party systems and services." , link: "https://neunen.com/wp-content/uploads/backend.png"},
        { i: 3, title: 'Machine Learning/AI Engineer', description: "As a Machine Learning AI enthusiast, I'm passionate about harnessing the power of data to unlock innovative solutions and insights, continuously exploring cutting-edge AI technologies to drive advancements and efficiency across various domains.", link: "https://cdn-icons-png.flaticon.com/512/2835/2835869.png" },
        { i: 4, title: 'Quality Assurance Engineer', description: "I specialize in identifying and resolving software defects, ensuring the highest quality standards. Through meticulous testing and continuous feedback, I aim to enhance product reliability and user satisfaction, embodying a commitment to excellence in every phase of development", link:"https://cdn-icons-png.freepik.com/256/1875/1875684.png" },
        { i: 5, title: 'Cloud Support', description: "With a focus on AWS, I excel in optimizing cloud infrastructure to ensure high performance, security, and scalability. Leveraging deep expertise in AWS services, I provide strategic support and solutions, enabling businesses to harness the full potential of the cloud for transformative growth and efficiency.", link: "https://cdn.iconscout.com/icon/premium/png-256-thumb/cloud-engineering-3531530-2959076.png" },
      ];
  return (
    <div className="service-container" id = {props.id || ""}>
         <ScreenHeader
          title={"Services"}
          subHeading={"From Chaos to Clarity: Your Ultimate Solution Hub"}
        />
         <div className='roles-parent'>
         <OwlCarousel className="owl-carousel"
              id="testimonial-carousel"
              {...options}>
          {roles.map((roles) => (
                <div key={roles.i} className="role-box">
            <img src={roles.link} alt='Image not found'></img>
              <h3>{roles.title}</h3>
              <p>{roles.description}</p>
            </div>
           
            
          ))}
           </OwlCarousel>
        </div>
        </div>

   
  )
}
