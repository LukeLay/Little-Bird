import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Backgrounds = () => {

    const [backgrounds, setBackgrounds] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Backgrounds.json")
            .then((response) => response.json())
            .then((data) => {
                setBackgrounds(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
    };

    const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-white)",
        fontWeight: "bold"
    };

    return (
        <>

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Backgrounds</li>
            </ol>

            <img
                src="public/img/the-shattered-obelisk-cover-art.png"
                alt="public/img/the-shattered-obelisk-cover-art.png"
                style={{
                    position: "fixed",
                    top: "50%",       // Vertically center the image
                    left: "50%",      // Horizontally center the image
                    transform: "translate(-50%, -50%)", // Center it perfectly
                    zIndex: "-1",
                    opacity: "1",
                }}
            />

            <div style={{ padding: "1%", opacity: "0.95" }}>

                <table className="table table-hover" style={{ width: "100%" }}>
                    <thead className="table-primary">
                        <tr>
                            <th style={headerStyle}>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {backgrounds.map((background, index) => (
                            <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"}>

                                <td style={cellStyle}>
                                    <Link to={`/Backgrounds/${background.index}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        {background.name}
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>



        </>
    );
}

export default Backgrounds;