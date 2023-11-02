import React, { useState, useEffect } from "react";

const Rogue = () => {

    const [classTable, setClassTable] = useState(null);

    useEffect(() => {



        fetch("public/data/5e-SRD-Levels.json")
            .then((response) => response.json())
            .then((data) => {

                let foundObjects = data.filter(obj => obj["class"] && obj["class"].index === "rogue");

                if (foundObjects) {

                    //foundObjects = foundObjects.sort((a, b) => (a["level"] > b["level"]) ? 1 : -1);            

                    setClassTable(foundObjects);
                }

                else {
                    console.error("None found.");
                }

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
        fontWeight: "bold",
    };

    return (
        <>

            {classTable ? (
                <>

                    <table className="table table-hover" style={{ width: "100%" }}>
                        <thead className="table-primary">
                            <tr>
                                <th style={{ ...headerStyle, textAlign: "center" }}>Level</th>
                                <th style={headerStyle}>Class/Sub</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>Proficiency Bonus</th>
                                <th style={headerStyle}>Sneak Attack</th>
                                <th style={headerStyle}>Features</th>

                            </tr>
                        </thead>
                        <tbody>

                            {classTable.map((level, index) => (
                                <tr key={index}>
                                    <td style={cellStyle}>{level["level"]}</td>
                                    <td style={cellStyle}>
                                        {level["subclass"] ? level["subclass"]["name"] : level["class"]["name"]}
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["prof_bonus"] ? `+${level["prof_bonus"]}` : "-"}
                                    </td>
                                    <td style={cellStyle}>
                                        {level["class_specific"] && level["class_specific"]["sneak_attack"] && level["class_specific"]["sneak_attack"]["dice_count"]
                                            ? `${level["class_specific"]["sneak_attack"]["dice_count"]}D${level["class_specific"]["sneak_attack"]["dice_value"]}`
                                            : "-"}
                                    </td>


                                    <td style={cellStyle}>
                                        {level["features"].length === 0 ? (
                                            <div>
                                                <span style={{ opacity: "0.25" }}>
                                                    <i>none</i>
                                                </span>
                                            </div>
                                        ) : (
                                            level["features"].map((feature, index) => (
                                                <span key={index}>{index > 0 && ", "}{feature["name"]}</span>
                                            ))
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>


                </>

            ) : (

                <>Loading...</>

            )}




        </>
    );
}

export default Rogue;