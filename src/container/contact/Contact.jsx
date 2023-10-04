import "./Contact.style.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Helmet } from "react-helmet-async";
import ButtonComponent from "../../components/button/ButtonComponent";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Information about our company" />
      </Helmet>
      <div className="heroctn">
        <Navbar />

        <div className="btnSend">
          <ButtonComponent s="S" faulty="E" end="ND" />
        </div>
      </div>
    </>
  );
};

export default Contact;
