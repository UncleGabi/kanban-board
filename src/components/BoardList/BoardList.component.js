import "./BoardList.styles.scss";

import BoardCard from "../BoardCard/BoardCard.component";
import Button from "../common/Button/Button.component";

import { getBoardStorage } from "../../assets/utils";

import { useState, useEffect } from "react";
import CreateBoardInput from "../CreateBoardInput/CreateBoardInput.component";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [created, setCreated] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            const getBoardData = async () => {
                const res = await JSON.parse(getBoardStorage());
                setBoards(res);
            };
            getBoardData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const buttonProperties = {
        text: "New Board",
    };

    const autoFocus = () => document.querySelector("input").focus();

    const handleCreate = () => {
        setCreated(!created);
    };

    const handleSave = () => {
        const boardName = text;
        const date = String(new Date().toLocaleDateString());
        let newData = {
            id: boards.length + 1,
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
            setSuccess("Success!");
            setTimeout(() => {
                setBoards([...boards, newData]);
                setCreated(!created);
                setSuccess("");
                setError("");
                setText("");
            }, 850);
        }
    };

    const handleTyping = (e) => {
        let { value } = e.target;
        setText(value);

        if (value.length > 30) {
            setError("Only 30 characters allowed");
        } else {
            setError("");
        }
    };

    return (
        <div className="board-page">
            <div className="title-section">
                <h1>My Boards</h1>

                {created ? (
                    <CreateBoardInput
                        className="button-style"
                        handleTyping={handleTyping}
                        handleSave={handleSave}
                        text={text}
                        success={success}
                        error={error}
                    />
                ) : (
                    <Button
                        handleClick={handleCreate}
                        classes="button-style"
                        text={buttonProperties.text}
                    />
                )}
            </div>

            <div className="board-list">
                {boards &&
                    boards.map((board) => {
                        const { id, name, date } = board;
                        return <BoardCard key={id} name={name} date={date} />;
                    })}
            </div>
        </div>
    );
};

export default BoardList;
