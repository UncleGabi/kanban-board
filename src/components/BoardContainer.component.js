import "./BoardContainer.styles.scss";

import Board from "./Board.component";
import { boardData } from "../assets/boards";

import { useState } from "react";
import Button from "./Button.component";

const BoardContainer = () => {
    const [boards] = useState(boardData);
    const buttonStyle = {
        text: "New Board",
        padding: "10px 25px",
        float: "right",
        backgroundColor: "#4169e1",
        color: "white",
        border: "1px solid black",
        borderRadius: "5px",
        marginRight: "30px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    };

    return (
        <div className="board-container">
            <h1>My Boards</h1>

            <Button text={buttonStyle.text} button_style={buttonStyle} />

            <div className="boards">
                {boards.map((board) => {
                    const { id, name, assignedTo, dueDate } = board;
                    return (
                        <Board
                            className="board"
                            key={id}
                            name={name}
                            assignedTo={assignedTo}
                            dueDate={dueDate}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BoardContainer;
