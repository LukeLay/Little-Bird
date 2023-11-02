import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackGroundImage from "../components/BackgroundImage";

const Races = () => {

    const [races, setRaces] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Races.json")
            .then((response) => response.json())
            .then((data) => {
                setRaces(data);
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
                <li className="breadcrumb-item active">Races</li>
            </ol>

            <BackGroundImage image="public/img/sword-coast-adventurers-guide-cover-art.png" />

            <div style={{ padding: "4%", opacity: "0.95" }}>

                <table className="table table-hover" style={{ width: "100%" }}>
                    <thead className="table-primary">
                        <tr>
                            <th style={headerStyle}>Name</th>
                            <th style={headerStyle}>Speed</th>
                            <th style={headerStyle}>Size</th>
                            <th style={headerStyle}>Languages</th>
                            <th style={headerStyle}>Ability Bonuses</th>
                            <th style={headerStyle}>Traits</th>
                        </tr>
                    </thead>

                    <tbody>
                        {races.map((race, index) => (
                            <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"}>

                                <td style={cellStyle}>
                                    <Link to={`/Races/${race.index}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        {race.name}
                                    </Link>
                                </td>

                                <td style={cellStyle}>
                                    {race["speed"]} ft.
                                </td>

                                <td style={cellStyle}>
                                    {race["size"]}
                                </td>

                                <td style={cellStyle}>
                                    {race["languages"] && race["languages"].length > 0
                                        ? race["languages"].map((language, index) => (
                                            <span key={index}>
                                                •&nbsp;{language["name"]}<br />
                                            </span>
                                        ))
                                        : <span style={{ opacity: "0.25" }}><i>none</i></span>
                                    }
                                </td>

                                <td style={cellStyle}>
                                    {race["ability_bonuses"] && race["ability_bonuses"].length > 0
                                        ? race["ability_bonuses"].map((ability, index) => (
                                            <span key={index}>
                                                •&nbsp;{ability["ability_score"]["name"]} +{ability["bonus"]}<br />
                                            </span>
                                        ))
                                        : <span style={{ opacity: "0.25" }}><i>none</i></span>
                                    }
                                </td>

                                <td style={cellStyle}>
                                    {race["traits"] && race["traits"].length > 0
                                        ? race["traits"].map((trait, index) => (
                                            <span key={index}>
                                                •&nbsp;{trait["name"]}<br />
                                            </span>
                                        ))
                                        : <span style={{ opacity: "0.25" }}><i>none</i></span>
                                    }
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>



        </>
    );
}

export default Races;