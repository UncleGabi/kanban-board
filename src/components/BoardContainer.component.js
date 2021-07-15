import "./BoardContainer.styles.scss";

import Board from "./Board.component";
import { getBoardStorage, setBoardStorage } from "../assets/utils";

import { useState, useEffect } from "react";
import Button from "./Button.component";

const BoardContainer = () => {
    const [boards, setBoards] = useState();

    useEffect(() => {
        const data = JSON.parse(getBoardStorage());
        setBoards([...data]);
        setBoardStorage(boards); // updates local storage whenever the component is rendered
    }, []);

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

    const addHandler = () => {
        const newData = {
            id: boards.length + 1,
            name: "Project 10",
            assignedTo: "Dávid",
            dueDate: "2021.07.29",
        };

        setBoards([...boards, newData]);
    };

    return (
        <div className="board-container">
            <h1>My Boards</h1>

            <Button
                handleClick={addHandler}
                text={buttonStyle.text}
                button_style={buttonStyle}
            />

            <div className="boards">
                {boards
                    ? boards.map((board) => {
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
                      })
                    : null}
            </div>
        </div>
    );
};

export default BoardContainer;
