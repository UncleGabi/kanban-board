/* eslint-disable react/prop-types */
import "./SearchBar.styles.scss";

const SearchBar = ({ handleChange, value }) => {
    return (
        <div className="search-bar">
            <input
                onChange={handleChange}
                className="form-input"
                type="search"
            />
            <label
                className={`${value.length ? "shrinkLabel" : ""} form-label`}
            >
                Search
            </label>
        </div>
    );
};

export default SearchBar;
