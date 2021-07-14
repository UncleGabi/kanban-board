import "./Button.styles.scss";
import PropTypes from "prop-types";

const Button = ({ text, button_style }) => {
    return (
        <div>
            <button style={button_style}>{text}</button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    button_style: PropTypes.instanceOf(Object),
};

export default Button;
