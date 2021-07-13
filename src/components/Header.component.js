import { Link } from "react-router-dom";
import "./Header.styles.scss";
import SearchBar from "./SearchBar.component";

import { useState } from "react";

const Header = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <div className="header">
            <div className="container menubar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "/boards/kanban",
                                state: {
                                    from: "Home",
                                },
                            }}
                        >
                            Boards
                        </Link>
                    </li>
                </ul>
                <SearchBar handleChange={handleChange} value={text} />
            </div>
        </div>
    );
};

export default Header;
