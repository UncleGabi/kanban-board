import "./Button.styles.scss";
import PropTypes from "prop-types";

const Button = ({ text, button_style, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} style={button_style}>
                {text}
            </button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    button_style: PropTypes.instanceOf(Object),
    handleClick: PropTypes.func,
};

export default Button;
