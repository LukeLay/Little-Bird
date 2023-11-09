import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp, faBookOpen, faBookmark, faBrain, faComment, faDiceFive, faHandFist, faHeart, faHeartPulse, faLightbulb, faPerson, faPersonRunning, faRulerCombined, faShield, faShieldHalved, faShieldHeart, faShieldVirus, faStar, faTableCells } from '@fortawesome/free-solid-svg-icons'
import BackGroundImage from "../components/BackgroundImage";


const TraitDetail = (props) => {
    const [trait, setTrait] = useState(null);

    let traitIndex = props.match.params.traitName;

    useEffect(() => {

        if (traitIndex != undefined && traitIndex) {

            fetch("public/data/5e-SRD-Traits.json")
                .then((response) => response.json())
                .then((data) => {

                    let foundTrait = data.find(obj => obj["index"] == traitIndex);

                    if (foundTrait) {
                        setTrait(foundTrait);
                    }

                    else {
                        console.error("trait not found:", traitIndex);
                    }

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [traitIndex]);

    const borderStyle = { border: "1px solid var(--bs-secondary)", margin: "4px" };

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

            {trait ? (
                <>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/Traits">Traits</Link></li>
                        <li className="breadcrumb-item active">{trait.index}</li>
                    </ol>

                    <BackGroundImage image="public/img/mordenkainens-tome-of-foes-cover-art.png" />

                    <div style={{ padding: "4%", opacity: "0.95" }}>

                        <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                            <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{trait.name}</h2>
                            </div>

                            <div className="card-body" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center" }}>

                                <table className="table table-hover" style={{ width: "98%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                    <thead>
                                        <tr>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Attribute</th>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="table-dark"><td style={headerStyle}><b><b>Name</b></b></td><td style={cellStyle}>{trait["name"]}</td></tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Races</b></td>
                                            <td style={cellStyle}>
                                                {trait["races"] && trait["races"].length > 0
                                                    ? trait["races"].map((race, index) => (
                                                        <span key={index}>
                                                            •&nbsp;{race["name"]}<br />
                                                        </span>
                                                    ))
                                                    : <span style={{ opacity: "0.25" }}><i>none</i></span>
                                                }
                                            </td>
                                        </tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Subraces</b></td>
                                            <td style={cellStyle}>
                                                {trait["subraces"] && trait["subraces"].length > 0
                                                    ? trait["subraces"].map((race, index) => (
                                                        <span key={index}>
                                                            •&nbsp;{race["name"]}<br />
                                                        </span>
                                                    ))
                                                    : <span style={{ opacity: "0.25" }}><i>none</i></span>
                                                }
                                            </td>
                                        </tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Description</b></td>
                                            <td style={cellStyle}>
                                                {trait["desc"] && trait["desc"].length > 0
                                                    ? (trait["desc"].map((desc, index) => (<span key={index}>•&nbsp;{desc}<br /></span>)))
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }
                                            </td>
                                        </tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Trait Specific</b></td>
                                            <td style={cellStyle}>
                                                {trait["trait_specific"]
                                                    ? (

                                                        trait["trait_specific"]["spell_options"]
                                                            && trait["trait_specific"]["spell_options"]
                                                            && trait["trait_specific"]["spell_options"]["from"]
                                                            && trait["trait_specific"]["spell_options"]["from"]["options"]
                                                            && trait["trait_specific"]["spell_options"]["from"]["options"].length > 0
                                                            ? (
                                                                <>
                                                                    <span style={{ color: "var(--bs-info)" }}>Choose {trait["trait_specific"]["spell_options"]["choose"]} from: </span><br />
                                                                    {trait["trait_specific"]["spell_options"]["from"]["options"].map((option, index) => (
                                                                        <span key={index}>
                                                                            •&nbsp;<Link to={`/Spells/${option["item"]["index"]}`}>{option["item"]["name"]}</Link><br />

                                                                        </span>
                                                                    ))
                                                                    }
                                                                </>
                                                            )
                                                            : null
                                                    )
                                                    : null
                                                }

                                                {trait["language_options"]
                                                    && trait["language_options"]["from"]
                                                    && trait["language_options"]["from"]["options"]
                                                    && trait["language_options"]["from"]["options"].length > 0
                                                    ? (
                                                        <>
                                                            <span style={{ color: "var(--bs-info)" }}>Choose {trait["language_options"]["choose"]} from: </span><br />
                                                            {trait["language_options"]["from"]["options"].map((option, index) => (
                                                                <span key={index}>
                                                                    •&nbsp;{option["item"]["name"]}<br />
                                                                </span>
                                                            ))
                                                            }
                                                        </>
                                                    )
                                                    : null
                                                }

                                                {trait["trait_specific"]
                                                    ? (
                                                        <>

                                                            {trait["trait_specific"]["subtrait_options"]
                                                                && trait["trait_specific"]["subtrait_options"]["from"]
                                                                && trait["trait_specific"]["subtrait_options"]["from"]["options"]
                                                                && trait["trait_specific"]["subtrait_options"]["from"]["options"].length > 0
                                                                ? (
                                                                    <>
                                                                        <span style={{ color: "var(--bs-info)" }}>Choose {trait["trait_specific"]["subtrait_options"]["choose"]} from: </span><br />
                                                                        {trait["trait_specific"]["subtrait_options"]["from"]["options"].map((option, index) => (
                                                                            <span key={index}>
                                                                                •&nbsp;{option["item"]["name"]}<br />
                                                                            </span>
                                                                        ))
                                                                        }
                                                                    </>
                                                                )
                                                                : null
                                                            }

                                                        </>
                                                    )
                                                    : null
                                                }

                                                {trait["trait_specific"]
                                                    ? (
                                                        <>
                                                            {
                                                                trait["trait_specific"]["damage_type"]
                                                                    && trait["trait_specific"]["breath_weapon"]["desc"]
                                                                    && trait["trait_specific"]["breath_weapon"]
                                                                    && trait["trait_specific"]["breath_weapon"]["usage"]
                                                                    && trait["trait_specific"]["breath_weapon"]["dc"]
                                                                    && trait["trait_specific"]["breath_weapon"]["damage"]
                                                                    ? (
                                                                        <>

                                                                            <table className="table table-hover" style={{ width: "98%", margin: "1%", border: "1px solid var(--bs-info)", borderRadius: "16px" }}>

                                                                                <tbody>

                                                                                    <tr className="table-dark">
                                                                                        <td style={headerStyle}><b><b>Name</b></b></td>
                                                                                        <td style={cellStyle}>
                                                                                            {trait["trait_specific"]["breath_weapon"]["name"]}
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr className="table-dark">
                                                                                        <td style={headerStyle}><b><b>Description</b></b></td>
                                                                                        <td style={cellStyle}>
                                                                                            {trait["trait_specific"]["breath_weapon"]["desc"]}
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr className="table-dark">
                                                                                        <td style={headerStyle}><b><b>Area of Effect</b></b></td>
                                                                                        <td style={cellStyle}>
                                                                                            {`${trait["trait_specific"]["breath_weapon"]["area_of_effect"]["size"]} ft. ${trait["trait_specific"]["breath_weapon"]["area_of_effect"]["type"]}`}
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr className="table-dark">
                                                                                        <td style={headerStyle}><b><b>Usage</b></b></td>
                                                                                        <td style={cellStyle}>
                                                                                            {`${trait["trait_specific"]["breath_weapon"]["usage"]["times"]} time(s) ${trait["trait_specific"]["breath_weapon"]["usage"]["type"]}`}
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr className="table-dark">
                                                                                        <td style={headerStyle}><b><b>DC</b></b></td>
                                                                                        <td style={cellStyle}>
                                                                                            {`${trait["trait_specific"]["breath_weapon"]["dc"]["dc_type"]["name"]} - ${trait["trait_specific"]["breath_weapon"]["dc"]["success_type"]}`}
                                                                                        </td>
                                                                                    </tr>

                                                                                    {
                                                                                        trait["trait_specific"]["breath_weapon"]["damage"].map((damage, index) => (
                                                                                            <tr className="table-dark" key={index}>
                                                                                                <td style={headerStyle}><b>Damage {index + 1} ({damage["damage_type"]["name"]})</b></td>
                                                                                                <td style={cellStyle}>
                                                                                                    <span>
                                                                                                        {Object.entries(damage["damage_at_character_level"]).map(([level, dice], index) => (
                                                                                                            <span key={index}>
                                                                                                                •&nbsp;<b>Lvl. {level}</b> - {dice}<br />
                                                                                                            </span>
                                                                                                        ))
                                                                                                        }
                                                                                                    </span>
                                                                                                </td>

                                                                                            </tr>
                                                                                        ))
                                                                                    }

                                                                                </tbody>
                                                                            </table>

                                                                        </>
                                                                    )
                                                                    : null

                                                            }
                                                        </>
                                                    )
                                                    : null
                                                }


                                                {trait["trait_specific"] == undefined
                                                    && trait["language_options"] == undefined
                                                    ? (
                                                        <>
                                                            <span style={{ opacity: "0.25" }}><i>none</i></span>
                                                        </>
                                                    )
                                                    : null
                                                }
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </>
            ) : (
                <div>Loading...</div>
            )
            }

        </>
    );
};

export default withRouter(TraitDetail);
