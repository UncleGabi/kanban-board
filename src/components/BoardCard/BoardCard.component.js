import "./BoardCard.styles.scss";
import PropTypes from "prop-types";

const BoardCard = ({ name, assignedTo, dueDate }) => {
    return (
        <div className="board-card">
            <h2>{name}</h2>
            <h3>{assignedTo}</h3>
            <p>{dueDate}</p>
        </div>
    );
};

BoardCard.propTypes = {
    name: PropTypes.string,
    assignedTo: PropTypes.string,
    dueDate: PropTypes.string,
};

export default BoardCard;
