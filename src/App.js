import "./App.scss";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.page";
import Boards from "./pages/Board.page";
import DidNotFoundPage from "./pages/DidNotFoundPage.page";

// Components
import Header from "./components/common/Header/Header.component";

import { getBoardStorage } from "./assets/utils";
import { useState, useEffect } from "react";
import { BoardContext } from "./contexts/BoardData.context";

const App = () => {
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
        <div className="App">
            <BoardContext.Provider value={{ boards, setBoards }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/boards/:boardName" component={Boards} />
                    <Route exact path="*" component={DidNotFoundPage} />
                </Switch>
            </BoardContext.Provider>
        </div>
    );
};

export default App;
