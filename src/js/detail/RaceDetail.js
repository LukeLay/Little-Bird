import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp, faBookOpen, faBookmark, faBrain, faComment, faDiceFive, faHandFist, faHeart, faHeartPulse, faLightbulb, faPerson, faPersonRunning, faRulerCombined, faShield, faShieldHalved, faShieldHeart, faShieldVirus, faStar, faTableCells } from '@fortawesome/free-solid-svg-icons'
import BackGroundImage from "../components/BackgroundImage";


const RaceDetail = (props) => {
    const [race, setRace] = useState(null);

    let raceIndex = props.match.params.raceName;

    useEffect(() => {

        if (raceIndex != undefined && raceIndex) {

            fetch("public/data/5e-SRD-Races.json")
                .then((response) => response.json())
                .then((data) => {

                    let foundRace = data.find(obj => obj["index"] == raceIndex);

                    if (foundRace) {
                        setRace(foundRace);
                    }

                    else {
                        console.error("Race not found:", raceIndex);
                    }

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [raceIndex]);

    const borderStyle = { border: "1px solid var(--bs-secondary)", margin: "4px" };

    const cellStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        padding: "4px"
    };

    return (
        <>

            {race ? (
                <>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/Races">Races</Link></li>
                        <li className="breadcrumb-item active">{race.index}</li>
                    </ol>

                    <BackGroundImage image="public/img/sword-coast-adventurers-guide-cover-art.png" />

                    <div style={{ padding: "4%", opacity: "0.95" }}>

                        <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                            <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{race.name}</h2>
                            </div>

                            <div className="card-body" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div style={{ height: "212px", width: "28%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-body">
                                            <img
                                                src={`public/img/races/${race["index"]}.png`}
                                                alt={`public/img/races/${race["index"]}.png`}
                                                style={{
                                                    borderRadius: "16px",
                                                    maxHeight: "212px",
                                                    maxWidth: "100%",  // Allow the width to adjust proportionally
                                                    position: "absolute", // Position the image absolutely
                                                    top: "50%", // Vertically center the image
                                                    left: "50%", // Horizontally center the image
                                                    transform: "translate(-50%, -50%)" // Center it perfectly
                                                }}
                                                onError={(e) => {
                                                    e.target.src = "public/img/missingno.png"; // Set a placeholder image on error
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ width: "33%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Traits
                                        </div>
                                        <div className="card-body">
                                            {race["traits"] && race["traits"].length > 0
                                                ? (
                                                    <div>
                                                        {race["traits"].map((trait, index) => (
                                                            <span key={index}>
                                                                •&nbsp;{trait["name"]}<br />
                                                            </span>
                                                        ))
                                                        }
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ width: "33%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Speed
                                        </div>
                                        <div className="card-body">
                                            {race["speed"]
                                                ? (
                                                    <div>
                                                        {race["speed"]} ft.
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                </div>



                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div style={{ width: "98%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Ability Bonuses
                                        </div>

                                        <div className="card-body" style={{ display: "flex", flexDirection: "row" }}>
                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Ability Bonuses</div>
                                                {race["ability_bonuses"] && race["ability_bonuses"].length > 0
                                                    ? (
                                                        <div>
                                                            {race["ability_bonuses"].map((ability, index) => (
                                                                <span key={index}>
                                                                    •&nbsp;{ability["ability_score"]["name"]} +{ability["bonus"]}<br />
                                                                </span>
                                                            ))
                                                            }
                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>

                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Ability Bonus Options</div>
                                                {race["ability_bonus_options"]
                                                    ? (
                                                        <div>
                                                            <span style={{ color: "var(--bs-light)" }}>Choose <b>{race["ability_bonus_options"]["choose"]}</b> from the following:</span>
                                                            {race["ability_bonus_options"]["from"]["options"].map((option, index) => (
                                                                <div key={index}>
                                                                    •&nbsp;{option.ability_score.name}<br />
                                                                </div>
                                                            ))}

                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div style={{ width: "98%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Proficiencies
                                        </div>

                                        <div className="card-body" style={{ display: "flex", flexDirection: "row" }}>
                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Starting Proficiencies</div>
                                                {race["starting_proficiency_options"]
                                                    ? (
                                                        <div>
                                                            {race["starting_proficiency_options"]["from"]["options"].map((option, index) => (
                                                                <div key={option.item.index}>
                                                                    •&nbsp;{option.item.name}<br />
                                                                </div>
                                                            ))}
                                                        </div>

                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>

                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Starting Proficiency Options</div>
                                                {race["starting_proficiency_options"]
                                                    ? (
                                                        <div>
                                                            <span style={{ color: "var(--bs-light)" }}>Choose <b>{race["starting_proficiency_options"]["choose"]}</b> from the following:</span>
                                                            {race["starting_proficiency_options"]["from"]["options"].map((option, index) => (
                                                                <div key={index}>
                                                                    •&nbsp;{option.item.name}<br />
                                                                </div>
                                                            ))}

                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Languages
                                        </div>

                                        <div className="card-body" style={{ display: "flex", flexDirection: "row" }}>
                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Primary</div>
                                                {race["languages"] && race["languages"].length > 0
                                                    ? (
                                                        <div>
                                                            {race["languages"].map((language, index) => (
                                                                <span key={index}>
                                                                    •&nbsp;{language["name"]}<br />
                                                                </span>
                                                            ))
                                                            }
                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>

                                            <div style={{ width: "48%", margin: "1%" }}>
                                                <div className="card-title" style={{ fontWeight: "bold", color: "var(--bs-info)" }}>Language Options</div>
                                                {race["language_options"]
                                                    ? (
                                                        <div>
                                                            <span style={{ color: "var(--bs-light)" }}>Choose <b>{race["language_options"]["choose"]}</b> from the following:</span>
                                                            {race["language_options"]["from"]["options"].map((option, index) => (
                                                                <div key={index}>
                                                                    •&nbsp;{option.item.name}<br />
                                                                </div>
                                                            ))}

                                                        </div>
                                                    )
                                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                                }
                                            </div>
                                        </div>



                                    </div>

                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Language Description
                                        </div>
                                        <div className="card-body">
                                            {race["language_desc"]
                                                ? (
                                                    <div>
                                                        {race["language_desc"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>


                                </div>



                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Alignment
                                        </div>
                                        <div className="card-body">
                                            {race["alignment"]
                                                ? (
                                                    <div>
                                                        {race["alignment"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Age
                                        </div>
                                        <div className="card-body">
                                            {race["age"]
                                                ? (
                                                    <div>
                                                        {race["age"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                </div>

                                <div style={{ width: "100%", margin: "0%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Size
                                        </div>
                                        <div className="card-body">
                                            {race["size"]
                                                ? (
                                                    <div>
                                                        {race["size"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>

                                    <div style={{ width: "48%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                        <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                            Size Description
                                        </div>
                                        <div className="card-body">
                                            {race["size_description"]
                                                ? (
                                                    <div>
                                                        {race["size_description"]}
                                                    </div>
                                                )
                                                : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                            }
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>

                </>
            ) : (
                <div>Loading...</div>
            )}

        </>
    );
};

export default withRouter(RaceDetail);
