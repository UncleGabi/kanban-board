import PropTypes from "prop-types";
import "./Button.styles.scss";

const Button = ({ text, classes, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} className={`${classes} button`}>
                {text}
            </button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    classes: PropTypes.string,
};

export default Button;
