import "./BoardList.styles.scss";

import BoardCard from "../BoardCard/BoardCard.component";
import Button from "../common/Button/Button.component";

import { getBoardStorage } from "../../assets/utils";

import { useState, useEffect } from "react";

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        try {
            const getBoardData = async () => {
                const res = await JSON.parse(getBoardStorage());
                setBoards(res);
            };
            getBoardData();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const buttonProperties = {
        text: "New Board",
    };

    const addHandler = () => {
        const newData = {
            id: boards.length + 1,
            name: `Project ${boards.length + 1}`,
            date: "2021.07.31",
        };

        setBoards([...boards, newData]);
    };

    return (
        <div className="board-page">
            <h1>My Boards</h1>

            <Button
                handleClick={addHandler}
                classes="button-style"
                text={buttonProperties.text}
            />

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
