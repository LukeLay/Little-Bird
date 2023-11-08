import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Cleric = () => {

    const [classTable, setClassTable] = useState(null);

    useEffect(() => {



        fetch("public/data/5e-SRD-Levels.json")
            .then((response) => response.json())
            .then((data) => {

                let foundObjects = data.filter(obj => obj["class"] && obj["class"].index === "cleric");

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
                                <th style={{ ...headerStyle, textAlign: "center" }} colSpan="6"></th>
                                <th style={{ ...headerStyle, textAlign: "center" }} colSpan="9">Spell Slots per Spell Level</th>
                            </tr>
                            <tr>
                                <th style={{ ...headerStyle, textAlign: "center" }}>Level</th>
                                <th style={headerStyle}>Class/Sub</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>Proficiency Bonus</th>
                                <th style={headerStyle}>Features</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>Cantrips Known</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>1st</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>2nd</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>3rd</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>4th</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>5th</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>6th</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>7th</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>8th</th>
                                <th style={{ ...headerStyle, textAlign: "center" }}>9th</th>
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
                                        {level["features"].length === 0
                                            ? <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            : level["features"].map((feature, index) => <>•&nbsp;<Link to={`/Features/${feature["index"]}`} key={index}>{feature["name"]}<br /></Link></>)
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["cantrips_known"]
                                            ? level["spellcasting"]["cantrips_known"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_1"]
                                            ? level["spellcasting"]["spell_slots_level_1"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_2"]
                                            ? level["spellcasting"]["spell_slots_level_2"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_3"]
                                            ? level["spellcasting"]["spell_slots_level_3"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_4"]
                                            ? level["spellcasting"]["spell_slots_level_4"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_5"]
                                            ? level["spellcasting"]["spell_slots_level_5"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_6"]
                                            ? level["spellcasting"]["spell_slots_level_6"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_7"]
                                            ? level["spellcasting"]["spell_slots_level_7"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_8"]
                                            ? level["spellcasting"]["spell_slots_level_8"]
                                            : "-"
                                        }
                                    </td>
                                    <td style={{ ...cellStyle, textAlign: "center" }}>
                                        {level["spellcasting"] && level["spellcasting"]["spell_slots_level_9"]
                                            ? level["spellcasting"]["spell_slots_level_9"]
                                            : "-"
                                        }
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

export default Cleric;