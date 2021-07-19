import BoardList from "../components/BoardList/BoardList.component";
import { getBoardStorage } from "../assets/utils";

import { useState, useEffect } from "react";
import { BoardContext } from "../contexts/BoardData.context";

const Home = () => {
    const [boards, setBoards] = useState([]);

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

    return (
        <div>
            <BoardContext.Provider value={{ boards, setBoards }}>
                <BoardList />
            </BoardContext.Provider>
        </div>
    );
};

export default Home;
