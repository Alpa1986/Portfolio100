import "./Navbar.css";

import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo"></div>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Me</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/Alpa1986"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
