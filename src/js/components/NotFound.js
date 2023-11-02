import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const NotFound = () => {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                <h2>Sorry,</h2>
                <p>Couldn't find that!</p>
                <br />
                <Link to="/">Return Home</Link>
            </div>
        </>

    );

}

export default NotFound;