import "./BoardCard.styles.scss";
import PropTypes from "prop-types";

const BoardCard = ({ name, date }) => {
    return (
        <div className="board-card">
            <h2>{name}</h2>
            <p>{date}</p>
        </div>
    );
};

BoardCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
};

export default BoardCard;
