import "./Board.styles.scss";
import PropTypes from "prop-types";

const Board = ({ name, assignedTo, dueDate }) => {
    return (
        <div className="board">
            <h2>{name}</h2>
            <h3>{assignedTo}</h3>
            <p>{dueDate}</p>
        </div>
    );
};

Board.propTypes = {
    name: PropTypes.string,
    assignedTo: PropTypes.string,
    dueDate: PropTypes.string,
};

export default Board;
