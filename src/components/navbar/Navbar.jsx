import "./Navbar.css";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo"></div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/contact">Contact</a>
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
