import "./BoardCard.styles.scss";
import PropTypes from "prop-types";

const BoardCard = ({ name, date }) => {
    return (
        <div className="board-card">
            <h3>{name}</h3>
            <p>
                <span>created on </span> {date}
            </p>
        </div>
    );
};

BoardCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
};

export default BoardCard;
