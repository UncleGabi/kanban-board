import "./BoardList.styles.scss";

import BoardCard from "../BoardCard/BoardCard.component";
import { boardData } from "../../assets/boards";

import { useState } from "react";
import Button from "../Button/Button.component";

const BoardList = () => {
    const [boards] = useState(boardData);
    const buttonStyle = {
        text: "New Board",
    };

    return (
        <div className="board-page">
            <h1>My Boards</h1>

            <Button classes="button-style" text={buttonStyle.text} />

            <div className="board-list">
                {boards.map((board) => {
                    const { id, name, assignedTo, dueDate } = board;
                    return (
                        <BoardCard
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

export default BoardList;
