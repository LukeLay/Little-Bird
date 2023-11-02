import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

const SpellDetail = (props) => {

    const [spell, setSpell] = useState(null);

    let spellIndex = props.match.params.spellName;

    useEffect(() => {

        if (spellIndex != undefined && spellIndex) {

            fetch("public/data/5e-SRD-Spells.json")
                .then((response) => response.json())
                .then((data) => {

                    let foundSpell = data.find(obj => obj["index"] == spellIndex);

                    if (foundSpell) {
                        setSpell(foundSpell);
                    }

                    else {
                        console.error("Spell not found:", spellIndex);
                    }

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }

    }, [spellIndex]);

    const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
        textAlign: "left",
    };

    const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-light)",
        fontWeight: "bold",
        textAlign: "left",
    };

    return (
        <>
            {spell ? (
                <>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/Spells">Spells</Link></li>
                        <li className="breadcrumb-item active">{spell.index}</li>
                    </ol>

                    <img
                        src="public/img/tashas-cauldron-of-everything-cover-art.png"
                        alt="public/img/tashas-cauldron-of-everything-cover-art.png"
                        style={{
                            position: "fixed",
                            top: "50%",       // Vertically center the image
                            left: "50%",      // Horizontally center the image
                            transform: "translate(-50%, -50%)", // Center it perfectly
                            zIndex: "-1",
                            opacity: "1",
                        }}
                    />

                    <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                        <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{spell.name}</h2>
                        </div>

                        <div className="card-body" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                            <div style={{ display: "flex", flexDirection: "row" }}>

                                <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                    <thead>
                                        <tr>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Attribute</th>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-dark"><td style={headerStyle}><b>Level</b></td><td style={cellStyle}>{spell["level"] == 0 ? "0 (Cantrip)" : spell["level"]}</td></tr>

                                        <tr className="table-dark"><td style={headerStyle}><b><b>School</b></b></td><td style={cellStyle}>{spell["school"]["name"]}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Casting Time</b></td><td style={cellStyle}>{spell["casting_time"]}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Range</b></td><td style={cellStyle}>{spell["range"]}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Duration</b></td><td style={cellStyle}>{spell["duration"]}</td></tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Area of Effect</b></td>
                                            <td style={cellStyle}>
                                                {spell["area_of_effect"]
                                                    ? (`${spell["area_of_effect"]["type"]} - ${spell["area_of_effect"]["size"]} ft.`)
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }
                                            </td>
                                        </tr>


                                        <tr className="table-dark"><td style={headerStyle}><b>Ritual</b></td><td style={cellStyle}>{spell["ritual"] ? "Yes" : "No"}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Concentration</b></td><td style={cellStyle}>{spell["concentration"] ? "Yes" : "No"}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Classes</b></td><td style={cellStyle}>{spell["classes"].map((playerClass, index) => (<span key={index}>{index > 0 && ", "}{playerClass["name"]}</span>))}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Subclasses</b></td><td style={cellStyle}>{spell["subclasses"].map((playerClass, index) => (<span key={index}>{index > 0 && ", "}{playerClass["name"]}</span>))}</td></tr>
                                        <tr className="table-dark"><td style={headerStyle}><b>Components</b></td><td style={cellStyle}>{spell["components"].map((component, index) => (<span key={index}>{index > 0 && ", "}{component}</span>))}</td></tr>

                                    </tbody>
                                </table>

                                <div style={{ display: "flex", flexDirection: "column", width: "48%", margin: "1%" }}>

                                    <div style={{ width: "98%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Description
                                        </div>
                                        <div className="card-body">
                                            {spell["desc"]
                                                ? (
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        {spell["desc"].map((desc, index) => (
                                                            <div key={index}>•&nbsp;{desc}</div>
                                                        ))}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ width: "98%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Higher Levels
                                        </div>
                                        <div className="card-body">
                                            {spell["higher_level"]
                                                ? (
                                                    <div>
                                                        {spell["higher_level"].map((level, index) => (
                                                            <div key={index}>•&nbsp;{level}</div>
                                                        ))}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ width: "98%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Material
                                        </div>
                                        <div className="card-body">
                                            {spell["material"]
                                                ? (
                                                    <div>
                                                        {spell["material"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row", width: "98%", margin: "1%" }}>

                                        <div style={{ width: "28%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                            <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                                Damage Type
                                            </div>
                                            <div className="card-body">
                                                {spell["damage"] != undefined && spell["damage"]["damage_type"] != undefined && spell["damage"]["damage_type"]["name"] != undefined
                                                    ? (
                                                        <div>
                                                            {spell["damage"]["damage_type"]["name"]}
                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>

                                        <div style={{ width: "28%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                            <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                                Attack Type
                                            </div>
                                            <div className="card-body">
                                                {spell["attack_type"] != undefined
                                                    ? (
                                                        <div>
                                                            {spell["attack_type"]}
                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>

                                        <div style={{ width: "42%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                            <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                                DC Save
                                            </div>
                                            <div className="card-body">
                                                {spell["dc"] != undefined && spell["dc"]["dc_type"] != undefined
                                                    && spell["dc"]["dc_success"] != undefined
                                                    ? (
                                                        <div>
                                                            {spell["dc"]["dc_type"]["name"]} - {spell["dc"]["dc_success"] == "none" ? "No damage" : spell["dc"]["dc_success"] + " damage"}
                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>



                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>



                                {spell["damage"] && spell["damage"]["damage_at_slot_level"] != undefined
                                    ? (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-primary" colSpan="2" style={{ textAlign: "center" }}>Spell Slot Spells</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>Slot Level</th>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>Damage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(spell["damage"]["damage_at_slot_level"]).map(([slot, damage], index) => (
                                                    <tr key={index} className="table-dark"><td style={headerStyle}><b>Lvl. {slot}</b></td><td style={cellStyle}>{damage}</td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )
                                    : (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-secondary" colSpan="2" style={{ textAlign: "center" }}>Spell Slot Spells</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>Slot Level</th>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>Damage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-dark"><td style={headerStyle}><b>-</b></td><td style={cellStyle}>-</td></tr>
                                            </tbody>
                                        </table>
                                    )

                                }

                                {spell["damage"] && spell["damage"]["damage_at_character_level"] != undefined
                                    ? (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-primary" colSpan="2" style={{ textAlign: "center" }}>Cantrips</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>Character Level</th>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>Damage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(spell["damage"]["damage_at_character_level"]).map(([slot, damage], index) => (
                                                    <tr key={index} className="table-dark"><td style={headerStyle}><b>Lvl. {slot}</b></td><td style={cellStyle}>{damage}</td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )
                                    : (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-secondary" colSpan="2" style={{ textAlign: "center" }}>Cantrips</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>Character Level</th>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>Damage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-dark"><td style={headerStyle}><b>-</b></td><td style={cellStyle}>-</td></tr>
                                            </tbody>
                                        </table>
                                    )

                                }

                                {spell["heal_at_slot_level"] != undefined
                                    ? (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-primary" colSpan="2" style={{ textAlign: "center" }}>Healing Spells</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>Slot Level</th>
                                                    <th className="table-primary" style={{ textAlign: "left" }}>HP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(spell["heal_at_slot_level"]).map(([slot, hp], index) => (
                                                    <tr key={index} className="table-dark"><td style={headerStyle}><b>Lvl. {slot}</b></td><td style={cellStyle}>{hp}</td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )
                                    : (
                                        <table className="table table-hover" style={{ width: "48%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                            <thead>
                                                <tr>
                                                    <th className="table-secondary" colSpan="2" style={{ textAlign: "center" }}>Healing Spells</th>
                                                </tr>
                                                <tr>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>Slot Level</th>
                                                    <th className="table-secondary" style={{ textAlign: "left" }}>HP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-dark"><td style={headerStyle}><b>-</b></td><td style={cellStyle}>-</td></tr>
                                            </tbody>
                                        </table>
                                    )

                                }

                            </div>

                        </div>

                    </div>
                </>
            ) : (
                <>
                    Loading...
                </>
            )
            }
        </>

    );
}

export default SpellDetail;