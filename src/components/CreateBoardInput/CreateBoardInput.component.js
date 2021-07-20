import { v4 as uuidv4 } from "uuid";
import "./CreateBoardInput.styles.scss";
import PropTypes from "prop-types";
import { useState, useContext } from "react";

import Button from "../common/Button/Button.component";
import { BoardContext } from "../../contexts/BoardData.context";

const CreateBoardInput = () => {
    const [created, setCreated] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { boards, setBoards } = useContext(BoardContext);

    const handleCreate = () => {
        setCreated(!created);
    };

    const autoFocus = () => {
        document.querySelector("#board-name-input").focus();
    };

    const updateBoardName = (e) => {
        const { value } = e.target;
        setText(value);

        value.length > 30
            ? setError("Only 30 characters allowed")
            : setError("");
    };

    const saveBoard = () => {
        const boardName = text;
        const date = String(new Date().toLocaleDateString());
        const newData = {
            id: uuidv4(),
            name: boardName,
            date,
        };
        const { name } = newData;

        if (!name) {
            setError("Board name is required");
            autoFocus();
        } else if (name.length > 30) {
            setError("Only 30 characters allowed");
            autoFocus();
        } else {
            setSuccess("Board saved");
            setTimeout(() => {
                setBoards([...boards, newData]);
                setCreated(!created);
                setSuccess("");
                setError("");
                setText("");
            }, 850);
        }
    };

    const cancelCreation = () => {
        setCreated(!created);
        setText("");
        setError("");
    };

    return (
        <div>
            {created ? (
                <div className="container">
                    <div className="form">
                        <input
                            id="board-name-input"
                            className="input-form"
                            onChange={updateBoardName}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") saveBoard();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") cancelCreation();
                            }}
                            type="text"
                            placeholder="Board name.."
                            value={text}
                            autoFocus
                        />
                        <Button
                            handleClick={saveBoard}
                            classes="button-style"
                            text="Save Board"
                        />
                        <Button
                            classes="button-style cancel-btn"
                            handleClick={cancelCreation}
                            text="Cancel"
                        />
                    </div>
                    <small className="error">{error}</small>
                    <small className="success">{success}</small>
                </div>
            ) : (
                <Button
                    handleClick={handleCreate}
                    classes="button-style"
                    text={"Add New Board"}
                />
            )}
        </div>
    );
};

CreateBoardInput.propTypes = {
    boardList: PropTypes.instanceOf(Array),
    newBoard: PropTypes.func,
};

export default CreateBoardInput;
