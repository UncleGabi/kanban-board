import React from "react";
import { useParams, useHistory, useLocation } from "react-router";

function Boards() {
    const { boardName } = useParams();
    const history = useHistory();
    const location = useLocation();
    console.log(location);

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    const handleGoBack = () => history.goBack();

    return (
        <div
            style={{
                width: "60%",
                margin: "200px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Board: {boardName.capitalize()}</h1>
            <button
                onClick={handleGoBack}
                style={{
                    margin: "10px 70px",
                    padding: "5px 10px",
                    backgroundColor: "#BB1919",
                    color: "white",
                }}
            >
                Back
            </button>
        </div>
    );
}

export default Boards;
