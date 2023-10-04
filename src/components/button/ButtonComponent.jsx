import "./ButtonComponent.css";
import PropTypes from "prop-types";

const ButtonComponent = ({ s, faulty, end }) => {
  return (
    <>
      <button className="glowing-btn">
        <span className="glowing-txt">
          {s}
          <span className="faulty-letter">{faulty}</span>
          {end}
        </span>
      </button>
    </>
  );
};
ButtonComponent.propTypes = {
  s: PropTypes.string.isRequired,
  faulty: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
export default ButtonComponent;
