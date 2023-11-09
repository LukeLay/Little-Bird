import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackGroundImage from "../components/BackgroundImage";

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Classes.json")
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
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
                <li className="breadcrumb-item active">Classes</li>
            </ol>

            <BackGroundImage image="public/img/players-handbook-cover-art.png" />

            <div style={{ padding: "4%", opacity: "0.95" }}>

                <table className="table table-hover" style={{ width: "100%" }}>
                    <thead className="table-primary">
                        <tr>
                            {/* <th style={headerStyle}></th> */}
                            <th style={headerStyle}>Name</th>
                            <th style={{ ...headerStyle, textAlign: "center" }}>Hit Die</th>
                            <th style={{ ...headerStyle, textAlign: "center" }}>Saving Throws</th>
                            <th style={{ ...headerStyle, width: "50%" }}>Proficiencies</th>

                        </tr>
                    </thead>

                    <tbody>
                        {classes.map((playerclass, index) => (
                            <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"}>
                                {/* <td style={cellStyle}>{index+1}</td> */}
                                <td style={cellStyle}>
                                    <Link to={`/Classes/${playerclass.index}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        {playerclass.name}
                                    </Link>
                                </td>
                                <td style={{ ...cellStyle, textAlign: "center" }}>D{playerclass["hit_die"]}</td>
                                <td style={{ ...cellStyle, textAlign: "center" }}>
                                    {playerclass.saving_throws.map((saving_throw, index) => (
                                        <span key={index}>{index > 0 && ", "}{saving_throw.name}</span>
                                    ))}
                                </td>
                                {/* <td style={{ ...cellStyle, width: "50%", wordWrap: "break-word" }}>
                                    {playerclass.proficiencies.map((proficiency, index) => (
                                        <span key={index}>{index > 0 && ", "}{proficiency.name}</span>
                                    ))}
                                </td> */}
                                <td style={cellStyle}>
                                    {playerclass["proficiencies"] && playerclass["proficiencies"].length > 0
                                        ? playerclass["proficiencies"].map((proficiency, index) => (
                                            <span key={index}>
                                                •&nbsp;{proficiency["name"]}<br />
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

export default Classes;