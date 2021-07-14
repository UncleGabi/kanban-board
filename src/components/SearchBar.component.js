/* eslint-disable react/prop-types */
import "./SearchBar.styles.scss";

import { useState } from "react";

const SearchBar = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <div className="search-bar">
            <input
                onChange={handleChange}
                className="form-input"
                type="search"
            />
            <label className={`${text.length ? "shrinkLabel" : ""} form-label`}>
                Search
            </label>
        </div>
    );
};

export default SearchBar;
