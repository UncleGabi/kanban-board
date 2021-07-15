import "./App.scss";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.page";
import Boards from "./pages/Board.page";
import DidNotFoundPage from "./pages/DidNotFoundPage.page";

// Components
import Header from "./components/Common/Header/Header.component";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/boards/:boardName" component={Boards} />
                <Route exact path="*" component={DidNotFoundPage} />
            </Switch>
        </div>
    );
};

export default App;
