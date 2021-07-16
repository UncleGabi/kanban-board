import "./CreateBoardInput.styles.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

const CreateBoardInput = ({
    handleTyping,
    handleSave,
    text,
    success,
    error,
}) => {
    useEffect(() => {
        document.querySelector("input").focus();
    });

    return (
        <div className="container">
            <div className="form">
                <input
                    onChange={handleTyping}
                    type="text"
                    placeholder="Board name.."
                    value={text}
                />
                <button onClick={handleSave}>Create</button>
            </div>
            <small className="error">{error}</small>
            <small className="success">{success}</small>
        </div>
    );
};

CreateBoardInput.propTypes = {
    handleTyping: PropTypes.func,
    handleSave: PropTypes.func,
    text: PropTypes.string,
    success: PropTypes.string,
    error: PropTypes.string,
};

export default CreateBoardInput;
