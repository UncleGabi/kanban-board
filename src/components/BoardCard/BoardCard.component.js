import "./BoardCard.styles.scss";
import PropTypes from "prop-types";
import { BiCalendarPlus } from "react-icons/bi";

const BoardCard = ({ name, date }) => {
    return (
        <div className="board-card">
            <h3>§</h3>
            <h2>{name}</h2>
            <p>
                <BiCalendarPlus size={20} className="calendar" /> {date}
            </p>
        </div>
    );
};

BoardCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
};

export default BoardCard;
