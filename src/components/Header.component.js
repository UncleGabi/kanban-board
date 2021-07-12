import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
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
