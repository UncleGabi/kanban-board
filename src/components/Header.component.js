import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
    return (
        <div className="header">
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
        </div>
    );
};

export default Header;
