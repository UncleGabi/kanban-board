import "./BoardList.styles.scss";

import BoardCard from "../BoardCard/BoardCard.component";
import CreateBoardInput from "../CreateBoardInput/CreateBoardInput.component";

import { BoardContext } from "../../contexts/BoardData.context";
import { useContext } from "react";

const BoardList = () => {
    const { boards, setBoards } = useContext(BoardContext);

    return (
        <div className="board-page">
            <div className="title-section">
                <h1>My Boards</h1>

                <CreateBoardInput
                    className="button-style"
                    boardList={boards}
                    newBoard={setBoards}
                />
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
