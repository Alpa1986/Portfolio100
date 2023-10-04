import ButtonComponent from "../../components/button/ButtonComponent.jsx";
import { Typewriter } from "react-simple-typewriter";

import Navbar from "../../components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className="heroctn">
      <Navbar />
      <div className="herocontent">
        <div className="herotxt">
          <h1>
            <span className="herospn">A</span>lper{" "}
            <span className="herospn">S</span>ayin
          </h1>
          <h2>
            <Typewriter
              words={["<FullStack Developer/>"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              delaySpeed={10000}
              deleteSpeed={100}
            />
          </h2>
          <ButtonComponent s="P" faulty="R" end="OJECTS" />
        </div>
        <div className="heropix"></div>
      </div>
    </div>
  );
};

export default Home;
