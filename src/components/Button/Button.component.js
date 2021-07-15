import PropTypes from "prop-types";
import "./Button.styles.scss";

const Button = ({ text, button_style, classes }) => {
    return (
        <div>
            <button className={`${classes} button`} style={button_style}>
                {text}
            </button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    button_style: PropTypes.instanceOf(Object),
    classes: PropTypes.string,
};

export default Button;
