import "./BoardCard.styles.scss";
import PropTypes from "prop-types";

const BoardCard = ({ name, dueDate }) => {
    return (
        <div className="board-card">
            <h2>{name}</h2>
            <p>{dueDate}</p>
        </div>
    );
};

BoardCard.propTypes = {
    name: PropTypes.string,
    dueDate: PropTypes.string,
};

export default BoardCard;
