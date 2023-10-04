import "./About.style.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Information about our company" />
      </Helmet>
      <div className="heroctn">
        <Navbar />
        <div className="alldiv">
          <h2>
            <Typewriter
              words={["<Who am I?/>"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              delaySpeed={10000}
              deleteSpeed={100}
            />
          </h2>

          <div className="aboutctn">
            <div className="textContainer">
              <p className="animate__animated animate__bounceIn animate__slow">
                I'm Alper Sayin, a 37-year-old individual born in Turkey and
                raised in the vibrant city of Hamburg, Germany. My journey in
                web development has been both exciting and rewarding. As a
                former student at DCI (Digital Career Institute), I specialized
                in full-stack web development. My skills include{" "}
                <span className="txtspan">HTML</span>,{" "}
                <span className="txtspan">CSS</span>,{" "}
                <span className="txtspan">JavaScript</span>, and{" "}
                <span className="txtspan">React</span>, which I use to craft
                engaging digital experiences. I'm passionate about creating
                user-friendly designs that seamlessly blend form and function.
                My dedication to continuous learning and problem-solving drives
                me to stay updated with the latest trends in web development. I
                believe in the power of collaboration and the value of diverse
                perspectives in achieving outstanding results. I'm always open
                to new opportunities and challenges. Beyond coding, I'm an
                adventurer who loves exploring new places and cultures. I look
                forward to connecting with fellow enthusiasts and contributing
                my skills to meaningful projects. Let's embark on this exciting
                journey together!
              </p>
            </div>
            <div className="aboutpix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
