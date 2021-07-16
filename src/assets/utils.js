import { boardData } from "../assets/boards";

export const setBoardStorage = (data) => {
    // try - catch(??)
    localStorage.setItem("boards", JSON.stringify(data));
};

setBoardStorage(boardData);

export const getBoardStorage = () => {
    return localStorage.getItem("boards");
};
